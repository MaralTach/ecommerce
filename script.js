let time = document.getElementById('current-time');

setInterval(() =>{
    let day = new Date();
    time.innerHTML = day.toLocaleTimeString();
},1000)

fetch("https://anthonyfs.pythonanywhere.com/api/products/")