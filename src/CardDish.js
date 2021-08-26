
import React, { Component,useState } from 'react'
import DISHES from './shared/dishes';
import {Switch ,Route ,Redirect} from 'react-router-dom'
import Home from './HomeComponent';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CommentForm from './src-x/CommentForm';
import Switches from './Swithces';
import { LEADERS } from './shared/leaders';
import { PROMOTIONS } from './shared/promotions';
import {Link} from 'react-router-dom';

import { addComment } from './redux/ActionCreator';
const Comment = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  const mapDispatchToProps= dispatch=>({
      addComment:(dishId, rating ,author ,comment )=>dispatch(addComment(dishId, rating ,author ,comment ))
  })
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Submit Comment </ModalHeader>
          <ModalBody>
          <CommentForm/>
          </ModalBody>
          <ModalFooter>
          
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  


class CardDish extends Component {
    constructor() {
        super();
        this.state = {
            dishes: DISHES,
            selectedDish: null,
           promotions:PROMOTIONS,
            leaders:LEADERS
        }
        this.CardInfo = this.CardInfo.bind(this);
        this.CardRender = this.CardRender.bind(this);
    }
    CardInfo(dish) {
        this.setState({ selectedDish: dish })
    }
    CardRender(dish) {
        if (this.state.selectedDish != null) {
            return (
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' >
                        <div className='card-header'>
                            {dish.name}
                            <div className='bi-card-image'><img src={dish.image} alt={dish.name} /></div>
                        </div>
                        <div className="card-body">
                            <div >{dish.description}</div>
                            <div>{dish.label}</div>
                            <div>{dish.comments[0].name}</div>
                            <div> <Comment buttonLabel='Submit Comment'/></div>
                        </div>
                    </div>
                </div>
            )

        }


        else {
            return (
                <div>

                </div>
            )
        }
    }
    componentDidMount(){
        console.log('invoked component did mount ')
    }
    componentDidUpdate(){
        console.log('ivoked component Did Update')
    }
    CommentsRender(dish) {
        if (this.state.selectedDish != null) {



            return (<div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card' key={dish.id}>
                    <div className='card-header'>
                        <h2>Comments</h2>
                        <div className='card-body'>

                            <div>-{dish.comments[0].name}</div>
                            <div >{dish.comments[0].comment}</div>
                            {/* <div>{new Intl.DateTimeFormat('en,Us',{year:'numeric',month:'short',day='2-digit'.format( new Date(Date.parse (dish.comments[0].date)))})} </div> */}
                        </div>
                    </div>
                </div>
            </div>);
        }

        else {
            return (<div></div>)
        }
    }
    render() {


        const ren = this.state.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' onClick={() => { this.CardInfo(dish); this.CardRender(dish) }}>
                        <div className='card-header'>
                            {dish.name}
                            <div className='bi-card-image'><img src={dish.image} alt={dish.name} /></div>
                        </div>
                        <div className="card-body">

                            <div>{dish.label}</div>
                        </div>
                    </div>
                </div>
            )
        });
        const Homepage= ()=>{
            return( <Home/>
            //  leaders={this.state.leaders.filter(leader =>{leader.featured})[0]} 
            // promotions ={this.state.promotions.filter(promote=>{promote.featured})[0]}/>
             );
        }
        return (
            <div className='card-group'>
                {ren}
                <div className='row'>
                  {Homepage}
                     {this.CardRender(this.state.selectedDish)}

                    {this.CommentsRender(this.state.selectedDish)}
              
                </div>

            </div>

        );
    }
}
export default CardDish;