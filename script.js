let userName = document.getElementById('userName');
let userPass = document.getElementById('userPass');
let btn = document.getElementById('loginBtn');
let modalValue = document.getElementById('errorMsg');

function validation () {
    let userNameValue = userName.value;
    let userPassValue = userPass.value;

    if(userNameValue.length < 3 || userPassValue.length < 8){
        modalValue.style.display = 'block';
        modalValue.innerText = 'Login Failed!'
        setTimeout(() => {
            modalValue.style.display = "none";
        }, 3000);
    } else{
        modalValue.style.display = 'block';
        modalValue.style.background = 'green';
        modalValue.style.border = '1px solid #4ac836';
        modalValue.style.color = '#58d838';
        modalValue.innerText = 'Login Successful';

        setTimeout(() => {
            modalValue.style.display = "none";
        }, 3000);
    }
}