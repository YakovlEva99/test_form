
// console.log("heloo");//let firstname = document.getElementById('firstname');
// let firstname  = document.getElementById("firstname");
// let re = /^([a-zа-яё]+|\d+)$/i;
// const input = document.querySelector('input');
// //let first = form.querySelector('.first');
// let first = document.querySelectorAll('.first');
//     let erorr = document.querySelectorAll('.erorr');


// firstname.addEventListener('input',function(){
//     if(isEmailValid(input.value)){
//         erorr.style.display= "block";
//     }
//     console.log('hello');
//     console.log(first.value);
// })
// function isEmailValid(value) {
//     return re.test(value);}


console.log("Hello!");
document.querySelector('.btn').onclick = () => {
    console.log(document.getElementById("firstname").value);
}

let re = new RegExp("^[A-zА-яЁё]{3,16}$"); 
let surname = document.getElementById("surname");
let firstname  = document.getElementById("firstname");
let erorr = document.querySelector('.erorr');
document.getElementById("firstname", "surname").oninput = function(e) {
    e.preventDefault();
    // if(!re.match(firstname.value))
    if(!firstname.value.match(re),
    !surname.value.match(re)){
        console.log('NO');
        erorr.style.display= "block";
        
    console.log(firstname.value, reg);
    }else{
        console.log('Yes');
        erorr.style.display= "none";
        
    console.log(firstname.value, reg);
    }
    console.log(document.getElementById("firstname").value);
    
}

