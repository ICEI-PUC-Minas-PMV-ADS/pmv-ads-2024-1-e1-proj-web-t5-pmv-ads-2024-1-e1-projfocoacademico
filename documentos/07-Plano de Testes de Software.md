# Plano de Testes de Software

Pré requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>**Funcional**: Verificar se cada funcionalidade opera conforme o esperado;</li>
<li>**Usabilidade:** Avaliar a facilidade de uso e intuitividade da interface;</li>
<li>**Compatibilidade:** Testar em diferentes navegadores e dispositivos.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001: O site deve permitir ao usuário cadastrar uma conta.</li>
    <li>RF-002: O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Jair Damián</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do cadastro de usuário</td>
  <td>
   <ul>
    <li>RF-001: A aplicação deve permitir ao usuário cadastrar uma conta.</li>
   </ul>
  </td>
  <td>Verificar se o usuário consegue se cadastrar na plataforma com sucesso.</td>
  <td>
   <ol>
    <li>Acessar a página de cadastro.</li>
    <li>Preencher os campos do formulário com dados válidos.</li>
    <li>Clicar no botão "Cadastrar".</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a página de login com uma mensagem de sucesso.</td>
 <td>Jair Damián, Felipe Alves</td>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03:Verificar o funcionamento do login de usuário</td>
  <td>
   <ul>
    <li>RF-002: A aplicação deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o usuário consegue fazer login na plataforma com sucesso.</td>
  <td>
   <ol>
    <li>Acessar a página de login.</li>
    <li>Preencher os campos de e-mail e senha com dados válidos.</li>
    <li>Clicar no botão "Entrar".</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a página inicial (Home) ou para a página que estava acessando antes de fazer o login.</td>
  <td>Jair Damián, Felipe Alves</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04:  Criar uma nova anotação</td>
  <td>
   <ul>
    <li>RF-003: A aplicação deve permitir ao usuário criar novas anotações.</li>
   </ul>
  </td>
  <td>Verificar se o usuário consegue criar uma nova anotação com sucesso.</td>
  <td>
   <ol>
    <li>Acessar no menu Ferramentas a página Anotações.</li>
    <li>Clicar no botão "Nova Anotação"</li>
    <li>Preencher os campos de título e conteúdo.</li>
    <li>Clicar no botão "Salvar"</li>
   </ol>
   </td>
  <td>A anotação deve ser salva com sucesso e exibida na lista de anotações.</td>
  <td>Beatrice Arecippo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Editar uma anotação existente.</td>
  <td>
   <ul>
   <li>RF-004: A aplicação deve permitir ao usuário editar anotações existentes.</li>
   </ul>
  </td>
  <td>Verificar se o usuário consegue editar uma anotação existente com sucesso.</td>
  <td>
   <ol>
    <li>Acessar no menu Ferramentas a página Anotações.</li>
    <li>Selecionar uma anotação existente.</li>
    <li>Clicar no botão "Editar".</li>
    <li>Fazer as alterações desejadas no título e/ou conteúdo.</li>
    <li>Clicar no botão "Salvar".</li>
   </ol>
   </td>
  <td>A anotação deve ser atualizada com sucesso e as alterações devem ser exibidas corretamente.</td>
  <td>Maurício Ferreira</td>
 </tr>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Excluir uma anotação</td>
  <td>
   <ul>
   <li>RF-005: A aplicação deve permitir ao usuário excluir anotações existentes.</li>
   </ul>
  </td>
  <td>Verificar se o usuário consegue excluir uma anotação existente com sucesso.</td>
  <td>
   <ol>
    <li>Acessar no menu Ferramentas a página Anotações.</li>
    <li>Selecionar uma anotação existente.</li>
    <li>Clicar no botão "Excluir".</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Confirmar a exclusão.</li>
   </ol>
   </td>
  <td>A anotação deve ser excluída com sucesso da lista de anotações.</td>
  <td>Maurício Ferreira</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-07: Iniciar, pausar e parar um ciclo Pomodoro</td>
  <td>
   <ul>
   <li>RF-006: A aplicação deve permitir ao usuário utilizar a técnica Pomodoro.</li>
   </ul>
  </td>
  <td>Verificar se o timer Pomodoro funciona corretamente.</td>
  <td>
   <ol>
    <li>Acessar no menu Ferramentas a página Relógio Pomodoro.</li>
    <li>Clicar no botão "Iniciar".</li>
    <li>Clicar no botão "Pausar".</li>
    <li>Clicar no botão "Retomar".</li>
    <li>Clicar no botão "Parar".</li>
   </ol>
   </td>
  <td>O timer deve iniciar, pausar, retomar e parar corretamente, de acordo com as ações do usuário.</td>
  <td>Rodrigo Pova</td>
 </tr>
</table>
 
 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-08: Visualizar a página Sobre</td>
  <td>
   <ul>
   <li>RF-008: A aplicação deve apresentar informação sobre o objetivo principal da plataforma.</li>
   </ul>
  </td>
  <td>Verificar se a página Sobre exibe as informações corretas.</td>
  <td>
   <ol>
    <li>Acessar a página Sobre.</li>
    <li>Ler as informações apresentadas.</li>
   </ul>
   </ol>
   </td>
  <td>A página Sobre deve conter informações relevantes sobre o projeto e seus desenvolvedores.</td>
  <td>Beatrice Arecippo</td>
 </tr>
</table>