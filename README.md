# Battle Cards Generator

## English

_(Brazilian Portuguese below)_

This is a PDF generator for printing. You just need to include the card files (which will be described later) and run
`yarn dev` or `npm run dev` to preview the cards. Like it? Just hit the print button or save it as a PDF. *Important:*
Enable background graphics to avoid any issues in your print or PDF.

This project was made using `Vite`, `Tailwind`, `React`, and `Typescript`. Therefore, the cards are all visualized and
printed directly in the browser. If you're already familiar with these technologies, you'll find it quite easy to modify
the files to have the design you want.

### But how does this game work?

This is a game similar to Super Trunfo, like many others in both domestic and international markets. The rules I use for
this particular version are different, but you can create whatever rules you'd like. After all, the important thing is
to have fun:

- Shuffle and evenly distribute the cards among the players. If there's any leftover card, separate it without anyone
  seeing, and set it aside; it won't be used in this round.
- Players should keep their cards stacked in their hands without altering the order. Ideally, they should only see the
  top card.
- On each player's turn, they choose an attribute and declare its value. The player with the highest value takes all
  cards and places them in their pile.
- When all cards are played, the person with the most cards in their pile wins.

### How to use?

- Run `yarn install` or `npm install` to install the dependencies;
- Use `cp cards.example.json public/data/cards.json` to copy the example card file;
- To create your own cards:
	- Edit the file in `public/data/cards.json` with your card information;
	- Add the card images to `public/data/` (for example: `public/data/card-01.png`). The images will fit automatically,
	  but the recommended size is 63x44mm (each card has a total size of 63x88mm);
	- After editing the file and adding images, preview your cards in your browser with `yarn dev` or `npm run dev`,
	  just like any React project.

## Brazilian Portuguese

Este é um gerador de PDF para impressão, você apenas precisa incluir os arquivos das cartas (será descrito posteriormente), e rodar `yarn dev` ou `npm run dev` para visualizar as cartas. Gostou? Só mandar imprimir clicando no botão, ou salvar em PDF. *Importante:* ative os gráficos em segundo plano para não ter falhas na sua impressão ou PDF.

Este projeto foi feito com `Vite`, `Tailwind`, `React` e `Typescript`, portanto as cartas são toas visualizadas e impressas no navegador, se você já está acostumado com essas linguagens achará bem fácil alterar os arquivos para ter o layout que quiser.

### Mas como funciona esse jogo?

Este é um jogo estilo Super Trunfo, como vários no mercado nacional e internacional. As regras que eu uso deste em particular são diferentes, mas você pode criar as regras que quiser, afinal, o importante é se divertir:
- Embaralhe e separe as cartas igualmente entre os jogadores, se sobrar alguma carta, separe-a sem que ninguém veja e deixe de canto, ela não será usada nesta rodada;
- Os jogadores ficarão com as cartas na mão empilhadas e não irão poderão mudar a ordem delas, o ideal é que eles vejam apenas a carta de cima;
- Na vez de cada pessoa, ela escolhe um atributo e informa o valor, o jogador com o maior valor pega todas as cartas e coloca em sua pilha;
- Quando todas as cartas da mão acabar, quem tiver mais cartas na pilha vence.

### Como usar?

- `yarn install` ou `npm install` para instalar os pacotes;
- `cp cards.example.json public/data/cards.json` para copiar o arquivo de exemplo das cartas que serão criadas;
- Para criar suas próprias cartas:
	- Edite o arquivo em `public/data/cards.json` com as informações das suas cartas;
	- Adicione as imagens das cartas no `public/data/` (como, por exemplo: `public/data/card-01.png`), as imagens se enquadram automaticamente, mas o tamanho 63x44mm serão ideias para isso (cada carta possui 63x88mm de tamanho total);
	- Após editar o arquivo e alterar as imagens, confira no seu próprio navegador com `yarn dev` ou `npm run dev`, como qualquer projeto react.
