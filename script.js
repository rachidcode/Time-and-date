//Time elements
let hour   = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('seconds');

//Date elements
let day    = document.getElementById('day');
let month  = document.getElementById('month');
let year   = document.getElementById('year');

//Call the updateTime function every second (1000 milliseconds)
setInterval(updateTime, 1000);

//Called every second to update the time
function updateTime(){
  
    //Get the date and time 
    let now = new Date();
  
    //Extract the date and time data needed
    let h   = now.getHours();
    let m   = now.getMinutes();
    let s   = now.getSeconds();
    let d   = now.getDate();
    let mon = now.getMonth() + 1;
    let y   = now.getFullYear();
  
    //Add the date and time data to the page
    hour.innerHTML   = addZero(h);
    minute.innerHTML = addZero(m);
    second.innerHTML = addZero(s);
    day.innerHTML    = addZero(d);
    month.innerHTML  = addZero(mon);
    year.innerHTML   = y;
}
  
  //Adds a zero before the number if the number is smaller than 10
  function addZero(n){
    return (n < 10) ? '0' + n : n;
  }