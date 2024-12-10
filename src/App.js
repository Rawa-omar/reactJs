import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Aboutus from './Components/Aboutus';
import List from './Components/List';
import Details from './Components/Details';

import { Provider } from 'react-redux';
import store from './store';
import Checkout from './Components/Checkout'
import Invoice from './Components/Invoice';
import Convertcurancy from './Components/Convertcurancy';
import Shoppingcart from './Components/Shoppingcart';
import Myrofile from './Components/Myprofile';
import Jacketlist from './Components/Jacketlist';
import Shirtlist from './Components/Shirtlist';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <Provider store={store}>
          <div className="App">
          <BrowserRouter> 
            <Routes>
              <Route   path='/' element={<Landing/>}/>
                <Route path='/aboutus' element={<Aboutus/>}/>
                <Route path='/list' element={<List/>}/>
                <Route path='/details' element={<Details/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/invoice' element={<Invoice/>}/>
                <Route path='/convert' element={<Convertcurancy/>}/>
                <Route path='/cart' element={<Shoppingcart/>}/>
                <Route path='/profile' element={<Myrofile/>}/>
                <Route path='/jacket' element={<Jacketlist/>}/>
                <Route path='/shirt' element={<Shirtlist/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
                

            </Routes>
          </BrowserRouter>
    </div>  
    </Provider>
  
  );
}

export default App;
