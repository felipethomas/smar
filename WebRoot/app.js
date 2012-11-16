/**
 * Ext JS Library 4.0.1
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 *
 * Projeto Guardiao
 * Fortaleza - Ceará
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
		    items: [{
		        region: 'north',
		        html: 'Mundo Wumpus',
		        margin: '0 0 5 0',
		        border: false
		    }, {
		        region: 'south',
		        title: 'Console',
		        collapsible: false,
		        split: true,
		        height: 100
		    }, {
		        region: 'east',
		        title: 'Configura&ccedil;&otilde;es',
		        collapsible: true,
		        split: true,
		        minWidth: 150
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
			    items: [{
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }/*, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }, {
			        items: [{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        },{
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }, {
			            bodyCls: 'fundo-sala'
			        }]
			    }*/]
		    }]
		});
    }
});
