$(function(){
   //tooltip
   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//tooltip ends

//Home page starts
    
    $('#banner').slick(
        {
            arrows:false,
            dots:true,
            dotsClass:"banner-dots container",
            
            
        }
    );

    //New product Slider
    $('.newProductSlider').slick({
        slidesToShow:4,
        prevArrow: '#productSLiderLeftArrow',
        nextArrow:'#productSliderRightArrow',
        responsive: [
            {
              breakpoint: 991.99,
              settings: {
                slidesToShow: 3,

                
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  
                }
              },
            
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
       
    })

    //Flash Sale Slider
    $('.sliding').slick(
      {
          arrows:false,
          dots:true,
          dotsClass:"banner-dots container",
          slidesToShow:2,
          responsive: [
            {
              breakpoint: 991.99,
              settings: {
                slidesToShow: 1,

                
              }
              
            },
           
          
          ]
          
          
      }
  );
  $(".timer")
  .countdown("2024/01/01", function(event) {
    $(".days").html(event.strftime('%D '));
    $(".hours").html(event.strftime('%H '));
    $(".mins").html(event.strftime('%M '));
    $(".sec").html(event.strftime('%S '));
    // $(this).text(
    //   event.strftime('%D days %H:%M:%S')
    // );
  });

  //SpecialOffer
  new VenoBox({
    selector: ".specialOffer-video"
});

//Latest News
$('.slideBar').slick(
  {
      arrows:false,
      dots:true,
      dotsClass:"banner-dots container",
      slidesToShow:4,
      responsive: [
        {
          breakpoint: 991.99,
          settings: {
            slidesToShow: 1,

            
          }
          
        },
       
      
      ]
      
      
  }
);

//home page ends

//about page starts

//Customer Service Starts
new VenoBox({
  selector: ".ourStory-video"
});

//Customer Service Ends

//leadership starts

$('.leaderShipSlider').slick({
  slidesToShow:4,
  prevArrow: '#productSLiderLeftArrow',
  nextArrow:'#productSliderRightArrow',
  responsive: [
      {
        breakpoint: 991.99,
        settings: {
          slidesToShow: 3,

          
        }
      },
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            
          }
        },
      
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
 
})

//leadership ends

//Customer Review Starts
  
  $('.cus_slider').slick(
    {
        arrows:false,
        dots:true,
        dotsClass:"banner-dots container",
        slidesToShow:2,
        responsive: [
          {
            breakpoint: 991.99,
            settings: {
              slidesToShow: 1,

              
            }
            
          },
         
        
        ]
        
        
    }
);

//Customer Review Ends


//about page ends

      
    
})