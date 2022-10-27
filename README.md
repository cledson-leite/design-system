# Design System FitBank

> Design system usado nas aplicações da FitBank pagamentos eletrônicos

## Pre-requisitos
Este design system requer [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html) e [React-Dom](https://pt-br.reactjs.org/docs/create-a-new-react-app.html) na versão 18.2.0 e [Styled Components](https://styled-components.com/docs/basics#installation) na versão 5.x.x.. Além disso é necessário ter a font [Roboto](https://fonts.google.com/specimen/Roboto) na head do projeto.

## Sumario

- [Descrição](#design-system-fitBank)
- [Pre-requisitos](#pre-requisitos)
- [Sumario](#sumario)
- [Instalação](#instalação)
- [Modo de uso](#modo-de-uso)
- [Documentação](#documentação)
- [Versionamento](#versionamento)
- [Autores](#autores)
- [License](#license)

## Instalação
**ANTES DA INSTALAÇÃO:** por favor leia [Pre-requisitos](#pre-requisitos)

Para instalar a biblioteca, rode:
```sh
npm install design-system-fitbank
```
Ou se preferir usando o Yarn:
```sh
yarn add design-system-fitbank
```
## Modo de uso
Importe o provedor de tema padrão e envolva o componente raiz do seu projeto
```js

import { ThemeDSProvider } from 'design-system-fitbank'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeDSProvider theme={tema}>
      <App />
    </ThemeDSProvider>
  </React.StrictMode>
);
```
Agora pode usar os componentes no local onde quiser
```js

import {Button} from 'design-system-fitbank'

function App() {
  return (<Button>Teste</Button>);
}

export default App;
```
## Documentação
Documentação completa dos componentes [StoryBook](https://pt-br.reactjs.org/docs/create-a-new-react-app.html).

## Versionamento
Para as versões disponíveis, consulte o [Versões](https://github.com/fit-cledson-leite/design-system-fitbank/releases)

## Autores
[Autores](https://github.com/fit-cledson-leite/design-system-fitbank/graphs/contributors)

----------------------------------
