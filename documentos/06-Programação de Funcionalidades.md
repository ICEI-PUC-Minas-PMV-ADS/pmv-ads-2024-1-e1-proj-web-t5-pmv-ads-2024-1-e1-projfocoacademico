# Programação de Funcionalidades

Os pré-requisitos para esta fase são:

- [Especificação do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md).
- [Metodologia](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/documentos/03-Metodologia.md).
- [Projeto de Interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/documentos/04-Projeto%20de%20Interface.md)
- [Template Padrão da Aplicação](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/documentos/05-Template%20padr%C3%A3o%20da%20Aplica%C3%A7%C3%A3o.md).

## Cadastro e Login na Plataforma (RF-01 e RF-02)

### Funcionalidade de Cadastro (RF-01)

Responsável: Jair Damián e Guilherme

Para realizar o cadastro na plataforma é necessário estar na página inicial da aplicação. Clicando no botão de _Cadastro_ é possível abrir o _modal_ para realizar o cadastro no site. Para esta funcionalidade foram utilizadas as linguagens HTML, CSS e JavaScript.

![Tela de Início](../documentos/img/Projeto%20de%20interface/TelaCadastro.png)

#### Requisito atendido

RF-01: O site deve permitir ao usuário realizar o cadastro dentro da plataforma.

#### Artefatos da funcionalidade

Os artefatos da funcionalidade se encontra em "pages/home" e são os seguintes:

- index.html
- home.css
- home.js (dentro deste arquivo se encontra a função para abertura do modal e posterior cadastro na plataforma)

#### Estrutura de Dados

[index.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/codigo-fonte/pages/home/index.html)

#### Instruções de acesso

Na página inicial, clicar no botão **Cadastre-se** no canto superior direito ou no botão que aparece no meio da tela. Preencha o formulário com dados válidos como informado no próprio formulário para realizar o cadastro com sucesso.

### Funcionalidade de Login (RF-02)

Responsável: Felipe e Guilherme

Para realizar o login na plataforma é necessário estar na página inicial da aplicação. Clicando no botão de _Login_ é possível abrir o _modal_ para abrir a sessão do usuário dentro do site. Para esta funcionalidade foram utilizadas as linguagens HTML, CSS e JavaScript.

![Tela de Início](../documentos/img/Projeto%20de%20interface/TelaLogin.png)

#### Requisito atendido

RF-02: O site deve permitir ao usuário realizar o login dentro da plataforma.

#### Artefatos da funcionalidade

Os artefatos da funcionalidade se encontra em "pages/home" e são os seguintes:

- index.html
- home.css
- home.js (dentro deste arquivo se encontra a função para abertura do modal e posterior login na plataforma)

#### Estrutura de Dados

[index.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/codigo-fonte/pages/home/index.html)

#### Instruções de acesso

Na página inicial, clicar no botão **Login** no canto superior direito . Preencha o formulário com um usuário previamente cadastrado para realizar o login com sucesso.

## Tela de Anotações (RF-03)

### Funcionalidade de Criação e Visualização de Anotações (RF-02)

Responsável: Beatrice

Para a criação e posterior visualização de anotações é necessário abrir a opção de **Ferramentas** na página inicial e clicar em _Anotações_. Para esta funcionalidade foram utilizadas as linguagens HTML, CSS e JavaScript.

![Tela de Anotações](../documentos/img/Projeto%20de%20interface/FuncionalidaCriaAnotacoes.png)

#### Requisito atendido

RF-03: O site deve permitir ao usuário criar e visualizar suas anotações.

#### Artefatos da funcionalidade

Os artefatos da funcionalidade se encontra em "pages/Anotações" e são os seguintes:

- anotacoes.html
- anotacoes.css
- anotacoes.js

#### Estrutura de Dados

[anotacoes.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/codigo-fonte/pages/Anota%C3%A7%C3%B5es/anotacoes.html)

#### Instruções de acesso

Na tela Home é possível clicar no botão **Ferramentas** onde aparece a opção para entrar na tela de **Anotações**. Dentro da tela de Anotações é possível ver o botão **Nova Anotação** para criar anotações. Ao mesmo tempo, assim que entra na tela de Anotações, já é possível verificar todas as anotações que o usuário tem.

### Funcionalidade de Edição e Remoção de Anotações (RF-04 e RF-05)

Responsável: Maurício

Para a edição e/ou remoção de anotações é necessário estar dentro da tela de anotações, selecionar as anotações desejadas para sua edição/remoção. Para esta funcionalidade foram utilizadas as linguagens HTML, CSS e JavaScript.

![Tela de Anotações](../documentos/img/Projeto%20de%20interface/FuncionalidadeEditAnotacoes.png)

#### Requisito atendido

RF-04 e RF-05: O site deve permitir ao usuário editar e deletar suas anotações.

#### Artefatos da funcionalidade

Os artefatos da funcionalidade se encontra em "pages/Anotações" e são os seguintes:

- anotacoes.html
- anotacoes.css
- anotacoes.js

#### Estrutura de Dados

[anotacoes.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/codigo-fonte/pages/Anota%C3%A7%C3%B5es/anotacoes.html)

#### Instruções de acesso

Quando o usuário está na tela de Anotações, após criar as suas primeiras notas dentro da plataforma, o sistema permite por meio dos botões de **Excluir** e **Editar**, excluir e editar suas anotações. Os botões estão com os símbolos intuitivos na cor vermelha e laranja.

## Ferramenta Pomodoro (RF-06)

Responsável: Rodrigo

Para o uso da ferramenta que poderá auxiliar com a Técnica Pomodoro será necessário estar na página inicial e dentro da opção de _Ferramentas_, clicar em _Relógio Pomodoro_. Para esta funcionalidade foram utilizadas as linguagens HTML, CSS e JavaScript.

![Ferramenta Pomodoro](../documentos/img/Projeto%20de%20interface/FerramentaPomodoro.png)

#### Requisito atendido

RF-06: O site deve permitir ao usuário usar a ferramenta "Relógio Pomodoro", para auxiliar no foco durante seus estudos.

#### Artefatos da funcionalidade

Os artefatos da funcionalidade se encontra em "pages/Pomodoro" e são os seguintes:

- pomodoro.js
- pomodoro.css

#### Estrutura de Dados

[pomodoro.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/codigo-fonte/pages/Pomodoro/pomodoro.js)

#### Instruções de acesso

Na tela de Anotações, o usuário pode fazer uso da ferramenta pomodoro clicando no modal suspenso na parte inferior direita da tela.

## Campo para Busca de Anotações (RF-07)

Responsável: Jair Damián

A tela de Anotações deverá contar com opção para busca de anotações por Título ou Conteúdo. Para esta tarefa foram utilizadas as linguagens JavaScript e CSS.

![Tela de Anotações](../documentos/img/Projeto%20de%20interface/FuncionalidaCriaAnotacoes.png)

#### Requisito atendido

RF-07: O site deve permitir ao usuário buscar as suas anotações em um campo de busca, por título ou conteúdo.

#### Artefatos da funcionalidade

Os artefatos da funcionalidade se encontra em "pages/Sobre" e são os seguintes:

- anotacoes.js
- anotacoes.css

#### Estrutura de Dados

[anotacoes.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/codigo-fonte/pages/Anota%C3%A7%C3%B5es/anotacoes.js)

#### Instruções de acesso

Na tela de Anotações, após terem sido criadas várias anotações, o usuário pode digitar no campo de busca os termos para procurar suas anotações, por título ou conteúdo. Após a digitação, o usuário deverá clicar no botão **Buscar** para ver os resultados na parte inferior da tela.

## Tela Sobre (RF-08)

Responsável: Beatrice

O site deverá contar com uma página _Sobre_ para o usuário ter pleno entendimento do projeto. Para esta tarefa foram utilizadas as linguagens HTML, CSS.

![Tela Sobre](../documentos/img/Projeto%20de%20interface/RequisitoTelaSobre.png)

#### Requisito atendido

RF-08: O site deve permitir ao usuário acessar uma tela "Sobre" para obter informação sobre o projeto.

#### Artefatos da funcionalidade

Os artefatos da funcionalidade se encontra em "pages/Sobre" e são os seguintes:

- sobre.html
- sobre.css

#### Estrutura de Dados

[sobre.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projfocoacademico/blob/main/codigo-fonte/pages/Sobre/sobre.html)

#### Instruções de acesso

Na tela inicial é possível acessar informações sobre o projeto no link "Sobre".

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
