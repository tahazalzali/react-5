import React,{ Component } from 'react';
import CardDish from './CardDish';
import {Navbar,NavbarBrand} from 'reactstrap';

import DISHES from './shared/dishes';


class  Main extends Component {
  constructor(){
    super();
    this.state={
      dishes:DISHES,
      selectedDish:null
    }
  }
  CardInfo(dishId) {
    this.setState({ selectedDish: dishId })
}
  render(){
    return (
    <div >

<CardDish dish={this.state.dishes.filter(dish=>dish.id===this.state.selectedDish)} onClick={(dishId) => { this.CardInfo(dish)[0] }} dishes={DISHES}/>
    </div>
  );
}
}

export default Main;
