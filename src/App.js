import './App.css';
import MenuCover from './assets/pages/menu-cover';
import PatternSection from './assets/components/pattern';
import MenuYBebidas from './assets/components/MenuyBebidas';
import ListComida from './assets/components/ListComida';
import PatternSection2 from './assets/components/Pattern2';
import Desayunos from './assets/components/Desayunos';
import ScrollToTop from "react-scroll-to-top";
import EntradasMenu from './assets/components/Entradas';
import PlatosPrincipales from './assets/components/PlatosPrincipales';
import Menuninos from './assets/components/Menuninos';
import Postres from './assets/components/postres';
import Bebidas from './assets/components/Bebidas';




function App() {
  return (
    
    <><MenuCover /><PatternSection />
    <MenuYBebidas />
    {/* <PatternSection /> */}
    <ListComida />
    <PatternSection2 />
    <Desayunos />
    <EntradasMenu />
    <PlatosPrincipales />
    <Menuninos />
    <Postres />
    <Bebidas />
    <ScrollToTop smooth color="#A58D6C" />
    
    </>
      );
}

export default App;
