import React, { Component } from 'react'
import DISHES from './shared/dishes';
import { Media,Card,CardImg,CardImgOverlay,CardBody,CardText, CardTitle } from 'reactstrap'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null
        }
}
 DiscriptionView(data){
    this.setState({
    selectedDish:data                
    })
}
RenderDish(dish){
  if(this.state.selectedDish!=null){
   return( <div className="col-12 col-md-5 m-1">
   <Card  >

         <CardImg width="100%" src={dish.image} alt={dish.name} />

     <CardBody body className="ml-5">
       <CardTitle>{dish.name}</CardTitle>
       <p>{dish.description}</p>
     </CardBody>
   </Card>
 </div>)
  }
  else{
    return(
      <div>

      </div>
    )
  }
}
    render() {
   
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>{this.DiscriptionView(dish)}} >
            
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
          
                  <CardBody body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                  
                  </CardBody>
                </Card>
            
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              
                  {menu}
              
            </div>
            <div className="row">
            {this.RenderDish(this.state.selectedDish)}  
            </div>
          </div>
        );
    }
}

export default Menu;