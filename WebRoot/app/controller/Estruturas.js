Ext.define('sma.controller.Estruturas', {
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
    
	montarSalas: function(panel) {
		var totalWidth = panel.getWidth(),
			totalHeight = panel.getHeight(),
			parcialWidth = totalWidth/10,
			parcialHeight = totalHeight/10;
			
		//Ext.getCmp('a1').setHeight(parcialHeight);
		
		console.log(panel.getHeight());
		console.log(panel.getWidth());
	}
});
