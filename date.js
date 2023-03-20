let today = new Date();
let year = today.getFullYear();
console.log("Hello!");
let date = document.getElementById("date");
let errorDate= document.querySelector('.errorDate');
date.onchange = function(e) {
    e.preventDefault();
    console.log("z nen");
    
    console.log(year);
    let value = date.value;
    console.log(value);
    const year2 = new Date(value).getFullYear();
    console.log(year2);
    let finishTime = year-year2;

    console.log(finishTime);
   

    if(finishTime>=18){
          console.log('Yes');
          errorDate.style.display= "none";
         isValid = true;
    }else{
        errorDate.style.display= "block";
        isValid = false;
        console.log("No");
       
    }
    setDate(isValid);
    
}


