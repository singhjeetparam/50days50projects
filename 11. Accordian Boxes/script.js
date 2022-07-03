var btn = document.getElementsByClassName('btn');
var i;

for(i=0; i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        var content = this.nextElementSibling;
        console.log(content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    })
}
