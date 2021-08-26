import DISHES from './shared/dishes';
import {Switch ,Route ,Redirect} from 'react-router-dom'
import Home from './HomeComponent';
import Menu from './Menu'
import Contact from './ContactComponent';
import {Link} from 'react-router-dom';
import LEADERS from './shared/leaders'
import PROMOTIONS from './shared/promotions'
import { Component } from 'react';
class Switches extends Component{
    constructor(){
        super();
        this.state={

        }
    }
render(){return(
<>
<Route path='/home' component={Home}/>

    <Route path="/menu" component={Menu}/>
    <Route path='/Contact' component={Contact}/>
{/* <Route exact path='/menu' component={()=><Menu dish={this.state.dishes}/> } /> */}
</>)};
}
export default Switches