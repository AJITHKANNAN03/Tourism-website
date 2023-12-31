function id(id){
    return document.getElementById(id);
}
function classes(classes){
   return document.getElementsByClassName(classes);
}
 
let fname=id("fname"),
number=id("number"),
email=id("email"),
place=id("place")
date=id("date")
form=id("form"),

errorMsg=classes("error"),
successIcon=classes("success-icon"),
failureIcon=classes("failure-icon");

form.addEventListener("submit",(e) => {
    e.preventDefault();

    engine(fname, 0, "Name cannot be blank");
    engine(number, 1, "Name cannot be blank");
    engine(email, 2, "Email cannot be blank");
    engine(place, 3, "Destination cannot be blank");
    engine(date, 4, "Date cannot be blank");
  });

  function engine(id, serial, message){

    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
      document.querySelector(".close").style.display="block";
    } 
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";

      document.querySelector(".show").style.display="block";
      document.querySelector(".success").innerHTML=fname.value+" happy travel";
    }
  }
  


  