function showcontent(section) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.container').forEach(content => content.classList.remove('active'));
    document.querySelector(`[onclick="showcontent('${section}')"]`).classList.add('active');
    document.getElementById(section).classList.add('active');
}

document.querySelectorAll('.contact').forEach(contactLink => {
    contactLink.addEventListener('click', function(event) {
        document.getElementById('popupform').style.display = "flex";
        
    });
});
document.querySelectorAll('.closebtn').forEach(contactLink => {
    contactLink.addEventListener('click', function(event) {
        document.getElementById('popupform').style.display = "none";
    });
});

const menubutton=document.getElementById('menu-button');
const menu=document.getElementById('menu');

menubutton.addEventListener('click',()=>{
    if(menu.style.display==='none'|| menu.style.display===''){
        menu.style.display='flex';
    }else{
        menu.style.display='none';
    }
});
