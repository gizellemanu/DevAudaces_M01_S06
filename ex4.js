/* O sistema de uma empresa, após efetuar a venda, chama funções remotas 
de duas empresas de entrega dos pedidos, e aquela que responder mais rápido 
nossa requisição fica responsável pela entrega.

O retorno das chamadas foram adicionados nas constantes abaixo: 
'_CompanyReturn1_' e '_retornoEmpresa2_'.

Usando '**Promise.race()**', recupere o valor da promise da empresa 
vencedora e imprima o resultado.

```javascript
const fakeTime = () => parseInt(Math.random() * 10000);
const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));
const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2')); */
const fakeTime = () => parseInt(Math.random() * 10000);

const CompanyReturn1 = new Promise((resolv) => { setTimeout(resolv, fakeTime(), 'company 1');});
const CompanyReturn2 = new Promise((resolv) => { setTimeout(resolv, fakeTime(), 'company 2');});

Promise.race([CompanyReturn1, CompanyReturn2])
  .then((result) => {console.log(result);})
  .catch((err) => {console.log(err);});