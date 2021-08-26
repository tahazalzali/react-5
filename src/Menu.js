import React, { Component } from 'react'
import DISHES from './shared/dishes'
import CardDish from './CardDish'
class Menu extends Component {
    constructor() {
        super();
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    renderMenu() {
        this.state.dishes.map(dish => {

            return (<CardDish name={dish.name} src={dish.image} discription={dish.discription} label={dish.label} />)
        })

    }
    render() {

        return (
            <>
                {this.renderMenu()}
            </>

        )
    }
}

export default Menu