function openNav() {
    document.getElementById("myNav").style.width = "100%";
    // document.getElementById("navContent").style.opacity = "100%";
    document.getElementById("logoNav").style.color = "var(--main-color)";
    document.getElementById("menuNav").style.color = "var(--main-color)";
    document.getElementById("menuClose").style.display= "block";
}

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    // document.getElementById("navContent").style.opacity = "0%";
    document.getElementById("logoNav").style.color = "var(--secondary-color)";
    document.getElementById("menuNav").style.color = "var(--secondary-color)";
    document.getElementById("menuClose").style.display= "none";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topNav").style.top = "28px";
  } else {
    document.getElementById("topNav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}