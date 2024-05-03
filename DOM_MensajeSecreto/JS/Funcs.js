let frase = prompt('ingrese el mensaje', '');
let fraseCambiada = frase.replace(/\((.*?)\)/g, (index, value) =>{
    return value.split('').reverse().join('');
});
alert(fraseCambiada);