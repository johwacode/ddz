/***** ######## routing ######## *****/

Router.map(function(){
    this.route('home',
	{
	  path: '/',
	  data: indexData
	} );
	
    this.route('buchauswahl',
	  {
	    data: buchauswahl,
		action: function(){
		    this.render("Subsite");
		    setTrigger();
		  }
	});
	
	this.route('digitalisierung',
	  {
	    data: digitalisierung,
		action: function(){
		    this.render("Subsite");
		    setTrigger();
		  }
	});
	
	this.route('Digitales-Buch',
	  {
	    data: digitalesBuch,
		action: function(){
		    this.render("Subsite");
		    setTrigger();
		  }
	});
	
	this.route('Archivierung',
	  {
	    data: archivierung,
		action: function(){
		    this.render("Subsite");
		    setTrigger();
		  }
	});
});



function setTrigger(){
  Template.Subsite.rendered = function() {
    initCarousel();
	customPagination();
    Template.Subsite.rendered = null;
  };
}

function customPagination(){
  $( ".owl-controls" ).appendTo( $( "header" ) );
  $( ".owl-controls" ).attr("id","positionMarkerbox");
}


function initCarousel(){
$("#owl-example").owlCarousel(
	{
		items: 1,
		singleItem : true,
		itemsScaleUp : false,
	 
		//Basic Speeds
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
	 
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
	 
		// Navigation
		navigation : false,
		rewindNav : true,
		scrollPerPage : false,
	 
		//Pagination
		pagination : true,
		paginationNumbers: false,
	 
		// Responsive 
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window,
	 
		//Mouse Events
		dragBeforeAnimFinish : true,
		mouseDrag : true,
		touchDrag : true,
	 
		//Transitions
		transitionStyle : false
	}
  );
}