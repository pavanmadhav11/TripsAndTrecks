const signUpBtn = document.getElementById('sign-up');
const signInBtn = document.getElementById('sign-in');
const container0 = document.getElementById('container0');

signUpBtn.addEventListener('click', () => container0.classList.add("right-side-active"));
signInBtn.addEventListener('click', () => container0.classList.remove("right-side-active"));

const toggleButton = document.getElementById("s-in1");
const s = document.getElementById("s-in");

toggleButton.addEventListener("click", () => s.classList.toggle("active"));

const menubutton=document.getElementById('menu-button');
const menu=document.getElementById('menu');

menubutton.addEventListener('click',()=>{
    if(menu.style.display==='none'|| menu.style.display===''){
        menu.style.display='flex';
    }else{
        menu.style.display='none';
    }
});