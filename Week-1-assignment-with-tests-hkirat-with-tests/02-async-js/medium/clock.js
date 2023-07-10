
setInterval(() => {
    let date = new Date()
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM'
    let min = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()
    let sec = date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds()
    let time = date.getHours() + ":" + min + ":" + sec + " " + ampm
    console.log(time)
}, 1000)