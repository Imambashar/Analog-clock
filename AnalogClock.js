const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');



setInterval(() => {
    Time = new Date();
    //Extracting hour, minute and seconds from the date
    Hour = Time.getHours();
    Minutes = Time.getMinutes();
    Seconds = Time.getSeconds();

    Hrotation= 30*Hour + Minutes/2;
    Mrotation= 6*Minutes;
    Srotation= 6*Seconds;

    hr.style.transform = `rotateZ(${Hrotation}deg)`;
    min.style.transform = `rotateZ(${Mrotation}deg)`;
    sec.style.transform = `rotateZ(${Srotation}deg)`;

});