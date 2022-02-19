async function PostData(api, data) {
    let url = "http://39.106.81.229:9920" + api;
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    });
    return response.json();
}
async function GetData(api,data){
    let url = "http://39.106.81.229:9920" + api;
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    });
    return response.json();
}

async function GetDataByToken(api) {
    let token = "Bearer " + localStorage.getItem("token")
    let url = "http://39.106.81.229:9920" + api
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": token,
        }
    })
    return response.json();
}
async function SendDataByToken(api,data){
    let token = "Bearer " + localStorage.getItem("token")
    let url = "http://39.106.81.229:9920" + api
    const response = await fetch(url, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Authorization": token,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    })
    return response.json();
}
function Click(obj, class_name, later) {
    for (let i = 0; i < obj.length; i++) {
        obj[0].classList.add(class_name);
        obj[i].addEventListener("click", () => {
            for (let j = 0; j < obj.length; j++) {
                obj[j].classList.remove(class_name);
            }
            obj[i].classList.add(class_name);
            later(i);
        })
    }
}
function FormToString(form) {
    let result = ""
    form = new FormData(form);
    for (let pair of form.entries()) {
        result = result + pair[0] + "=" + pair[1] + "&"
    }
    result = result.substr(0, result.length - 1);
    return result;
}

function MakeUrl(path) {
    let oldUrl = window.location.href
    let indexof = oldUrl.lastIndexOf("/")
    let newurl = oldUrl.substr(0, indexof) + path
    return newurl
}


async function LoginByToken() {
    let response = await GetDataByToken("/user/getuserinfo")
    if (response.info == "无效的Token") {
        return false
    } else {
        return response.data
    }
}

async function LoginChecked() {
    let downl = document.querySelector("#download");
    function show(x) {
        downl.style.display = "block";
    }
    function show_out(x) {
        downl.style.display = "none";
    }
    let username_a = document.querySelector("#username_a")
    let loginafterhover = document.querySelector("#loginafterhover")
    loginafterhover.children[0].addEventListener("click",() => {
        window.location.href = MakeUrl("/people.html")
    })
    loginafterhover.children[1].addEventListener("click",() => {
        localStorage.removeItem("token")
        location.reload()
    })
    username_a.addEventListener("click", (event) => {
        loginafterhover.style.display = "block"
        event.stopPropagation()
    })
    document.addEventListener("click", () => {
        loginafterhover.style.display = "none"
    })
    let nav_right = document.querySelector("#nav_right")
    nav_right.children[1].addEventListener("click",() =>{
        window.location.href = MakeUrl("/login.html")
    })
    let userdata =await LoginByToken()
    if (userdata) {
        for (let i = 0; i < nav_right.children.length; i++) {
            nav_right.children[i].style.display = "none"
        }
        username_a.textContent = userdata.username + "的账号"
        nav_right.lastElementChild.style.display = "block"
    }
    let nav_3 = document.querySelector("#nav_3")
    nav_3.children[3].href = MakeUrl("/chart.html")
    nav_3.children[4].href = MakeUrl("/tag.html")
    let search = document.querySelector("#search")
    search.children[0].href = MakeUrl("/index.html")
}

export { PostData, Click, FormToString, MakeUrl, LoginByToken,LoginChecked,GetDataByToken,GetData,SendDataByToken };