/* Dark Mode */


const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})

/*Scrollbar */


/** videos */
$(document).ready(function () {
    $(".video-gallery").magnificPopup({
      delegate: "a",
      type: "iframe",
      gallery: {
        enabled: true
      }
    });
  });
  
