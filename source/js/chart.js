import { LoginByToken,LoginChecked} from "./moudle.js";

LoginChecked()
let film_name_information = document.querySelectorAll(".film_name_information")

for(let i = 0; i < film_name_information.length ;i++){
    if(film_name_information[i].textContent.length > 98){
        film_name_information[i].textContent = film_name_information[i].textContent.substr(0,98) + "..."
    }
}