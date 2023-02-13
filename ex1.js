/* Crie uma função chamada **sleep**, que recebe como argumento um  valor qualquer.
Quando chamada, essa função precisa retornar, após 3 segundos (setTimeout), uma Promise resolvida com o valor que foi passado como argumento.
Ex.:
````
function sleep ( valor ) {
  return new Promise ( (res, reject) => { 
     setTimeout( ... )
  })
}
````
Chame esta função e confirme o funcionamento dela (lembre-se que o valor do tempo de espera é aproximado!) */
function sleep(value) {
  return new Promise((result, reject) => {setTimeout(() => {result(value);}, 3000); });
}
sleep('Value').then((result) => {
  console.log(result);
});