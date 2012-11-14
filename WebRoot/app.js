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
	'Ext.container.Viewport'
]);

Ext.application({
    name: 'sma',
    
    appFolder: 'app',
    
    controllers: [
    	'Estruturas'
    ],
    
    launch: function() {
    	var altura = '10%';
    	
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
		        collapsible: true,
		        split: true,
		        minHeight: 100
		    }, {
		        region: 'east',
		        title: 'Configura&ccedil;&otilde;es',
		        collapsible: true,
		        split: true,
		        minWidth: 150
		    }, {
		        region: 'center',
		        xtype: 'panel',
		        layout:'column',
			    items: [{
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala',
			            id:'a1',
			            height: altura
			        }, {
			            html: 'Sala',
			            height: altura
			        }, {
			            html: 'Sala',
			            height: altura
			        }, {
			            html: 'Sala',
			            height: altura
			        }, {
			            html: 'Sala',
			            height: altura
			        },{
			            html: 'Sala',
			            height: altura
			        }, {
			            html: 'Sala',
			            height: altura
			        }, {
			            html: 'Sala',
			            height: altura
			        }, {
			            html: 'Sala',
			            height: altura
			        }, {
			            html: 'Sala',
			            height: altura
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }, {
			        columnWidth: 0.10,
			        items: [{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        },{
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }, {
			            html: 'Sala'
			        }]
			    }]
		    }]
		});
    }
});
