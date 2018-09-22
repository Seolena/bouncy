$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer',
      horizontalOrder: true,

    gutter: 10
  }
})


// $("body").on("click", ".filters li a", function(e) {
//   e.preventDefault();
//   // $(".filters li a").removeClass("active");
//   // $(this).addClass("active");
//   var filter = $(this).attr("data-filter");
//   filter = filter == '*' ? filter : '.' + filter;
//   $isotop.isotope({ filter: filter });
//  });


$( document ).ready(function() {
    var $container = $('.isotope');
    // filter buttons
    $('#filters a').click(function(){
  var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.item', filter: selector });
      return false;
    });    
}); 