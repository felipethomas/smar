Ext.define('sma.controller.Configuracoes', {
    extend: 'Ext.app.Controller',
    
    models: [],
    
    stores: [
    	'Configuracoes'
    ],
    
    indexs: [],
    
    velocidade: 5000, 
    
    refs: [{
    	ref: 'console',
        selector: 'panel[region="south"]'
    }, {
    	ref: 'central',
        selector: 'panel[region="center"]'
    }],
    
    init: function() {
        this.control({
        	/*'viewport panel[region="center"]': {
				boxready: this.montarSalas
			},*/
        	
        	'viewport': {
				boxready: this.welcome
			},
			
			'button[action="iniciar"]': {
				click: this.iniciar
			},
			
			'button[action="acelerar"]': {
				click: this.acelerar
			},
			
			'button[action="retardar"]': {
				click: this.retardar
			}
		});
    },
    
    console: function(texto) {
    	this.getConsole().update(this.getConsole().body.getHTML() + texto + "</br>");
    },
    
    welcome: function(viewport, width, height) {
    	this.console("-> sistema pronto para uso.");
    	this.getConsole().setHeight(height-45-(44*10));
    },
    
    iniciar: function(button, e) {
		var center	= this.getCentral(),
			paineis	= center.query('panel[tipo="sala"]');
		
		button.disable();
		
		this.console("-> carregando configuracoes de salas e agentes...");
		this.getStore('Configuracoes').getAt(0).set('valor', 'Iniciado');
		
		Ext.create('Ext.util.DelayedTask', function() {
			this.montarSalas(paineis);
			this.console("-> carregado com sucesso.");
		}, this).delay(1000);
		
		Ext.create('Ext.util.DelayedTask', function() {
			this.console("-> agentes procurando salas...");
			this.ativarDeslocamentoAutomatico(paineis);
		}, this).delay(2000);
	},
	
	ativarDeslocamentoAutomatico: function(paineis) {
		var me = this,
			posicao, proximo, index;
		
		var taskVermelho = Ext.create('Ext.util.DelayedTask', function() {
			proximo	= me.buscarProximo(),
			index	= me.indexs[proximo];
			me.indexs.splice(proximo,1);
			posicao = me.deslocarAgente(paineis, index, 'vermelho');
			me.getStore('Configuracoes').getAt(9).set('valor', posicao);
			
			var taskAzul = Ext.create('Ext.util.DelayedTask', function() {
				proximo	= me.buscarProximo(),
				index	= me.indexs[proximo];
				me.indexs.splice(proximo,1);
				posicao = me.deslocarAgente(paineis, index, 'azul');
				me.getStore('Configuracoes').getAt(10).set('valor', posicao);
				
				var taskVerde = Ext.create('Ext.util.DelayedTask', function() {
					proximo	= me.buscarProximo(),
					index	= me.indexs[proximo];
					me.indexs.splice(proximo,1);
					posicao = me.deslocarAgente(paineis, index, 'verde');
					me.getStore('Configuracoes').getAt(11).set('valor', posicao);
					
					taskVermelho.delay(me.velocidade);
					
				}, this);
			
				taskVerde.delay(me.velocidade);
				
			}, this);
			
			taskAzul.delay(me.velocidade);
			
		}, this);
		
		taskVermelho.delay(me.velocidade);
	},
	
	deslocarAgente: function(paineis, index, cor) {
		var me 		= this,
			proximo	= paineis[index],
			atual	= Ext.dom.Element.get('agente-'+cor);
			
		atual.fadeOut({
    		opacity: 0.30,
    		duration: me.velocidade*0.20,
    		callback: function() {
    			atual.replaceCls('fundo-agente-'+cor, 'fundo-sala');
    			atual.setOpacity(1, false);
    		}
    	});
    	
    	proximo.body.setOpacity(0.25, false);
    	proximo.body.replaceCls('fundo-sala', 'fundo-agente-'+cor);
    	proximo.body.fadeIn({
    		opacity: 1,
    		duration: me.velocidade*0.60
    	});
    	
    	atual.set({id: ''});
    	proximo.body.set({id: 'agente-'+cor});
    	
    	return index;
	},
	
	buscarProximo: function() {
		return Math.floor((Math.random()*(this.indexs.length-1)));
	},
    
	montarSalas: function(paineis) {
		var me = this,
			south			= me.getConsole(),	
			totalPaineis	= paineis.length;
			
		me.montarArrayIndex(totalPaineis);
		
		var indexsSalas		= me.buscarIndexsSalas(),
			indexsAgentes	= me.buscarIndexsAgentes();
			
		Ext.Array.each(paineis, function(painel, index, paineisItself) {
		    me.definirSalas(painel, index, indexsSalas);
		    me.definirAgentes(painel, index, indexsAgentes);
		});
		
		this.getStore('Configuracoes').getAt(4).set('valor', indexsSalas[0]);
		this.getStore('Configuracoes').getAt(5).set('valor', indexsSalas[1]);
		this.getStore('Configuracoes').getAt(6).set('valor', indexsSalas[2]);
		
		this.getStore('Configuracoes').getAt(9).set('valor', indexsAgentes[0]);
		this.getStore('Configuracoes').getAt(10).set('valor', indexsAgentes[1]);
		this.getStore('Configuracoes').getAt(11).set('valor', indexsAgentes[2]);
	},
	
	montarArrayIndex: function(totalPaineis) {
		var me = this;
		
		for(var i = 0; i < totalPaineis; i++) {
			me.indexs.push(i);
		}
		
		return me.indexs;
	},
	
	buscarIndexsSalas: function() {
		var me = this,
			proximo, indexSalaVermelha, indexSalaAzul, indexSalaVerde;
		
		proximo				= this.buscarProximo(),
		indexSalaVermelha 	= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
		
		proximo				= this.buscarProximo(),
		indexSalaAzul  		= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
			
		proximo				= this.buscarProximo(),
		indexSalaVerde  	= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
		
		return [indexSalaVermelha, indexSalaAzul, indexSalaVerde];
	},
	
	buscarIndexsAgentes: function() {
		var me = this,
			proximo, indexAgenteVermelho, indexAgenteAzul, indexAgenteVerde;
		
		proximo				= this.buscarProximo(),
		indexAgenteVermelho	= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
		
		proximo				= this.buscarProximo(),
		indexAgenteAzul		= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
			
		proximo				= this.buscarProximo(),
		indexAgenteVerde  	= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
			
		return [indexAgenteVermelho, indexAgenteAzul, indexAgenteVerde];
	},
	
	definirSalas: function(painel, index, indexsSalas) {
		var	indexSalaVermelha 	= indexsSalas[0],
			indexSalaAzul  		= indexsSalas[1],
			indexSalaVerde  	= indexsSalas[2];
		
		if(index == indexSalaVermelha) {
	   		painel.body.replaceCls('fundo-sala', 'fundo-vermelho');
	    }
	    
	    if(index == indexSalaAzul) {
	    	painel.body.replaceCls('fundo-sala', 'fundo-azul');
	    }
	    
	    if(index == indexSalaVerde) {
	    	painel.body.replaceCls('fundo-sala', 'fundo-verde');
	    }
	},
	
	definirAgentes: function(painel, index, indexsAgentes) {
		var	indexAgenteVermelho = indexsAgentes[0],
			indexAgenteAzul  	= indexsAgentes[1],
			indexAgenteVerde  	= indexsAgentes[2];
		
		if(index == indexAgenteVermelho) {
			painel.body.set({id: 'agente-vermelho'});
	   		painel.body.replaceCls('fundo-sala', 'fundo-agente-vermelho');
	    }
	    
	    if(index == indexAgenteAzul) {
	    	painel.body.set({id: 'agente-azul'});
	    	painel.body.replaceCls('fundo-sala', 'fundo-agente-azul');
	    }
	    
	    if(index == indexAgenteVerde) {
	    	painel.body.set({id: 'agente-verde'});
	    	painel.body.replaceCls('fundo-sala', 'fundo-agente-verde');
	    }
	},
	
	acelerar: function() {
		var velocidadeMaxima = 1000;
		
		if(this.velocidade > velocidadeMaxima) {
			this.velocidade -= 1000;
			this.getStore('Configuracoes').getAt(1).set('valor', this.velocidade + ' ms');
		}
	},
	
	retardar: function() {
		var velocidadeMinima = 10000;
		
		if(this.velocidade < velocidadeMinima) {
			this.velocidade += 1000;
			this.getStore('Configuracoes').getAt(1).set('valor', this.velocidade + ' ms');
		}
	}
});
