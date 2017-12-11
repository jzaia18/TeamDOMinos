var b = document.getElementById("b");
var heading = document.getElementById("h");
var list = document.getElementById("thelist");
var entries = document.getElementsByClassName("items");

var add = function(e) {
  var temp = document.createElement("li");
  var counter = entries.length;
  temp.innerHTML =  "item " + counter;
  temp.setAttribute("class", "items");
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

// Fib List

var f = document.getElementById("f");
var flist = document.getElementById("fiblist");
var fentries = document.getElementsByClassName("fibclass");

function fib(n) {
  var a = 1;
  var b = 0;
  var temp;

  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
};

var fadd = function(e) {
  var temp = document.createElement("li");
  var counter;
  var fel = fentries.length;
  console.log(fel);
  if (fel >= 0) {
    counter = fel;
  } else {
    counter = 0;
  }

  temp.innerHTML = "item " + fib(counter);
  temp.setAttribute("class", "fibclass");
  temp.addEventListener('mouseover', changeHead);
  temp.addEventListener('mouseout', changeHeadBack);
  flist.appendChild(temp);
};

f.addEventListener('click', fadd);
