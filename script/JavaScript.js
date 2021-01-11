//Scroll menu
		$(document).ready(function(){
			var wnd = $(window)
			var menu = $('.navbar')
			var links = $('.nav-link')

			console.log(links)

			wnd.scroll(function (){
				var top = wnd.scrollTop()
				var bgColor = null
				var socialItem=$('.first-social__item a')
				var firstTime=$('.first__time')
				// var firstTime=$('.first time')
				var stylesScrol={ 
					activeColor:'#EBC300',
					lightColor:'#fff',
					borderColor:'rgba(255,255,255,0.2)'
				}
				if (top > 10) {
					bgColor = '#000'
					links.css('padding', '10px 8px')
					socialItem.css('borderColor',stylesScrol.activeColor)
					socialItem.css('color',stylesScrol.activeColor)
					firstTime.css('color',stylesScrol.activeColor)
                   }
				 else {
					bgColor = 'transparent'
					links.css('padding', '30px 8px')
					socialItem.css('borderColor',stylesScrol.borderColor)
					socialItem.css('color',stylesScrol.lightColor)
                    firstTime.css('color',stylesScrol.lightColor)
				}

				menu.css('backgroundColor', bgColor)
			})
			// =================================================
           // slider
             $('.sliderSpec').slick({
				arrows: true,
				dots: true

			});


			$("#lightgallery").lightGallery();  
// ============================================================// =================================================
    
// ============================================================
			$('.grids').isotope({
			  // options 
			  itemSelector: '.grids-item',
			  layoutMode: 'masonry'
			});

			$('.filter-button-group').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $('.grids').isotope({ filter: filterValue });
			});
		});
