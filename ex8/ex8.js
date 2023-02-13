/* Existe a API **'Random User Generator'**, que gera usuários fakes para fins de testes e protótipos.
Vamos usá-la para praticar e consumir APIs.

A URL da API é esta abaixo, onde o argumento 'results' representa a quantidade de resultados que queremos retornar:
https://randomuser.me/api/?results=4

Verifique a documentação e exemplo de retorno em: 
https://randomuser.me/documentation#howto, ou 
faça uma chamada para a API (no navegador ou console) para verificar um exemplo de resultado.

Com base no json de retorno, monte uma página web, contendo os dados de usuários de 
sistema com foto, título, nome, sobrenome, e-mail e endereço completo.
O layout (css) é livre, desde que apresente as informações solicitadas. */
const obterUsuarios = async (qtd = 4) => {
  const url = `https://randomuser.me/api/?results=${qtd}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener('load', async () => {
  // Obtem lista da api
  const data = await obterUsuarios(10);

  // Obtem ul do html para renderizar os itens
  const lista = document.getElementById('lista');

  // Percorre os dados retornados da api
  data.results.forEach((usuario) => {
    // Cria os elementos para exibir no html
    const item = document.createElement('li');
    const nome = document.createElement('h5');
    const email = document.createElement('p');
    const endereco = document.createElement('p');
    const imagem = document.createElement('img');

    // Desestrutura o objeto criando variáveis
    const { street, city, state, country } = usuario.location;
    const { title, first, last } = usuario.name;

    // Adiciona informações nos itens criados
    nome.innerText = `${title} ${first} ${last}`;
    email.innerText = usuario.email;
    endereco.innerText = `${street.name} ${street.number} ${city} ${state} ${country}`;
    imagem.src = usuario.picture.large;
    imagem.alt = 'Imagem do usuário';

    // Adiciona os itens dentro do li
    item.appendChild(nome);
    item.appendChild(email);
    item.appendChild(endereco);
    item.appendChild(imagem);

    // Adiciona li dentro da ul
    lista.appendChild(item);
  });
});
