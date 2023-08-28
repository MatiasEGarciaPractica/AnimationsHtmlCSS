const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const toggle = body.querySelector('.toggle');
const searchBtn = body.querySelector('.searchBox');
const modeSwitch = body.querySelector('.toggleSwitch');
const modeText = body.querySelector('.modeText');

//para abrir o cerrar el navbar
toggle.addEventListener('click',() =>{
    sidebar.classList.toggle('close');
});

//para abrir el navbar cuando el usuario quiera buscar con el input search
searchBtn.addEventListener('click',() =>{
    sidebar.classList.remove('close');
});

//para cambiar el color del navbar
modeSwitch.addEventListener('click',() =>{
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        modeText.innerText='Light Mode';
    }else{
        modeText.innerText='Dark Mode';
    }
});