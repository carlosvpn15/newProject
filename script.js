
//TO CHANGE THE STYLE OF THE NAVBAR ON SCROL

// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 150) {
//     $('#navbar1').css('display','none');
//     } else {
//     $('#navbar1').css('display','block');
//     }
//     });


//TO HIDE OR SHOW THE NAVBAR ON MOBILE
$(function() {
    $(".toggle").on("click", function (){
        if($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        }
        else {
            $(".item").addClass("active");
        }
    })
});


//TO CHANGE MOBILE-NAVBAR-ICON ON CLICK
$(function() {
    $(".toggle").on("click", function (){
        if($(".toggle span").hasClass("fa-bars")) {
            $(".toggle span").toggleClass("fa-times");
        }
        else {
            $(".toggle span").addClass("fa-bars");
        }
    })
});



//CARD EXPANDER FX
const panels = document.querySelectorAll('.card-ex-panel') 

panels.forEach((panel) => {
    panel.addEventListener('touchstart', () => { 
        removeAtiveClasses()
        panel.classList.add('active-ex')
    })

})

function  removeAtiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active-ex')
    })
}

// ON MOBILE 2
// const panels = document.querySelectorAll('.card-ex-panel') 

// panels.forEach((panel) => {
//     panel.addEventListener('touchstart', () => { 
//         removeAtiveClasses()
//         panel.classList.add('active-ex')
//     })

// })

// function  removeAtiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active-ex')
//     })
// }


