Ext.define('sma.controller.Configuracoes', {
    extend: 'Ext.app.Controller',
    
    models: [],
    stores: [],
    
    indexs: [],
    
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
			}
		});
    },
    
    console: function(texto) {
    	this.getConsole().update(texto);
    },
    
    welcome: function(viewport, width, height) {
    	this.console("-> Sistema pronto para uso.");
    	this.getConsole().setHeight(height-45-(44*10));
    },
    
    iniciar: function(button, e) {
		var center = this.getCentral();
		
		button.disable();
		
		this.montarSalas(center);
	},
    
	montarSalas: function(panel) {
		var me = this,
			south			= me.getConsole(),	
			paineis 		= panel.query('panel[tipo="sala"]'),
			totalPaineis	= paineis.length;
			
		me.montarArrayIndex(totalPaineis);
		
		var indexsSalas		= me.buscarIndexsSalas(),
			indexsAgentes	= me.buscarIndexsAgentes();
			
		Ext.Array.each(paineis, function(painel, index, paineisItself) {
		    me.definirSalas(painel, index, indexsSalas);
		    me.definirAgentes(painel, index, indexsAgentes);
		});
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
		
		proximo				= Math.floor((Math.random()*me.indexs.length)),
		indexSalaVermelha 	= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
		
		proximo				= Math.floor((Math.random()*me.indexs.length)),
		indexSalaAzul  		= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
			
		proximo				= Math.floor((Math.random()*me.indexs.length)),
		indexSalaVerde  	= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
		
		return [indexSalaVermelha, indexSalaAzul, indexSalaVerde];
	},
	
	buscarIndexsAgentes: function() {
		var me = this,
			proximo, indexAgenteVermelho, indexAgenteAzul, indexAgenteVerde;
		
		proximo				= Math.floor((Math.random()*me.indexs.length)),
		indexAgenteVermelho	= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
		
		proximo				= Math.floor((Math.random()*me.indexs.length)),
		indexAgenteAzul		= me.indexs[proximo];
		
		me.indexs.splice(proximo,1);
			
		proximo				= Math.floor((Math.random()*me.indexs.length)),
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
	   		painel.body.replaceCls('fundo-sala', 'fundo-agente-vermelho');
	    }
	    
	    if(index == indexAgenteAzul) {
	    	painel.body.replaceCls('fundo-sala', 'fundo-agente-azul');
	    	/*painel.body.fadeOut({
	    		opacity: 0.30,
	    		duration: 2000,
	    		callback: function() {
	    			painel.body.replaceCls('fundo-agente-azul', 'fundo-sala');
	    			painel.body.setOpacity(1, false);
	    		}
	    	});*/
	    }
	    
	    if(index == indexAgenteVerde) {
	    	//painel.body.setOpacity(0.25, false);
	    	painel.body.replaceCls('fundo-sala', 'fundo-agente-verde');
	    	//painel.body.fadeIn({opacity: 1, duration: 5000});
	    }
	}
});
