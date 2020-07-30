import React from 'react';
import Menu from './componentes/Menu'
import dadosiniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Carousel';

function App() {
  return (
  <div style={{background: "#141414"}}>

    <Menu/>

    <BannerMain
    videoTitle={dadosiniciais.categorias[0].videos[0].titulo}
    url={dadosiniciais.categorias[0].videos[0].url}
    videoDescription={"O que é Front-end? Trabalhando na área"}
    />

    <Carousel
    ignoreFirstVideo
    category={dadosiniciais.categorias[0]}    
      />

      <Carousel
      category={dadosiniciais.categorias[1]}
      />
      
      <Carousel
      category={dadosiniciais.categorias[2]}
      />

      <Carousel
      category={dadosiniciais.categorias[3]}
      />
    </div>
  );
}

export default App;
