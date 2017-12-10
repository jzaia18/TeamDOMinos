var b = document.getElementById("b");
var heading = document.getElementById("h");
var list = document.getElementById("thelist");
var entries = document.getElementsByTagName("li");

var add = function(e) {
  var temp = document.createElement("li");
  var counter = entries.length;
  temp.innerHTML =  "item " + counter;
  temp.addEventListener('mouseover', changeHead);
  temp.addEventListener('mouseout', changeHeadBack);
  temp.addEventListener('click', delListElement);
  list.appendChild(temp);
};

var changeHead = function(e) {
  heading.innerHTML = e.target.innerHTML;
};

var changeHeadBack = function(e) {
  heading.innerHTML = "Hello World!";
};

var delListElement = function(e) {
  list.removeChild(this);
};

for (var i = 0; i < entries.length; i++) {
  entries[i].addEventListener('mouseover', changeHead);
  entries[i].addEventListener('mouseout', changeHeadBack);
  entries[i].addEventListener('click', delListElement);
}

b.addEventListener('click', add);
