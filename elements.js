
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


document.querySelector('.leftscroll').addEventListener('click', () => {
    const wrapper = document.querySelector('.resourceswrapper');
    wrapper.scrollBy({ left: -600, behavior: 'smooth' }); 
});

document.querySelector('.rightscroll').addEventListener('click', () => {
    const wrapper = document.querySelector('.resourceswrapper');
    wrapper.scrollBy({ left: 600, behavior: 'smooth' }); 
});
