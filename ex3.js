/* Para aprovação de um empréstimo, um banco usa as funções descritas abaixo:
- Aprovação do cadastro pessoal 
- Aprovação do valor solicitado
Ambas retornam uma promise para fazer o  processamento em segundo plano (no código, este processamento está simulado).

Para o cliente instanciado no código abaixo, foram executadas ambas as funções e criadas variáveis para armazenar este retorno.
Usando o método '**Promise.all()**', recupere o resultado de ambas as promises e imprima 'APROVADO' ou 'REPROVADO', conforme os resultados das promises forem resolvidos ou rejeitados.
Por fim, imprima a frase 'Fim do Processamento', qualquer que seja o resultado (resolve ou reject) das promises ('finally'). */
function ApproveData(client) {
  return new Promise((solve, reject) => {
    if (client.cpf === 11111111111) solve(true);
    else reject(false);
  });
}
function ApproveRequestedAmount(client, value) {
  return new Promise((resolve, reject) => {
    if (client.margem >= value) resolve(true);
    else reject(false);
  });
}
const client = { cpf: 11111111111, name: 'Emanuela', loan: 45000.0 };
const RegistrationApproval = ApproveData(client);
const aprovacaovalue = ApproveRequestedAmount(client, 300.0);

Promise.all([RegistrationApproval, aprovacaovalue])
  .then(() => {console.log('Approved!');})
  .catch(() => {console.log('Disapproved!');})
  .finally(() => {console.log('end of processing');});