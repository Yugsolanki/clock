function getDate() {
  let fullDate = new Date();
  let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  let dd = fullDate.getDate();
  let mm = monthList[fullDate.getMonth()];
  let yy = fullDate.getFullYear();
  
  let date = `${dd} ${mm} ${yy}`;
  document.querySelector('.date').innerHTML = date;
}

function getTime() {
  let fullDate = new Date();
  let hh = fullDate.getHours();
  let mm = fullDate.getMinutes();
  let ss = fullDate.getSeconds();
  let time = `${hh}:${mm}:${ss}`;
  document.querySelector('.time').innerHTML = time;
  setTimeout(getTime, 1000);
}

getDate(), getTime()