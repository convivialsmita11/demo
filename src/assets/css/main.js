$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});

 //script for sticky section like tabs starts 

 // Click event
         offset = 0;
             $('#primary-navwrapper li a[href^="#"]').click(function(event) {
         
                 // Prevent from default action to intitiate
                 event.preventDefault();
                  
                 //remove active from all anchor and add it to the clicked anchor
                 $('#primary-navwrapper li a[href^="#"]').removeClass("active")
                 $(this).addClass('active');
                 
                 // The id of the section we want to go to
                 var anchorId = $(this).attr('href');
         
                 // Our scroll target : the top position of the section that has the id referenced by our href
                 var target = $(anchorId).offset().top - offset;
                 console.log(target);
         
                 $('html, body').stop().animate({ scrollTop: target }, 600, function () {
                     window.location.hash = anchorId;
                 });
         
                 return false;
             });
         
         //check the pages when scroll event occurs
         $(window).scroll(function(){
             // Get the current vertical position of the scroll bar
             position = $(this).scrollTop();
             $('#primary-navwrapper li a[href^="#"]').each(function(){
                   var anchorId = $(this).attr('href'); 
                    var target = $(anchorId).offset().top - offset;
                    // check if the document has crossed the page
                 console.log(position,target);
                 if(position>=target){
                      //remove active from all anchor and add it to the clicked anchor
                     $('#primary-navwrapper li a[href^="#"]').removeClass("active")
                     $(this).addClass('active'); 
                 }
             })
         })
         $(function(){
             //set our scroll state after dom ready
             $(window).scroll();
         })


  //script for sticky section like tabs ends
  
  //script for images fadeinup for steps in home page 
  $("#slideshow5 > div:gt(0)").hide();
setInterval(function() {
  $('#slideshow5 > div:first')
    .fadeOut(4000)
    .end();
}, 4000);
$("#slideshow6 > div:gt(0)").hide();
setInterval(function() {
  $('#slideshow6 > div:first')
    .fadeOut(6000)
    .end();
  }, 6000);
$("#slideshow7 > div:gt(0)").hide();
setInterval(function() {
  $('#slideshow7 > div:first')
   .fadeOut(10000)
   .end();
}, 10000);
// end script for images fadeinup for steps in home page 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  