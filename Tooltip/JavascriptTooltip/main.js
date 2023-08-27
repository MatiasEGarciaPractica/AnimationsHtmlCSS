/**
 * Vamos a averiguar el posicionamiento del icono ,para agregarle el tooltip, 
 * basicamente obtendremos las coordenadas del icono en el window.
 */
const icono = document.querySelector("#icono");
const tooltip = document.querySelector("#tooltip");

const calcularPosicionTooltip = () => {
    //coordenadas del icono
    const x = icono.offsetLeft;
    const y = icono.offsetTop;

    //Calculamos el tamaño del tooltip.
    const anchoTooltip = tooltip.clientWidth;
    const altoTooltip = tooltip.clientHeight;

    //Calculamos donde posicionar el tooltip
    const izquierda = x - (anchoTooltip / 2) + 15;
    const arriba = y - altoTooltip - 20;


    tooltip.style.left = `${izquierda}px`;
    tooltip.style.top = `${arriba}px`;
}

//cuando la ventana de la pagina carge ejecutamos esto 
window.addEventListener('load',() => calcularPosicionTooltip());
//cuando la ventana cambie de tamaño ejectuamos esto(hacemos el tooltip responsive)
window.addEventListener('resize',() => calcularPosicionTooltip());

//para mostrar el tooltip cuando el usuario pase el mouse por encima del icono
icono.addEventListener('mouseenter', () => {
    tooltip.classList.add('activo');
    calcularPosicionTooltip();
});


//para quitar el tooltip cuando el usuario sace el mouse por encima tooltip
tooltip.addEventListener('mouseleave',() => tooltip.classList.remove('activo'));


//ahora tengo un problema, si el mouse del usuario todavia esta encima del mapa, no desaparece el tooltip asi que agrego 
//lo siguiente para que desaparesca.
let timer;
icono.addEventListener('mouseleave',()=>{
    //despues de un segundo ejecuta esto, pero si el mouse volvio a entrar al tooltip,entonces no se va a cerrar
    //es para darle tiempo al usuario a llegar del icono al tooltip.
    timer = setTimeout(() =>{
        tooltip.classList.remove('activo');
    },500);   //500 milisegundos
});
tooltip.addEventListener('mouseenter', () => clearTimeout(timer));//con esto frenamos o quitamos el timer 