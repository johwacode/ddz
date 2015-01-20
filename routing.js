Router.map(function(){
    this.route('home',
	{
	  path: '/',
	  data:
	    {categories: [
      { text: "Die Buchauswahl",
		image: "buchwahl",
		link: "buchauswahl" },
      { text: "Digitalisierungsgeräte",
		image: "geraet",
		link: "geraete" },
      { text: "Das digitale Buch",
		image: "ebook",
		link: "digitales-buch" },
      { text: "Langzeitarchivierung",
		image: "archiv",
		link: "archivierung" }
    ],
		aktuelles: "bla bla blub"}
	} );
	
    this.route('buchauswahl',
	{
	  after: function () {
		$(".owl-carousel").owlCarousel({
 
			  navigation : true, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		 
			  // "singleItem:true" is a shortcut for:
			  // items : 1, 
			  // itemsDesktop : false,
			  // itemsDesktopSmall : false,
			  // itemsTablet: false,
			  // itemsMobile : false
		 
		  });
		console.log("inited");
	  }
	});
});