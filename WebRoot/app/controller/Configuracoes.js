Ext.define('sma.controller.Configuracoes', {
    extend: 'Ext.app.Controller',
    
    models: [],
    stores: [],
    
    init: function() {
        this.control({
        	'viewport panel[region="center"]': {
				boxready: this.montarSalas
			}
		});
    },
    
	montarSalas: function(panel, width, height, eOpts) {
		var me = this,
			parcialHeight 		= height/10,
			paineis 			= panel.query('panel[tipo="sala"]'),
			totalPaineis		= paineis.length,
			indexsSalas			= me.buscarIndexsSalas(totalPaineis),
			indexsAgentes		= me.buscarIndexsAgentes(totalPaineis, indexsSalas);
			
		//console.log(indexsSalas);
		//console.log(indexsAgentes);
			
		/*Ext.Array.each(paineis, function(painel, index, paineisItself) {
		    painel.setHeight(parcialHeight);
		    
		    me.definirSalas(painel, index, indexsSalas);
		    me.definirAgentes(painel, index, indexsAgentes);
		});*/
		
	},
	
	buscarIndexsSalas: function(total) {
		var indexSalaVermelha 	= Math.floor((Math.random()*total)),
			indexSalaAzul  		= this.buscarIndexSalaAzul(indexSalaVermelha, total),
			indexSalaVerde  	= this.buscarIndexSalaVerde(indexSalaVermelha, indexSalaAzul, total);
		
		return [indexSalaVermelha, indexSalaAzul, indexSalaVerde];
	},
	
	buscarIndexSalaAzul: function(indexSalaVermelha, total) {
		var indexSalaAzul = Math.floor((Math.random()*total));
		
		if(indexSalaAzul == indexSalaVermelha) {
			this.buscarIndexSalaAzul(indexSalaVermelha);
		} else {
			return indexSalaAzul;
		}
	},
	
	buscarIndexSalaVerde: function(indexSalaVermelha, indexSalaAzul, total) {
		var indexSalaVerde = Math.floor((Math.random()*total));
		
		if(indexSalaVerde == indexSalaVermelha || indexSalaVerde == indexSalaAzul) {
			this.buscarIndexSalaVerde(indexSalaVermelha, indexSalaAzul);
		} else {
			return indexSalaVerde;
		}
	},
	
	buscarIndexsAgentes: function(total, salas) {
		var indexAgenteVermelho	= this.buscarIndexAgenteVermelho(salas, total),
			indexAgenteAzul  	= this.buscarIndexAgenteAzul(salas, indexAgenteVermelho, total),
			indexAgenteVerde  	= this.buscarIndexAgenteVerde(salas, indexAgenteVermelho, indexAgenteAzul, total);
			
		return [indexAgenteVermelho, indexAgenteAzul, indexAgenteVerde];
	},
	
	buscarIndexAgenteVermelho: function(salas, total) {
		var indexAgenteVermelho = Math.floor((Math.random()*total));
		
		//console.log('indexAgenteVermelho - ' + indexAgenteVermelho);
		
		if(this.contem(salas, indexAgenteVermelho)) {
			//console.log('c - ' + indexAgenteVermelho);
			this.buscarIndexAgenteVermelho(salas, total);
		} else {
			//console.log('else - ' + indexAgenteVermelho);
			return indexAgenteVermelho;
		}
	},
	
	buscarIndexAgenteAzul: function(salas, indexAgenteVermelho, total) {
		var indexAgenteAzul = Math.floor((Math.random()*total));
		
		if(this.contem(salas, indexAgenteAzul) || indexAgenteAzul == indexAgenteVermelho) {
			this.buscarIndexAgenteAzul(salas, indexAgenteVermelho, total);
		} else {
			return indexAgenteAzul;
		}
	},
	
	buscarIndexAgenteVerde: function(salas, indexAgenteVermelho, indexAgenteAzul, total) {
		var indexAgenteVerde = Math.floor((Math.random()*total));
		
		if(this.contem(salas, indexAgenteVerde) || indexAgenteVerde == indexAgenteVermelho || indexAgenteVerde == indexAgenteAzul) {
			this.buscarIndexAgenteVerde(salas, indexAgenteVermelho, indexAgenteAzul, total);
		} else {
			return indexAgenteVerde;
		}
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
	    }
	    
	    if(index == indexAgenteVerde) {
	    	painel.body.replaceCls('fundo-sala', 'fundo-agente-verde');
	    }
	},
	
	contem: function(conjunto, item) {
		var resposta = false;
		
		for(var i in conjunto) {
			if(conjunto[i] == item) {
				resposta = true;
				break;
			}
		}
		
		return resposta;
	}
});
