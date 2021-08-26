
import DISHES from './shared/dishes';
import CardDish from './CardDish';

import Header from './Header';
import Footer from './Footer';
import Switches from './Swithces'
import { Provider } from "react-redux";
import About from './Aboutus'
import MediaRender from './MediaRender'
import {ConfigureStore} from './redux/configureStore'
import {BrowserRouter} from 'react-router-dom'
import Contact from './ContactComponent';

const store=ConfigureStore();
function App() {
  return (
    <div>
  <Provider store ={store}>
    <BrowserRouter>
    <Header/>
  
    <CardDish/>
    <Switches/>
    <About />
   <MediaRender/>
   <Contact/>
    <Footer/>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
