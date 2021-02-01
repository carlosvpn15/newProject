 
 // -----------------------------------------------------------------------
// TO CHANGE THE STYLE OF THE NAVBAR ON SCROL
$(function() {
    var header = $('#navbar1');
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('nav-scroll-up').addClass("nav-scroll-down");
        } else {
            header.removeClass("nav-scroll-down").addClass('nav-scroll-up');
        }
    });
});



 // -----------------------------------------------------------------------
// TO HIDE OR SHOW THE NAVBAR ON MOBILE
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

 // -----------------------------------------------------------------------
// TO CHANGE MOBILE-NAVBAR-ICON ON CLICK
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


 // -----------------------------------------------------------------------
// CARD EXPANDER FX
const panels = document.querySelectorAll('.card-ex-panel') 

panels.forEach((panel) => {
    panel.addEventListener('click', () => { 
        removeAtiveClasses()
        panel.classList.add('active-ex')
    })
})

function  removeAtiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active-ex')
    })
}


	// Get the modal
	var modal = document.getElementById('id01');
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
    }

 // -----------------------------------------------------------------------   
// SHOW CONTENT ON SCROLL
const boxes = document.querySelectorAll('.display-content');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        } 
    })
}


// -----------------------------------------------------------------------
// SPLIT-SCREEN-CONTAINER
const left = document.querySelector('.screen-left')
const right = document.querySelector('.screen-right')
const container = document.querySelector('.split-screen-container')


left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

