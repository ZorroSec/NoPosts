const timezone = ()=>{
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const m = checkTime(minutes)
    const s = checkTime(seconds)
    const hour = document.getElementById('hour')
    hour.innerHTML=`<h4>${hours}:${m}:${s}</h4>`
    hour.style.textAlign = 'center'
    t = setTimeout('timezone()', 500);


}
const checkTime = (i)=>{
    if(i <= 9){
        i = "0" + i
    }
    return i
}