var b = document.getElementById("b");
var list = document.getElementById("thelist");

var add = function(e) {
  var temp = document.createElement("li");
  temp.innerHTML =  "hi DW c:";
  list.appendChild(temp);
};

b.addEventListener('click', add);
