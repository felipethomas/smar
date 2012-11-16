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
		var //parcialWidth = totalWidth/10;
			parcialHeight = height/10;
			paineis = panel.query('panel[tipo="sala"]');
			
		//panel.setHeight(10*parcialHeight);
		
		Ext.Array.each(paineis, function(painel, index, paineisItself) {
		    painel.setHeight(parcialHeight);
		});
		
		//console.log(height);
		//console.log(parcialHeight);
			
		//panel.setWidth(totalHeight);
		//Ext.getCmp('a1').setHeight(parcialHeight);
		//console.log(panel.getHeight());
		//console.log(panel.getWidth());
	}
});
