function validaArray(arr, num) {
    if(!arr && !num) throw new ReferenceError("Envie os parâmetos");

    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

    if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number");

    if(arr.lenght !== num) throw new RangeError("Tamanho inválido!");
}