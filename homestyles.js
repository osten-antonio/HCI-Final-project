var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var accc = document.getElementsByClassName("accordionc");
var ic;

for (ic = 0; ic < accc.length; ic++) {
  accc[ic].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var accd = document.getElementsByClassName("accordiond");
var id;
for (id = 0; id < accd.length; id++) {
  accd[id].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// TODO: adjust value here

document.querySelector('.leftscroll').addEventListener('click', () => {
    const wrapper = document.querySelector('.resourceswrapper');
    wrapper.scrollBy({ left: -600, behavior: 'smooth' }); 
});

document.querySelector('.rightscroll').addEventListener('click', () => {
    const wrapper = document.querySelector('.resourceswrapper');
    wrapper.scrollBy({ left: 600, behavior: 'smooth' }); 
});

var accd = document.getElementsByClassName("accordiond");
var id;




