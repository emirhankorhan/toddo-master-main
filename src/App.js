
import './App.css';
import Navbar from "../src/component/navbar/Navbar"
import Contentone from './component/content-1/Contentone';
import Contenttwo from './component/content-2/Contenttwo';
import Contentthree from './component/content-3/Contentthree';
import Contentfour from './component/content-4/Contentfour';
import Footer from "../src/component/footer/Footer"

function App() {

 




  return (
        <div className='app'>
          <Navbar/>
          <Contentone/>
          <Contenttwo/>
          <Contentthree/>
          <Contentfour/>
          <Footer/>
        </div>
      
    
  );
}

export default App;
