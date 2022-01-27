document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px';
let downl = document.querySelector("#download");
function show(x) {
    downl.style.display = "block";
}
function show_out(x) {
    downl.style.display = "none";
}

function order(obj){
    let temp = obj[obj.length-1]
    for(let i = obj.length - 2; i >= 0;i--){
        obj[i+1] = obj[i];
    }
    obj[0] = temp;
}
let arrow2_left = document.querySelector('#arrowhead_2_01');
let arrow2_right = document.querySelector('#arrowhead_2_02');
let rec_box = document.querySelectorAll('.rec_box');
let n = 0;
let last_time_01 = Date.now() - 600;
arrow2_left.addEventListener('click',() => {
    if(Date.now()-last_time_01 >= 600){
        images_move("left");
        last_time_01 = Date.now();
    }
    
})
arrow2_right.addEventListener('click',() => {
    if(Date.now()-last_time_01 >= 600){
        images_move("right");
        last_time_01 = Date.now();
    }
})

function images_move(position){
    if(n === rec_box.length){
        n = 0;
    }
    if(position === "left"){
        for(let i = 0; i < rec_box.length; i++){
            rec_box[i].style.left =  getNum(parseInt(rec_box[i].style.left))+45+"rem";
        }
        rec_box[rec_box.length-1-n].classList.remove("rec_box_remove");
        rec_box[rec_box.length-1-n].style.left = getNum(parseInt(rec_box[rec_box.length-1-n].style.left)) -45*(rec_box.length)+"rem";
        rec_box[rec_box.length-1-n].classList.add("rec_box_remove");
        
    }
    if(position === "right"){
        for(let i = 0; i < rec_box.length; i++){
            rec_box[i].style.left =  getNum(parseInt(rec_box[i].style.left))-45+"rem";
        }
        rec_box[n].style.left = getNum(parseInt(rec_box[n].style.left)) +45*(rec_box.length)+"rem";
        
    }
    n++;
}
function getNum(val){
    if (isNaN(val)){
        return 0;
    }else{
        return val;
    }
}