import { LoginByToken,LoginChecked} from "./moudle.js";

LoginChecked()
let share_to = document.querySelector("#share_to")
let share_box = document.querySelector("#share_box")
share_to.addEventListener("mousedown",() => {
    share_to.style.backgroundColor = "rgb(255,153,51)"
})
share_to.addEventListener("mouseup",() => {
    share_to.style.backgroundColor = ""
})
let upordown = document.querySelector("#upordown")
let share_com = document.querySelector("#share_com")
share_com.style.display = "none"
{
    let flag = 0
    share_to.addEventListener("click", (event) => {
        if(flag == 0){
            share_box.classList.add("share_box_border")
            upordown.textContent = "▼"
            share_com.style.display = "block"
            event.stopPropagation()
            flag = 1
        }else{
            share_box.classList.remove("share_box_border")
            share_com.style.display = "none"
            upordown.textContent = "▲"
            flag = 0
        }
    })
}

document.onclick = function() {
	share_box.classList.remove("share_box_border")
    share_com.style.display = "none"
    upordown.textContent = "▲"
}
let actorbriefinfo = document.querySelector("#actorbriefinfo")
if(actorbriefinfo.textContent.length > 276){
    let tempcontent = actorbriefinfo.textContent
    actorbriefinfo.innerHTML = actorbriefinfo.textContent.substr(0,276) + "..." + "<div class='moweidiv'>(展开全部)</div>"
    let moweidiv = document.querySelector(".moweidiv")
    moweidiv.addEventListener("click",() => {
        actorbriefinfo.innerHTML = tempcontent
        moweidiv.style.display = "none"
    })
}
