import './App.css';
import MenuCover from './assets/pages/menu-cover';
import PatternSection from './assets/components/pattern';
import MenuYBebidas from './assets/components/MenuyBebidas';
import ListComida from './assets/components/ListComida';
import PatternSection2 from './assets/components/Pattern2';
import Desayunos from './assets/components/Desayunos';




function App() {
  return (
    <><MenuCover /><PatternSection />
    <MenuYBebidas />
    {/* <PatternSection /> */}
    <ListComida />
    <PatternSection2 />
    <Desayunos />
    
    </>
      );
}

export default App;
