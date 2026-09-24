# DOCUMENTAÇÃO DO PROJETO — CINEMA DE ARAME


# 1. CAPA IDENTIFICADA

**CINEMA DE ARAME**

Sistema web para consulta de filmes, sessões e realização de compra de ingressos.

Integrantes:

* Thallys Guedes
* Gustavo Gomes

Disciplina: PROGRAMAÇÃO WEB 2

Professor(a):

Turma: 2 DS-M

Data:24/09/2026

---

# 2. INTRODUÇÃO

O Cinema de Arame é um sistema web desenvolvido com o objetivo de proporcionar uma experiência simples e organizada para usuários que desejam consultar filmes em cartaz, visualizar sessões, escolher horários, selecionar assentos, adicionar snacks e finalizar uma compra de ingressos.

O projeto foi estruturado como uma aplicação web composta por diferentes páginas interligadas. A página inicial apresenta os principais destaques do cinema e fornece acesso às áreas de filmes, sessões e snacks.

A aplicação também possui recursos de interação desenvolvidos em JavaScript, como filtros por gênero, pesquisa de filmes, seleção de dias e horários, escolha de assentos, seleção de snacks, cálculo do valor total e validações no formulário de compra.

---

# 3. DEFINIÇÃO DO PROBLEMA

Em um cinema, o usuário precisa encontrar rapidamente informações sobre os filmes disponíveis, horários das sessões, formatos de exibição, idiomas, assentos e valores relacionados à compra.

Quando essas informações são apresentadas de forma desorganizada, o usuário pode ter dificuldade para encontrar um filme ou sessão específica e concluir uma compra.

O problema abordado pelo projeto é:

**Como desenvolver uma interface web simples, organizada e interativa que permita ao usuário consultar filmes e sessões e simular a compra de ingressos de cinema de maneira prática?**

---

# 4. JUSTIFICATIVA

O desenvolvimento do Cinema de Arame é relevante porque permite aplicar conhecimentos de desenvolvimento web em uma situação prática.

O projeto reúne diversos conceitos importantes, como:

* estruturação de páginas HTML;
* estilização com CSS;
* programação com JavaScript;
* manipulação do DOM;
* eventos de clique;
* filtros;
* pesquisa;
* formulários;
* validações;
* seleção de elementos;
* cálculo de valores;
* navegação entre páginas.

Além disso, o projeto simula uma situação real de utilização de um sistema de cinema, permitindo que o usuário percorra diferentes etapas até a finalização de uma compra.

---

# 5. PÚBLICO-ALVO

O sistema tem como público-alvo pessoas que desejam consultar a programação de um cinema e realizar uma simulação de compra de ingressos.

Entre os possíveis usuários estão:

* clientes de cinemas;
* pessoas que desejam consultar filmes em cartaz;
* usuários interessados em horários de sessões;
* usuários que desejam escolher assentos;
* usuários interessados em comprar snacks junto com o ingresso.

O sistema também pode servir como protótipo para uma futura aplicação comercial de venda de ingressos.

---

# 6. OBJETIVO GERAL

Desenvolver um sistema web de cinema que permita ao usuário consultar filmes, pesquisar e filtrar títulos, visualizar sessões e horários, selecionar assentos, escolher snacks e realizar uma simulação de compra de ingresso através de uma interface intuitiva.

---

# 7. OBJETIVOS ESPECÍFICOS

1. Desenvolver uma página inicial para apresentação do cinema.

2. Criar uma área para consulta dos filmes disponíveis.

3. Implementar pesquisa de filmes por nome.

4. Implementar filtros de filmes por gênero e situação.

5. Criar uma página para visualização dos detalhes de um filme.

6. Permitir a seleção de dias e horários das sessões.

7. Permitir a seleção de assentos disponíveis.

8. Permitir a escolha de snacks e combos.

9. Calcular automaticamente o valor total da compra.

10. Implementar validações no formulário de compra.

11. Permitir a seleção da forma de pagamento.

12. Apresentar uma confirmação após a finalização da compra.

---

# 8. REQUISITOS FUNCIONAIS

## RF01 — Página inicial

O sistema deve apresentar uma página inicial contendo a identidade do Cinema de Arame e links para as principais áreas do sistema.

## RF02 — Consulta de filmes

O sistema deve permitir que o usuário visualize os filmes disponíveis.

## RF03 — Pesquisa de filmes

O sistema deve permitir que o usuário pesquise um filme utilizando o campo de pesquisa.

## RF04 — Filtro por gênero

O sistema deve permitir filtrar os filmes por gêneros como:

* Terror;
* Comédia;
* Ação;
* Drama;
* Aventura;
* Animação.

## RF05 — Filtro por situação

O sistema deve permitir alternar entre categorias como:

* Em cartaz;
* Pré-venda;
* Em breve.

## RF06 — Visualização de detalhes

O sistema deve apresentar informações relacionadas ao filme selecionado, incluindo gênero, duração, data de estreia, distribuição, acessibilidade e horários.

## RF07 — Seleção de sessão

O sistema deve permitir a escolha de uma data e horário de sessão.

## RF08 — Seleção de assentos

O sistema deve permitir selecionar assentos disponíveis para a sessão.

## RF09 — Controle de assentos indisponíveis

O sistema deve impedir a seleção de assentos marcados como indisponíveis.

## RF10 — Seleção de snacks

O sistema deve permitir selecionar combos e snacks para adicionar à compra.

## RF11 — Forma de pagamento

O sistema deve disponibilizar opções de pagamento, incluindo:

* Crédito;
* Débito;
* Pix;
* Dinheiro.

## RF12 — Cálculo do total

O sistema deve atualizar o valor total da compra conforme os ingressos, assentos e snacks selecionados.

## RF13 — Finalização da compra

O sistema deve permitir finalizar a compra após o preenchimento dos dados necessários.

## RF14 — Nova compra

Após a finalização, o sistema deve permitir iniciar uma nova compra.

---

# 9. REQUISITOS NÃO-FUNCIONAIS

## RNF01 — Usabilidade

A interface deve apresentar informações de forma organizada para facilitar a navegação do usuário.

## RNF02 — Responsividade

As páginas devem possuir estrutura adaptável para diferentes tamanhos de tela.

## RNF03 — Desempenho

O sistema deve executar as interações do usuário sem processamento desnecessário.

## RNF04 — Compatibilidade

O sistema deve ser executável em navegadores modernos compatíveis com HTML5, CSS3 e JavaScript.

## RNF05 — Organização

Os arquivos devem ser organizados de acordo com suas funções, separando páginas, estilos, scripts e imagens.

## RNF06 — Interface visual

O sistema deve manter uma identidade visual consistente entre as páginas.

---

# 10. REGRAS DE NEGÓCIO

## RN01 — Seleção de assento

O usuário deve selecionar pelo menos um assento para prosseguir com a compra.

## RN02 — Assento indisponível

Um assento marcado como indisponível não pode ser selecionado.

## RN03 — Tipo de ingresso

Após selecionar os assentos, o sistema permite definir o tipo de ingresso, como inteira ou meia.

## RN04 — Seleção de filme

A compra deve estar relacionada a um filme selecionado.

## RN05 — Seleção de sessão

O usuário deve selecionar uma sessão/horário antes de concluir a compra.

## RN06 — Snacks

Os snacks selecionados devem ser adicionados ao valor total da compra.

## RN07 — Forma de pagamento

O usuário deve informar uma forma de pagamento antes da finalização.

## RN08 — Cálculo do total

O valor final deve considerar os itens selecionados durante a compra.

## RN09 — Nova compra

Ao iniciar uma nova compra, as seleções da compra anterior devem ser reiniciadas.

## RN10 — Pesquisa inexistente

Quando o termo pesquisado não corresponder aos filmes disponíveis, nenhum filme correspondente deve ser apresentado.

---

# 11. TECNOLOGIAS UTILIZADAS

## HTML5

Utilizado para construir a estrutura das páginas do sistema.

Entre os elementos utilizados estão:

* títulos;
* textos;
* imagens;
* links;
* botões;
* formulários;
* campos de entrada;
* caixas de seleção;
* opções de pagamento.

## CSS3

Utilizado para definir a aparência visual do sistema.

O CSS é responsável por:

* cores;
* fontes;
* espaçamentos;
* tamanhos;
* posicionamento;
* cards;
* botões;
* menus;
* grades de filmes;
* assentos;
* responsividade.

## JavaScript

Utilizado para adicionar comportamento e interatividade às páginas.

Entre as funcionalidades implementadas estão:

* pesquisa;
* filtros;
* seleção de horários;
* seleção de assentos;
* seleção de snacks;
* cálculo do total;
* validações;
* alteração de estados dos elementos;
* finalização da compra.

## Organização dos arquivos

A estrutura principal do projeto é semelhante a:

```text
Cine Arame/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── index.js
│   └── listaImagens.js
│
├── images/
│   ├── logo.jpeg
│   └── cartaz/
│       └── odisseia.jpeg
│
└── pages/
    ├── filmes.html
    ├── pagfilme.html
    ├── sessao.html
    ├── assentos.html
    ├── formulario.html
    └── snacks.html
```

---

# 12. MODELAGEM DOS DADOS (JS)

O projeto não utiliza banco de dados ou uma API externa. Os dados utilizados pelo sistema são definidos diretamente nas páginas e scripts JavaScript.

A modelagem lógica pode ser representada pelos seguintes objetos:

## Filme

```javascript
const filme = {
    titulo: "Título do filme",
    genero: "Ação",
    duracao: "120 min",
    estreia: "00/00/0000",
    distribuidora: "Nome da distribuidora",
    acessibilidade: "Recursos disponíveis"
};
```

## Sessão

```javascript
const sessao = {
    filme: "Título do filme",
    data: "21/09",
    horario: "18:00",
    sala: "Sala 1",
    formato: "2D",
    idioma: "Dublado"
};
```

## Assento

```javascript
const assento = {
    codigo: "A01",
    disponivel: true,
    tipo: "inteira"
};
```

## Snack

```javascript
const snack = {
    nome: "Combo 1",
    preco: 73.00,
    selecionado: false
};
```

## Compra

```javascript
const compra = {
    filme: "Título do filme",
    sessao: "18:00",
    assentos: [],
    snacks: [],
    pagamento: "pix",
    total: 0
};
```

A estrutura permite representar os principais dados manipulados durante o processo de compra.

---

# 13. WIREFRAMES — 4 TELAS

## Wireframe 01 — Página inicial

```text
┌─────────────────────────────────────────┐
│          CINEMA DE ARAME                │
├─────────────────────────────────────────┤
│ Home | Filmes | Sessões | Snacks        │
├─────────────────────────────────────────┤
│                                         │
│             DESTAQUES                   │
│                                         │
│   [Filme]  [Filme]  [Filme]             │
│                                         │
├─────────────────────────────────────────┤
│              EM CARTAZ                  │
│                                         │
│ [Filme] [Filme] [Filme] [Filme]         │
│                                         │
└─────────────────────────────────────────┘
```

## Wireframe 02 — Página de filmes

```text
┌─────────────────────────────────────────┐
│ CINEMA DE ARAME                         │
├─────────────────────────────────────────┤
│ Home | Filmes | Sessões | Snacks        │
├─────────────────────────────────────────┤
│ Em cartaz | Pré-venda | Em breve        │
│                                         │
│ Pesquisar filme: [______________]       │
│                                         │
│ Todos | Terror | Comédia | Ação         │
│ Drama | Aventura | Animação             │
│                                         │
│ [Filme] [Filme] [Filme]                 │
│ [Filme] [Filme] [Filme]                 │
└─────────────────────────────────────────┘
```

## Wireframe 03 — Detalhes do filme

```text
┌─────────────────────────────────────────┐
│ CINEMA DE ARAME                         │
├─────────────────────────────────────────┤
│             TÍTULO DO FILME             │
│                                         │
│ Gênero · duração                        │
│ Data de estreia                         │
│ Distribuidora                           │
│ Acessibilidade                          │
│                                         │
│ HORÁRIOS                                │
│                                         │
│ Qui  Sex  Sáb  Dom  Seg  Ter  Qua       │
│                                         │
│ 2D · Dublado · Sala 1                   │
│ [16:00] [18:30] [20:00]                 │
│                                         │
│              [PROSSEGUIR]               │
└─────────────────────────────────────────┘
```

## Wireframe 04 — Compra

```text
┌─────────────────────────────────────────┐
│         COMPRAR INGRESSO                │
├─────────────────────────────────────────┤
│ Filme: [Selecione o filme]              │
│                                         │
│ ASSENTOS                                │
│                                         │
│ [A01] [A02] [A03] [A04]                 │
│ [B01] [B02] [B03] [B04]                 │
│                                         │
│ SNACKS                                  │
│ □ Combo 1 — R$ 73,00                    │
│ □ Combo 2 — R$ 50,50                    │
│                                         │
│ PAGAMENTO                               │
│ ○ Crédito ○ Débito ○ Pix ○ Dinheiro     │
│                                         │
│ Total: R$ 0,00                          │
│                                         │
│       [FINALIZAR COMPRA]                │
└─────────────────────────────────────────┘
```

---

# 14. FLUXOGRAMA DO SISTEMA

```text
                 INÍCIO
                    │
                    ▼
             Página inicial
                    │
          ┌─────────┼─────────┐
          │         │         │
          ▼         ▼         ▼
       Filmes    Sessões    Snacks
          │
          ▼
   Pesquisar/filtrar
          │
          ▼
   Selecionar filme
          │
          ▼
  Visualizar detalhes
          │
          ▼
 Selecionar data/horário
          │
          ▼
   Selecionar assentos
          │
          ▼
     Escolher snacks
          │
          ▼
 Escolher pagamento
          │
          ▼
     Calcular total
          │
          ▼
      Validar dados
          │
       ┌──┴──┐
       │     │
    Inválido Válido
       │     │
       ▼     ▼
   Corrigir  Finalizar
   dados     compra
             │
             ▼
       Compra concluída
             │
             ▼
        Nova compra?
          │     │
         Sim   Não
          │     │
          ▼     ▼
       Reiniciar FIM
```

---

# 15. DESCRIÇÃO DAS FUNCIONALIDADES

## 15.1 Página inicial

A página inicial apresenta a identidade do Cinema de Arame e permite acessar as principais áreas do sistema.

## 15.2 Página de filmes

Apresenta os filmes organizados em categorias.

O usuário pode utilizar:

* abas;
* filtros por gênero;
* campo de pesquisa.

## 15.3 Pesquisa

O campo de pesquisa compara o texto digitado com o título dos filmes e oculta os filmes que não correspondem ao termo.

## 15.4 Filtro por gênero

O usuário pode selecionar um gênero para visualizar somente os filmes correspondentes.

## 15.5 Detalhes do filme

A página apresenta informações do filme e os horários disponíveis.

## 15.6 Seleção de sessão

O usuário pode escolher um dia e horário para a sessão.

## 15.7 Seleção de assentos

O sistema apresenta os assentos e permite selecionar aqueles que estão disponíveis.

## 15.8 Seleção de snacks

O usuário pode escolher combos adicionais para a compra.

## 15.9 Forma de pagamento

O usuário pode selecionar uma das formas de pagamento disponíveis.

## 15.10 Cálculo do total

O valor é atualizado de acordo com os itens selecionados.

## 15.11 Finalização

Após preencher os dados necessários, o usuário pode finalizar a compra.

O sistema apresenta uma mensagem de confirmação:

**"Ingresso comprado!"**

## 15.12 Nova compra

Após a conclusão, o usuário pode iniciar uma nova compra e limpar as seleções anteriores.

---

# 16. MATRIZ DE TESTES

| Nº | Teste                            | Procedimento                                 | Resultado esperado                        |
| -- | -------------------------------- | -------------------------------------------- | ----------------------------------------- |
| 01 | Abrir página inicial             | Acessar `index.html`                         | Página inicial carregada corretamente     |
| 02 | Acessar filmes                   | Clicar em "Filmes"                           | Página de filmes aberta                   |
| 03 | Pesquisar filme existente        | Digitar nome de um filme                     | Filme correspondente é exibido            |
| 04 | Pesquisar termo inexistente      | Digitar um termo que não existe              | Nenhum filme correspondente é apresentado |
| 05 | Filtrar Terror                   | Selecionar "Terror"                          | Somente filmes do gênero são exibidos     |
| 06 | Filtrar Comédia                  | Selecionar "Comédia"                         | Somente filmes de comédia são exibidos    |
| 07 | Alterar categoria                | Selecionar "Pré-venda"                       | Filmes da categoria são apresentados      |
| 08 | Selecionar dia                   | Clicar em um dia                             | O dia selecionado fica ativo              |
| 09 | Selecionar horário               | Clicar em um horário                         | O horário fica selecionado                |
| 10 | Selecionar assento disponível    | Clicar em assento disponível                 | Assento é marcado como selecionado        |
| 11 | Selecionar assento indisponível  | Clicar em assento bloqueado                  | Assento não pode ser selecionado          |
| 12 | Remover seleção                  | Clicar novamente em assento selecionado      | Assento deixa de ser selecionado          |
| 13 | Adicionar snack                  | Marcar um combo                              | Combo é adicionado e o total é atualizado |
| 14 | Finalizar sem dados obrigatórios | Tentar finalizar sem preencher os requisitos | Sistema impede a finalização              |
| 15 | Finalizar compra válida          | Preencher os dados e finalizar               | Sistema apresenta confirmação da compra   |

### Testes de estresse para a apresentação

O professor poderá solicitar situações como:

**Teste A — Busca inexistente**

Digitar:

```text
filme123456
```

Resultado esperado: nenhum resultado correspondente.

**Teste B — Nenhum assento**

Tentar prosseguir sem selecionar assento.

Resultado esperado: o sistema deve impedir o prosseguimento quando essa validação estiver sendo aplicada na etapa de compra.

**Teste C — Assento indisponível**

Tentar clicar em um assento bloqueado.

Resultado esperado: o assento não deve ser selecionado.

**Teste D — Pagamento não selecionado**

Tentar finalizar a compra sem escolher a forma de pagamento.

Resultado esperado: a validação do formulário deve impedir a conclusão.

**Teste E — Remover item**

Selecionar um assento ou snack e depois desmarcá-lo.

Resultado esperado: o item é removido da seleção e o total é atualizado.

---

# 17. DIFICULDADES ENCONTRADAS

Durante o desenvolvimento do projeto, algumas dificuldades podem ser destacadas:

### 17.1 Organização de várias páginas

Foi necessário organizar diferentes páginas para representar as etapas do sistema.

### 17.2 Navegação

As páginas precisaram ser interligadas corretamente para permitir que o usuário avance entre filmes, sessões e compra.

### 17.3 Manipulação do DOM

Foi necessário utilizar JavaScript para alterar elementos da página de acordo com as ações do usuário.

### 17.4 Implementação dos filtros

A aplicação dos filtros exigiu verificar o gênero e a categoria dos filmes e controlar a exibição dos elementos.

### 17.5 Seleção de assentos

Foi necessário controlar quais assentos estavam disponíveis, selecionados ou indisponíveis.

### 17.6 Cálculo do total

O valor da compra precisa ser atualizado conforme o usuário seleciona ou remove itens.

### 17.7 Validação do formulário

Foi necessário garantir que informações obrigatórias fossem preenchidas antes da finalização.

---

# 18. SOLUÇÕES IMPLEMENTADAS

Para solucionar as dificuldades encontradas foram utilizadas algumas estratégias.

### 18.1 Separação das páginas

O sistema foi dividido em páginas específicas para cada função.

### 18.2 JavaScript para interações

Eventos `click`, `input` e `change` foram utilizados para responder às ações do usuário.

### 18.3 Classes CSS

Classes foram utilizadas para representar estados visuais, como:

* item ativo;
* assento selecionado;
* assento indisponível;
* aba selecionada.

### 18.4 Filtros

Através do JavaScript, os filmes são exibidos ou ocultados de acordo com os filtros selecionados.

### 18.5 Controle de seleção

As seleções são armazenadas durante a interação e utilizadas para atualizar o resumo e o valor total.

### 18.6 Validação

O formulário utiliza campos obrigatórios e verificações em JavaScript para evitar a finalização de uma compra incompleta.

---

# 19. MELHORIAS FUTURAS

O projeto pode ser expandido futuramente com:

1. Banco de dados para armazenar filmes, usuários, sessões e compras.

2. Sistema de cadastro e login de usuários.

3. Área administrativa para cadastrar, editar e excluir filmes.

4. Backend para processar as compras.

5. Integração com um sistema de pagamento real.

6. Atualização dos assentos em tempo real.

7. Geração de ingresso digital.

8. Envio do ingresso por e-mail.

9. Histórico de compras.

10. Sistema real de disponibilidade de sessões.

11. Melhorias de acessibilidade.

12. Integração com uma API de filmes.

13. Sistema de avaliações.

14. Criação de banco de dados para os snacks.

15. Implementação de autenticação e segurança.

---

# 20. CONCLUSÃO

O projeto Cinema de Arame possibilitou o desenvolvimento de um sistema web voltado para a consulta de filmes e simulação de compra de ingressos.

A aplicação reúne recursos de HTML, CSS e JavaScript para criar uma interface interativa, permitindo ao usuário navegar entre filmes, consultar sessões, pesquisar títulos, filtrar gêneros, escolher horários, selecionar assentos, adicionar snacks, escolher a forma de pagamento e finalizar uma compra.

Além de cumprir a função de um protótipo de sistema de cinema, o projeto possibilitou aplicar conceitos importantes de desenvolvimento web, principalmente estruturação de páginas, estilização, manipulação do DOM, eventos, filtros, formulários e validações.

Como evolução futura, o projeto poderá receber um backend e um banco de dados, transformando o protótipo em uma aplicação completa capaz de armazenar usuários, filmes, sessões, assentos e compras de forma permanente.
