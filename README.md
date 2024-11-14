# Status do GitHub

**Nível:** 1-Iniciante

Aplicações web adquirem dados de várias maneiras. Através de entrada de usuário em páginas web, através de APIs para sistemas backend, de arquivos e bancos de dados, e às vezes "raspando" sites. O objetivo do app Status do GitHub é introduzi-lo a uma forma de raspar informações de outro site.

O Status do GitHub utiliza o pacote NPM Request para recuperar o status atual do site do GitHub a partir do site [GitHub Status](https://www.githubstatus.com/). O pacote Request permite que sites sejam recuperados não em uma janela do navegador, mas como um documento JSON que pode ser prontamente acessado pelo seu código.

Embora esta especificação de aplicação dependa fortemente de JavaScript, sinta-se à vontade para desenvolvê-la usando sua linguagem de escolha!

## Histórias de Usuários

- [ ] O usuário pode ver o status atual para operações Git do GitHub, solicitações de API, problemas operacionais, PRs, Dashboard e Projetos, Notificações Operacionais, Gists Operacionais e Páginas Operacionais do GitHub como uma lista na janela principal do aplicativo.
- [X] O usuário pode recuperar o status mais recente do site GitHub Status clicando em um botão 'Obter Status'.

## Funcionalidades bônus

- [ ] O usuário pode ver qualquer um dos componentes do GitHub que não estão em status 'Operacional' destacados por uma cor diferente, animação de fundo, ou qualquer outra técnica para fazê-lo se destacar. Use sua imaginação!

## Links e recursos úteis

- [Web Scraping (Wikipedia)](https://en.wikipedia.org/wiki/Web_scraping)
- [NPM Request](https://www.npmjs.com/package/request)
- [JavaScript JSON (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [JavaScript Object Notation](https://json.org/)
- Dica! Você pode usar o seguinte código para exibir o JSON da página do site de Status do GitHub a partir do comando de linha `node ghstatus`. Você pode usar esta saída para determinar qual elemento JSON contém as informações de status que você precisará para desenvolver este aplicativo.
