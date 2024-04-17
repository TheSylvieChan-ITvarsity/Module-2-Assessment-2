function fnMenu() {
    var x = document.getElementById("navlinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

  function fnGallery(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  } 

  function fnScreenSize(){
    var w = document.documentElement.clientWidth || window.innerWidth;
    var modal = document.getElementById("myModal");
    if (w > 450 ) {
        modal.style.display = "block";
    }
    var span = document.getElementsByClassName("close")[0];
 
 span.onclick = function() {
    modal.style.display = "none";
  }
  return 0;
}