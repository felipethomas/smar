Ext.define('sma.store.Configuracoes', {
	extend: 'Ext.data.Store',
	
	fields: [
		'atributo', 
		'valor'
	],
	
    data: [{
		atributo: 'Status',
		valor: 'Parado'
	}, {
		atributo: 'Velocidade',
		valor: '5000 ms'
	}, {
		atributo: '',
		valor: ''
	}, {
		atributo: '<u>Sala</u>',
		valor: '<u>Posi&ccedil;&atilde;o</u>'
	}, {
		atributo: 'Vermelha',//4
		valor: ''
	}, {
		atributo: 'Azul',//5
		valor: ''
	}, {
		atributo: 'Verde',//6
		valor: ''
	}, {
		atributo: '',
		valor: ''
	}, {
		atributo: '<u>Agente</u>',
		valor: '<u>Posi&ccedil;&atilde;o</u>'
	}, {
		atributo: 'Vermelho',//9
		valor: ''
	}, {
		atributo: 'Azul',//10
		valor: ''
	}, {
		atributo: 'Verde',//11
		valor: ''
	}]
});