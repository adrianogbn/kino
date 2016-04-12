/////
// template helpers 
/////

// helper function that returns all available Movies
Template.movie_list.helpers({
	movies:function(){
		return Movies.find({});
	}
});


/////
// template events 
/////

Template.movie_item.events({
	"click .js-upvote":function(event){
		// example of how you can access the id for the movie in the database
		// (this is the data context for the template)
		var movie_id = this._id;
		console.log("Up voting movie with id "+movie_id);
		// put the code in here to add a vote to a movie!

		return false;// prevent the button from reloading the page
	}, 
	"click .js-downvote":function(event){

		// example of how you can access the id for the movie in the database
		// (this is the data context for the template)
		var movie_id = this._id;
		console.log("Down voting movie with id "+movie_id);

		// put the code in here to remove a vote from a movie!

		return false;// prevent the button from reloading the page
	},
	'click .js-test':function(event){
		console.log ("test");

		Meteor.call('testMP');
	},
})

Template.movie_form.events({
	"click .js-toggle-movie-form":function(event){
		$("#movie_form").toggle('slow');
	}, 
	"submit .js-save-movie-form":function(event){

		// here is an example of how to get the url out of the form:
		var url = event.target.url.value;
		console.log("The url they entered is: "+url);
		
		//  put your movie saving code in here!	

		return false;// stop the form submit from reloading the page

	}
});


