var b = document.getElementById("b");
var heading = document.getElementById("h");
var list = document.getElementById("thelist");
var entries = document.getElementsByTagName("li");

var add = function(e) {
  var temp = document.createElement("li");
  temp.innerHTML =  "hi DW c:";
  temp.addEventListener('mouseover', changeHead);
  list.appendChild(temp);
};

var changeHead = function(e) {
  heading.innerHTML = e.srcElement.innerHTML;
};

var changeHeadBack = function(e) {
  heading.innerHTML = "Hello World!";
};

for (var i = 1; i < entries.length; i++) {
  entries[i].addEventListener('mouseover', changeHead);
  entries[i].addEventListener('mouseout', changeHeadBack);
}
b.addEventListener('click', add);