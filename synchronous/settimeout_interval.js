let timer = setInterval(()=>{
    console.log(seconds + "seconds left");
    seconds--;

    if(seconds < 0){
        clearInterval(timer);
        console.log("Countdown Completed!")
    }
},1000)
<script>
document.addEventListener("keydown",(e)=> {
    setTimeout(()=>{
        if(e.key === "s" || e.key === "S"){
            clearInterval(timer)
            console.log("Stopped by user!")
        }
    },0)
})
</script>