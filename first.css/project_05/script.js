// const first=document.querySelector("#first");
// const second=document.querySelector("#second");
// const btn=document.querySelector("#btn");



// btn.addEventListener('click', function(){
//     if(first.textContent==="first"){
//         first.textContent="second";
//     }
//     else{
//         second.textContent="first";
//     }

// });

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const btn = document.querySelector("#btn");
const btun=document.querySelector('#btun');
const pswd=document.querySelector('#password').value;

btn.addEventListener('click', function(e) {
    if (first.style.display !== "none") {
        // agar first visible hai to usko hide karo aur second show karo
        first.style.display = "none";
        second.style.display = "block";
    } else {
        // agar first hidden hai to usko show karo aur second hide karo
        first.style.display = "block";
        second.style.display = "none";
    }

})
// btun.addEventListener('click',function(e){
//     if(pswd!='#'||'@'||'$'||'*' && 1||2||3||4||5||6||7||8||9 && 'A'||'a'){
//         alert("please enter lid password contain #,A,a,12");
//     }
//     else{
//         alert("Your password Submited");
//     }
// })
btun.addEventListener('click', function(e) {
    

    
    const regex = /^(?=.*[#])(?=.*[A])(?=.*[a])(?=.*\d).+$/;

    if (regex.test(pswd)) {
        alert("Your password Submitted");
    } else {
        alert("Please enter valid password containing #, A, a, and a number");
    }
});