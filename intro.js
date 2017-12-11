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
  changeHeadBack();
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

var fibby = function(n) {
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
  if (fel >= 0) {
    counter = fel;
  } else {
    counter = 0;
  }

  temp.innerHTML = "item " + fibby(counter);
  temp.setAttribute("class", "fibclass");
  temp.addEventListener('mouseover', fchangeHead);
  temp.addEventListener('mouseout', fchangeHeadBack);
  flist.appendChild(temp);
};

var fheading = document.getElementById("hfib");

var fchangeHead = function(e) {
  fheading.innerHTML = e.target.innerHTML;
};

var fchangeHeadBack = function(e) {
  fheading.innerHTML = "Fibonacci!";
};

f.addEventListener('click', fadd);

// Look and say

var s = document.getElementById("s");
var slist = document.getElementById("speaklist");
var sentries = document.getElementsByClassName("speakclass");

var cns = function(n) {
  n += 1;
  if (n == 1) return "1";
  if (n == 2) return "11";

  var output = "11";
  for (var i = 3; i <= n; i++) {
    output += "$";
    var len = output.length;

    var cnt = 1;
    var tmp = "";

    for (var j = 1; j < len; j++) {
      if (output.charAt(j) != output.charAt(j - 1)) {
        tmp += cnt;
        tmp += output.charAt(j - 1);
        cnt = 1;
      } else {
        cnt++;
      }
    }
    output = tmp;
  }
  return output;
};

var sadd = function(e) {
  var temp = document.createElement("li");
  var counter = sentries.length;

  temp.innerHTML = "item " + cns(counter);
  temp.setAttribute("class", "speakclass");
  temp.addEventListener('mouseover', schangeHead);
  temp.addEventListener('mouseout', schangeHeadBack);
  slist.appendChild(temp);
};

var sheading = document.getElementById("hspeak");

var schangeHead = function(e) {
  sheading.innerHTML = e.target.innerHTML;
};

var schangeHeadBack = function(e) {
  sheading.innerHTML = "The Speakuence!";
};

s.addEventListener('click', sadd);