import "./index.scss"
import Header from './components/header/header'

import Home from '../src/pages/home/Home'
import Footer from './components/footer/footer'
import Facilities from './pages/facilities/Facilities'
import Rates from './pages/rate/Rate'
import {Route ,Switch } from 'react-router-dom'

function App() {
  return (
  <>
      <Header/>
     
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/facilities" component={Facilities}/>
        <Route path="/rate" component={Rates}/>
      </Switch>
     
     <Footer/>
  </>
  
  
  );
}

export default App;
