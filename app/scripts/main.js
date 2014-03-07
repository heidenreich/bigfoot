console.log('You can DO IT!!');

 
$(function(){

	Parse.initialize("pXomYWhXkM6KRovF8EE9WPa2vxzFTRuvmUHcjap1", "LFnPXFI5lj1FEmpmpra5ulMO96X2OXbNAqN7xw9p");

	window.bigfeet = new BigfootCollection();
  	
  	bigfeet.fetch({
  		success: function(){
  			bigfeet.each(function(bf){
  				new ListView({model: bf});
  			})
  		}
  	});
 	
})

$('.upload-button').click(function(){
	var bigfoot = new Bigfoot()

	bigfoot.save({
		name: $('.js-name').val(),
		city: $('.js-city').val(),
		time: $('.js-time').val()

	});

	new ListView({
		model: bigfoot
	})

	$('.js-name').val(''),
	$('.js-city').val(''),
	$('.js-time').val('')

})
