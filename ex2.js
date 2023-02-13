/* Utilizando o **setInterval**, crie uma função que mostre o horário atual 
e atualize automaticamente a cada 1 segundos.
O horário deve ser mostrado no formato **HH:MM:SS**. */
const timer = () => {
  const interval = setInterval(() => {
  const dataAtual = new Date();
  const dataFormatada = dataAtual.toLocaleTimeString('pt-BR');
  console.log(dataFormatada); }, 1000);
  setTimeout(() => {clearInterval(interval);}, 10000);
};
timer();