
// start up function that creates entries in the Movies databases.
Meteor.startup(function () {
// code to run on server at startup
if (!Movies.findOne()){
	console.log("No movies yet. Creating starter data.");
	  Movies.insert({
		title:"Batman Vs Superman - A Origem da Justiça", 
		url:"http://www.adorocinema.com/filmes/filme-219262/", 
		description:"confronto entre Superman (Henry Cavill) e Zod (Michael Shannon) em Metrópolis fez com que a população mundial se dividisse acerca da existência...", 
		createdOn:new Date()
	});
	 Movies.insert({
		title:" Zootopia: Essa Cidade é o Bicho", 
		url:"http://www.adorocinema.com/filmes/filme-223207/", 
		description:"Judy Hopps é a pequena coelha de uma fazenda isolada, filha de agricultores que plantam cenouras há décadas. Mas ela tem sonhos maiores: pretende...", 
		createdOn:new Date()
	});
	 Movies.insert({
		title:"Casamento Grego 2", 
		url:"http://www.adorocinema.com/filmes/filme-229251/", 
		description:"Toula (Nia Vardalos) e Ian (John Corbett) continuam juntos e passam bastante tempo tentando compreender a problemática filha adolescente. Quando o...", 
		createdOn:new Date()
	});
	Movies.insert({
		title:"Invasão a Londres", 
		url:"http://www.adorocinema.com/filmes/filme-224988/", 
		description:"Com a morte misteriosa do primeiro-ministro britânico, a presença dos líderes mundiais no seu funeral é indispensável, tornando o evento uma ótima...", 
		createdOn:new Date()
	});
}
});

Meteor.methods({
        testMP: function () {
        	var MP = require ("mercadopago");
			var mp = new MP ("6475769310673510", "zxB6afwrJPflUXQef2qAg457fei3qjdf");

			// console.log(mp);

			/*// Get a resource, with optional URL params. Also you can disable authentication for public APIs
			mp.get ({
			    "uri": "/sites",
			    "authenticate": false
			}).then (function (sites) {
			    console.log (sites);
			});*/

			var filters = {
			        "id": null,
			        "site_id": null,
			        "external_reference": null
			};

			mp.searchPayment (filters).then (
		        function success (data) {
		            console.log (JSON.stringify (data, null, 4));
		        },
		        function error (err) {
		            console.log (err);
		        }
		    );
         }
    });