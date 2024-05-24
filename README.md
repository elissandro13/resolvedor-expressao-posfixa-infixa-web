# resolvedor-expressao-posfixa-infixa-web
Um resolvedor de expressões numéricas (infixas e posfixas). O sistema tem suporte a modificação da representação da expressão numérica, assim como a possibilidade de solução automática da expressão. Inicialmente, a expressão esperada pelo resolver por padrão é seguindo a Notação Infixa. Para mudar a notação para Posfixa, é necessário clicar no botão "PostFix", da mesma forma, se estamos na notação Posfixa, para mudar para a Infixa, basta clicar no botão "Infix".

## Integrantes do Grupos
* Elissandro Caetano Júnior
* Mariano Glauber Torres Fernandes
* Matheus Vaz Leal
* Natan Ventura Menezes


## Ler Expressão Numérica: 
* Esta operação deve ler uma expressão numérica passada como argumento e armazenar essa expressão no programa. A expressão pode estar em notação infixa ou posfixa e o programa deve verificar se a expressão numérica é válida. Por exemplo, 3 + 4 é uma expressão válida, mas 2 + - x não é. E só deve armazenar a expressão se a mesma for válida 
## Converter para Notação Posfixa: 
* Esta operação deve converter a expressão armazenada no programa para a notação posfixa. Mais informações sobre a notação posfixa podem ser encontradas em https://pt.wikipedia.org/wiki/Notacão_polonesa_inversa
## Converter para Notação Infixa: 
* Esta operação deve converter a expressão armazenada no programa para a notação infixa com parênteses. Mais informações obre essa notação podem ser encontradas em https://pt.wikipedia.org/wiki/Notação_infixa
## Resolver Expressão: 
* Esta operação deve resolver a expressão armazenada e apresentar o valor numérico final correspondente a computação da expressão. Para resolver uma expressão na notação Posfixa, é necessário que exista um espaço entre os números e os operadores presentes na expressão.


## Exemplo Entradas
Exemplos de expressões infixas e suas versões posfixas:

Expressão Infixa: 2 + 3

    Expressão Posfixa: 2 3 +

Expressão Infixa: 5 * (6 + 2)

    Expressão Posfixa: 5 6 2 + *

Expressão Infixa: (1 + 2) * (3 + 4)

    Expressão Posfixa: 1 2 + 3 4 + *

## Estrutura
Diretórios Principais

    build/: Contém os arquivos gerados após a compilação do projeto.

    public/: Armazena arquivos estáticos como o favicon, o HTML principal, e outros que não passam pelo processo de build do Webpack.

    src/: Código-fonte da aplicação, incluindo JavaScript, CSS, e imagens.
        components/: Componentes React como botões, a calculadora e o display.
        utils/: Funções auxiliares e lógicas de negócio, como conversão e resolução de expressões.

Arquivos de Configuração e Outros Arquivos

    jest.config.js: Configuração dos testes automatizados com Jest.
    LICENSE: Licença de uso do software.
    package.json e package-lock.json: Gerenciam as dependências do projeto e scripts de build e teste.
    README.md: Documentação introdutória do projeto, incluindo descrição, como usar, e como contribuir.

Subdiretórios e Arquivos Importantes em src/

    App.js e App.css: Componente principal da aplicação React e seu respectivo estilo.
    index.js e index.css: Ponto de entrada da aplicação e estilos globais.
    logo.svg: Logo utilizado na aplicação.
    reportWebVitals.js e setupTests.js: Utilitários para performance e configuração inicial dos testes.

Diretório de Testes

    tests/: Contém os testes unitários para os componentes e funções utilitárias, garantindo que as funcionalidades principais operem conforme esperado.

Diretório de Utilidades (utils/)

    Arquivos de lógica específica: converteExpressoes.js, resolveExpressoes.js, stack.js, e uteis.js que lidam, respectivamente, com a conversão de notações, resolução de expressões, operações de pilha, e outras funções auxiliares.


## Uso
Inicialmente a calculadora estará no modo Infix. Nesse modo ela é semelhante a uma calculadora normal, porém ao clicar no botão "PostFix" a expressão é convertida para a notação polonesa inversa. De forma semelhante, ao escrever uma expressão na notação Posfixa, ao clicar o botão Infix, convertemos para a notação Infixa e, nos dois casos, ao clicar em '=' nossa expressão é calculada levando em conta o modo que está ativo e o resultado é exibido.
[Site da Publicação](https://elissandro13.github.io/resolvedor-expressao-posfixa-infixa-web/)





![demo (1)](https://github.com/elissandro13/resolvedor-expressao-posfixa-infixa-web/assets/54417372/f18653c7-97fd-49cf-96b5-b9f4fae51a1c)

