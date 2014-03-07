
var Bigfoot = Parse.Object.extend("Bigfoot")

var BigfootCollection = Parse.Collection.extend({
	model: Bigfoot
})


var ListView = Parse.View.extend({

	className: 'bigfoot-view',

	bigfootTemplate: _.template($('#bigfoot-template').text()),

	initialize: function(){
		$('.bigfoot-list').prepend(this.el);
		this.render()

	},

	render: function(){
		this.$el.html(this.bigfootTemplate({model: this.model}));

	}
})

