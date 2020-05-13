var arr1;
var arr2;

function output() {
  var list1 = document.getElementById('list1');
  var list2 = document.getElementById('list2');
  arr1 = list1.value.split('\n');
  arr2 = list2.value.split('\n');
}

function generate() {
  output();

  var result = document.getElementById('result');
  result.innerHTML = arr1[Math.floor(Math.random() * arr1.length)] + " " + arr2[Math.floor(Math.random() * arr2.length)];
}


