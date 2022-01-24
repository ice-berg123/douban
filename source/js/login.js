import { PostData, Click,FormToString } from "./moudle.js";
document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 100 + "px";

function failOrSuccess(bool) {
    let leve = 1;
    if (bool === 0) {
        document.querySelector("#failedOrSuccess").style.backgroundColor = `rgba(255, 0, 0,1)`;
        let t1 = setInterval(() => {
            document.querySelector("#failedOrSuccess").style.backgroundColor = `rgba(255, 0, 0,${leve})`
            leve -= 0.05;
            if (leve < -0.05) {
                clearInterval(t1);
            }
        }, 100)
    } else {
        document.querySelector("#failedOrSuccess").style.backgroundColor = `rgba(65,172,82)`
        let t1 = setInterval(() => {
            document.querySelector("#failedOrSuccess").style.backgroundColor = `rgba(65,172,82,${leve})`
            leve -= 0.05;
            if (leve < -0.05) {
                clearInterval(t1);
            }
        }, 100)
    }
    
}

let login = document.querySelector("#login");
let form1 = document.querySelector("#form_login");
login.addEventListener("click", async () => {
    let data = FormToString(form1);
    let res = await PostData('/login',data);
    console.log(res);
    if (res.status == false) {
        document.querySelector("#failedOrSuccess").textContent = res.info;
        failOrSuccess(0);
    }
    if (res.status) {
        document.querySelector("#failedOrSuccess").textContent = res.info;
        failOrSuccess(1);
    }
});
let reg = document.querySelector('#reg');
let form2 = document.querySelector("#form_reg");

let pn = reg.addEventListener("click", async () => {
    let data = FormToString(form2);
    let res = await PostData('/newuser', data);
    console.log(res);
    if (res.status == false) {
        document.querySelector("#failedOrSuccess").textContent = res.info;
        failOrSuccess(0);
    }
    if (res.status) {
        document.querySelector("#failedOrSuccess").textContent = res.info;
        failOrSuccess(1);
    }
})

let check = document.querySelectorAll(".log_title");
function later(index) {
    let regOrLog = document.querySelectorAll(".regOrLog");
    for (let m = 0; m < regOrLog.length; m++) {
        regOrLog[m].style.display = "none";
    }
    regOrLog[index].style.display = "block";
    if (index == 0) {
        document.querySelector("#reg_step1").style.display = "block";
        document.querySelector("#reg_step2").style.display = "none";
    }
}
Click(check, "log_title_click", later);
let next = document.querySelector("#next");
next.addEventListener("click", () => {
    document.querySelector("#reg_step1").style.display = "none";
    document.querySelector("#reg_step2").style.display = "block";
})

