console.log("Hello!");
// document.querySelector('.btn').onclick = () => {
//     console.log(document.getElementById("firstname").value);
// }

let re = new RegExp("^[A-zА-яЁё]{3,16}$"); 

let pass  = document.getElementById("pass");
let erorr = document.querySelector('.erorr');
document.getElementById("pass").oninput = function(e) {
    e.preventDefault();
    // if(!re.match(firstname.value))
    if(!pass.value.match(re)){
        console.log('NO');
        erorr.style.display= "block";
        
    console.log(pass.value, reg);
    }else{
        console.log('Yes');
        erorr.style.display= "none";
        
    console.log(pass.value, reg);
    }
    console.log(document.getElementById("pass").value);
    
}