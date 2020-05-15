var oneSecond = 1000;
setInterval(update, oneSecond);

function underHour(x) {
  if (x > 12) {
    x = (x - 12);
  }
  if (x < 10) {
    x = '0' + x;
  }
  return x
}

function underOther(x) {
  if (x < 10) {
    x = '0' + x;
  }
  return x;
}

function changeColor(color, back) { 
  document.body.style.background = color;
  document.body.style.color = back;
}

function update() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  
  if (m == 0) {
    changeColor('white', '#8579ba');
    h = 'GE';
    m = 'T ';
    s = 'UP';

  } else {
  changeColor('#8579ba', 'black');
  h = underHour(h);
  m = underOther(m);
  s = underOther(s);
  }
  
  document.getElementById('hour').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;
}

update();