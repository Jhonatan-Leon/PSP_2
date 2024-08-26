import { calcular_desviacion, calcular_media } from "./modules/aritmetricas.js";
import {calcular_maximo, calcular_minimo} from "./modules/aritmetricas.js"


function main(){
    let btn_fomrularios = document.getElementById('formularios');
    btn_fomrularios.addEventListener('click', obtener_Formularios);
};

function obtener_Formularios(){
    let numero_formularios = document.getElementById('total_individuos').value;
    crearFormulario(numero_formularios);
}

function crearFormulario (valor){
    let formulario = document.getElementById('formularios_individuos');
    formulario.innerHTML = '';

    for (let i = 0; i < valor; i++){
        mostrar_formulario_individuos(formulario, i)
    }
    btn_calcular(formulario);
}

function mostrar_formulario_individuos(valores, i){
    let CrearFormulario = document.createElement('article');
    CrearFormulario.classList.add('sub_content');
    CrearFormulario.innerHTML = `
        <h2> Individuo : ${i + 1}</h2>
        <h3> Nombre: </h3> 
        <input type="text" id="nombres${i}" />
        <h3> Ingrese Valores </h3>
        <input type="text" id="valores${i}"/>
    `;
    valores.appendChild(CrearFormulario);

};


function btn_calcular(valor){
    let boton = document.createElement('button');
    boton.textContent = 'calcular';
    boton.addEventListener('click', () => {
        let valores = document.getElementById('total_individuos').value;
        todos_calculos(valores);
    })
    valor.appendChild(boton);
}


function todos_calculos(numero_indiviuos){
    let resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    for (let i = 0; i < numero_indiviuos; i++){
        let nombres = document.getElementById(`nombres${i}`).value;
        let valores = numeros_array(document.getElementById(`valores${i}`).value)

        let maximo = calcular_maximo(valores);
        let minimo = calcular_minimo(valores);
        let media = calcular_media(valores);
        let desviacion = calcular_desviacion(valores, media);

        mostrar_resultados(resultados, nombres, maximo, minimo, media, desviacion);
    }
}

function numeros_array(datos){
    let array = datos.split(',').map(Number);
    return array;
}

function mostrar_resultados(resultados, nombres, maximo, minimo, media, desviacion){
    let todos_resultados = document.createElement('section');
    todos_resultados.classList.add('todos_resultados');
    todos_resultados.innerHTML = `
    <h3>${nombres}</h3>
    <p>Valor maximo: ${maximo} </p>
    <p> valor minimo: ${minimo} </p>
    <p>Media: ${media} </p>
    <p> Desviación estándar: ${desviacion} </p>
    `;

    if (resultados) {
        resultados.appendChild(todos_resultados);
    } else {
        console.error("'resultados' no es un elemento DOM válido.");
    }
}

main()