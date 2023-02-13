/* Altere as duas funções abaixo usando **async-await** para retorno e tratamento de promises:
```javascript
function obterClienteNoBancoDeDados(idCliente) {
    return new Promise( (resolve, reject) => {const cliente = { nome: 'bruce wayne', id: idCliente };
    resolve(cliente);
    });
}
function processar() {obterClienteNoBancoDeDados(7)
  .then(cliente => console.log(cliente));}
  processar(); ``` */
async function obterClienteNoBancoDeDados(idCliente) {
  return new Promise((resolve, reject) => {
    const cliente = { nome: 'bruce wayne', id: idCliente };
    resolve(cliente);
  });
}

async function processar() {
  try {
    const cliente = await obterClienteNoBancoDeDados(7);
    console.log(cliente);
  } catch (error) {
    console.error(error);
  }
}
processar();
