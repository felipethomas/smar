/**
 * Ext JS Library 4.0.1
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 *
 * Projeto Guardiao
 * Fortaleza - Ceara
 * http://www.insystem.com.br
 *
 * @author Insystem
 */
Ext.Loader.setConfig({enabled : true});
Ext.Loader.setPath('sma', 'app');

Ext.require([
	'Ext.container.Viewport',
	'Ext.resizer.Splitter',
	'Ext.layout.container.Border',
	'Ext.resizer.BorderSplitter',
	'Ext.resizer.Splitter',
	'Ext.resizer.SplitterTracker',
	'Ext.layout.container.Column'
]);

Ext.application({
    name: 'sma',
    
    appFolder: 'app',
    
    controllers: [
    	'Configuracoes'
    ],
    
    launch: function() {
    	Ext.create('Ext.container.Viewport', {
		    layout: 'border',
		    padding: '5 5 5 5',
		    items: [{
		        region: 'south',
		        title: 'Console',
		        collapsible: false,
		        split: true,
		        bodyCls: 'panel-console'
		    }, {
		        region: 'east',
		        title: 'Configura&ccedil;&otilde;es',
		        collapsible: false,
		        split: true,
		        width: 150
		    }, {
		        region: 'center',
		        xtype: 'panel',
		        border: false,
		        layout:'column',
		        defaults: {
		        	border: false,
		        	columnWidth: 0.10,
		        	defaults: {
			        	tipo: 'sala'
			        }
		        },
		        dockedItems: [{
		            xtype: 'toolbar',
		            dock: 'top',
		            ui: 'footer',
		            items: [{
		            	xtype: 'button',
		            	text: 'Iniciar',
			        	action: 'iniciar'
		            }, {
		            	xtype: 'button',
		            	text: 'Pausar',
			        	action: 'pausar'
		            }, {
		            	xtype: 'button',
		            	text: 'Parar',
			        	action: 'parar'
		            }]
		        }],
			    items: [{
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        },{
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }, {
			        	height: 44,
			            bodyCls: 'fundo-sala'
			        }]
			    }]
		    }]
		});
    }
});
