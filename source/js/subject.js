import { LoginByToken,LoginChecked} from "./moudle.js";

LoginChecked()
let c_stars = document.querySelectorAll(".c_stars")
let eva_score = document.querySelector("#eva_score")
let score_ch = ["很差","较差","还行","推荐","力荐"]
for (let i = 0; i < c_stars.length;i++){
    c_stars[i].addEventListener("mouseover",() => {
        for(let k = 0; c_stars.length ; k++){
            if(k <= i){
                c_stars[k].src = "./pictures/subject/staryellow.png"
            }if (k > i){
                c_stars[k].src = "./pictures/subject/star.png"
            }
            eva_score.textContent = score_ch[i]
        }

    })
}
let eva_star = document.querySelector("#eva_star")
eva_star.addEventListener("mouseout",() => {
    for(let i = 0; i < c_stars.length ; i++){
        c_stars[i].src = "./pictures/subject/star.png"
    }
    eva_score.textContent = ""
})



let c_stars1 = document.querySelectorAll(".c_stars1")
let eva1_score = document.querySelector("#eva1_score")
for (let i = 0; i < c_stars1.length;i++){
    c_stars1[i].addEventListener("mouseover",() => {
        for(let k = 0; c_stars1.length ; k++){
            if(k <= i){
                c_stars1[k].src = "./pictures/subject/staryellow.png"
            }if (k > i){
                c_stars1[k].src = "./pictures/subject/star.png"
            }
            eva1_score.textContent = score_ch[i]
        }

    })
}
let eva1_star = document.querySelector("#eva1_star")
eva1_star.addEventListener("mouseout",() => {
    for(let i = 0; i < c_stars1.length ; i++){
        c_stars1[i].src = "./pictures/subject/star.png"
    }
    eva1_score.textContent = ""
})




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
            upordown.textContent = "▲"
            share_com.style.display = "block"
            event.stopPropagation()
            flag = 1
        }else{
            share_box.classList.remove("share_box_border")
            share_com.style.display = "none"
            upordown.textContent = "▼"
            flag = 0
        }
    })
}

document.onclick = function() {
	share_box.classList.remove("share_box_border")
    share_com.style.display = "none"
    upordown.textContent = "▼"
}
let arr = new Array(5).fill(0)
for(let i = 0; i <100 ;i++){
    let num = parseInt(Math.random()*10)%5
    arr[num]++
}
let rect_numscore = document.querySelectorAll(".rect_numscore")
for(let i = 0; i < 5 ;i++){
    rect_numscore[i].innerHTML = arr[i]+parseInt(Math.random()*10)*0.1+"%"
}
let rect_score = document.querySelectorAll(".rect_score")
for(let i = 0 ; i < 5 ; i++){
    rect_score[i].style.width = 6*(arr[i]/100) + "rem"
}
let kinds_than = document.querySelector("#kinds_than")
kinds_than.innerHTML = parseInt(Math.random()*100) + "%"+"<span id='kinds'>null</span>"
let commentboxborder = document.querySelector("#commentboxborder")
let commentbox_close = document.querySelector("#commentbox_close")
commentbox_close.addEventListener("click",()=> {
    commentboxborder.style.display = "none"
})
let writecomment = document.querySelectorAll(".writecomment")
for(let i = 0; i < writecomment.length ; i++){
    writecomment[i].addEventListener("click",() => {
        commentboxborder.style.display = "block"
    })
}