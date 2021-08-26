import React, { Component } from 'react'
import{Switch,Route, Redirect} from 'react-router-dom'
class RouterTest extends Component{
 render(){
     return
     (
         <>
         <Switch>

        
             
              <Route path='./menu' component={CardDish}></Route>
             <Route path='/home'></Route>
             <Redirect to='/home'></Redirect>
         </Switch>

         </>
     )
 }   
}
export default RouterTest;