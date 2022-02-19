import { LoginByToken,LoginChecked} from "./moudle.js";

LoginChecked()
let clissify_choices = document.querySelectorAll(".clissify_choices")
for(let i = 0; i <clissify_choices.length;i++){
    clissify_choices[i].firstElementChild.classList.add("choice_hover")
}
let nocl = document.querySelectorAll(".nocl")
function hover_choice_listen(){
    for(let i = 0; i < clissify_choices.length;i++){
        for(let j = 0; j < clissify_choices[i].children.length;j++){
            if(i == 4&& j >= clissify_choices[4].children.length-2){
                break
            }
            clissify_choices[i].children[j].addEventListener("click",() => {
                for(let k = 0; k < clissify_choices[i].children.length; k++){
                    clissify_choices[i].children[k].classList.remove("choice_hover")
                    clissify_choices[i].children[k].classList.add("cchoice_hover")
                }
                clissify_choices[i].children[j].classList.remove("cchoice_hover")
                clissify_choices[i].children[j].classList.add("choice_hover")
                for(let m = 0; m < nocl.length ; m++){
                    nocl[m].classList.remove("cchoice_hover")
                    nocl[m].classList.remove("choice_hover")
                }
            })
        }
    }
}
hover_choice_listen()
let sub_selfchoice = document.querySelector(".sub_selfchoice")
nocl[0].addEventListener("click",() => {
    nocl[0].style.display = "none"
    sub_selfchoice.style.display = "inline-block"
})
let sub_self = document.querySelector("#sub_self")
let self_text = document.querySelector("#self_text")
sub_self.addEventListener("click",() => {
    if(self_text.value){
        let temp = document.createElement("div")
        temp.classList.add("clissify_cchoice")
        temp.classList.add("cchoice_hover")
        temp.textContent = self_text.value
        temp.addEventListener("click",() => {
            hover_choice_listen()
        })
        clissify_choices[4].insertBefore(temp,nocl[0])
        self_text.value = ""
        nocl[0].style.display = "inline-block"
        sub_selfchoice.style.display = "none"
        hover_choice_listen()
    }
})
let top_choice = document.querySelectorAll(".top_choice")
for(let i = 0; i < top_choice.length; i++){
    top_choice[i].addEventListener("click",() => {
        for(let j = 0; j < top_choice.length ; j++){
            top_choice[j].classList.remove("top_choice_click")
        }
        top_choice[i].classList.add("top_choice_click")
    })
}
let mk_choice = document.querySelectorAll(".mk_choice")
for(let i = 0; i < mk_choice.length;i++){
    let flag = 0;
    mk_choice[i].addEventListener("click",() => {
        if(flag == 0){
            mk_choice[i].children[0].style.display = "none"
            mk_choice[i].children[1].style.display = "block"
            flag = 1;
        }else{
            mk_choice[i].children[0].style.display = "block"
            mk_choice[i].children[1].style.display = "none"
            flag = 0;
        }
    })
}
let img_coice = document.querySelectorAll(".img_coice-1")
img_coice[0].children[0].style.display = "block"
img_coice[0].children[1].style.display = "none"
img_coice[1].children[0].style.display = "none"
img_coice[1].children[1].style.display = "block"
let film_big_box = document.querySelectorAll(".film_big_box")
for(let i = 0; i < img_coice.length; i++){
    img_coice[i].addEventListener("click",() => {
        for(let k = 0; k < 2; k++){
            if(i == 0){
                img_coice[0].children[0].style.display = "block"
                img_coice[0].children[1].style.display = "none"
                img_coice[1].children[0].style.display = "none"
                img_coice[1].children[1].style.display = "block"
                film_big_box[0].classList.remove("film_hidden")
                film_big_box[1].classList.add("film_hidden")
            }else{
                img_coice[0].children[0].style.display = "none"
                img_coice[0].children[1].style.display = "block"
                img_coice[1].children[0].style.display = "block"
                img_coice[1].children[1].style.display = "none"
                film_big_box[0].classList.add("film_hidden")
                film_big_box[1].classList.remove("film_hidden")
            }
        }
    })
}