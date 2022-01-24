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
function Click(obj,class_name,later){
    for(let i = 0; i< obj.length;i++){
        obj[0].classList.add(class_name);
        obj[i].addEventListener("click",() => {
            for(let j =0 ; j< obj.length;j++){
                obj[j].classList.remove(class_name);
            }
            obj[i].classList.add(class_name);
            later(i);
        })
    }
}
function FormToString(form){
    let result = ""
    form = new FormData(form);
    for(let pair of form.entries()){
        result = result + pair[0] + "=" + pair[1] + "&"
    }
    result = result.substr(0,result.length-1);
    console.log(result);
    return result;
}

export {PostData,Click,FormToString};