
var Bigfoot = Parse.Object.extend("Bigfoot")

var BigfootCollection = Parse.Collection.extend({
	model: Bigfoot
})


var BigfootView = Parse.View.extend({

	class: 'bigfoot-view',

	bigfootTemplate: _.template($('#bigfoot-template').text()),

	initialize: function(){
		$('.bigfoot-list').html(this.el);
		this.render()

	},

	render: function(){
		this.$el.html(thisbigfootTemplate(this.models.attributes))
	}
})