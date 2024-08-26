

export function calcular_maximo(valor){
    let dato = Math.max(...valor);
    return dato;
}


export function calcular_minimo(valor){
    let dato = Math.min(...valor);
    return dato;
}


// Función para calcular la media de los valores ingresados
export function calcular_media(valores){
    let count = 0;
    // sumamos todos los valores
    for (let i=0; i< valores.length; i++){
        count += valores[i];
    }
    // Dividimos la suma
    let media = count / valores.length;
    media = media.toFixed(1)
    return media;
};


// Función para calcular la desviación de datos esta solicita los valores mas la media
// Se hace una resta de los valores menos la media para tener la diferencia 
// Y multiplicamos esas diferencias entre ellas para tener la variación
export function calcular_desviacion(valores, media){
    let variacion = 0;
    for (let i = 0; i < valores.length; i++){
        let diferencia = valores[i] - media;
        variacion += diferencia * diferencia;
    }

    let desviacion = variacion / valores.length;
    // calculamos la raíz 
    let total = Math.sqrt(desviacion)
    total = total.toFixed(2);
    return total;
};