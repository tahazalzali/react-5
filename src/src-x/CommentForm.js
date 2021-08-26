import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Row } from 'reactstrap';
import { LocalForm,Errors,Control} from 'react-redux-form';

const required = (val) => val && val.length;
const maxlength = (len) => val => !(val) || (val.length <= len);
const minlength = (len) => val => val && (val.length >= len);
// const required = val=>val &&val.length 
// const maxlengh =len=>val => !val || (val.length<=len);
// const minlength = len => val => val && (val.length >=len );
// const isNumber= val=> !isNaN(Number(val));

class CommentForm extends Component {
  constructor(){
   super();
   this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(values){
    alert ('Your Comment info is '+JSON.stringify(values))
  }
render(){

  return (
    <LocalForm onSubmit={ values=>{
      this.handleSubmit(values)
    }}>
  
  <Row>

      <FormGroup>
        <Label className='col-3' for="exampleSelect">Rating :</Label>
        <Control.select 
        validators={{
          required
        }}
 default className='col-8 m-1' model=".rating" name="rating" id="exampleSelect">
          <option default >Please select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Control.select>
   <Errors model=".rating"
     className='text-danger'
     show="touched"
    messages={{
      required: 'Required'
    }} />
        
      </FormGroup></Row>
      <FormGroup>
        <Label  className='col-3' for="name">Your name : </Label>
        <Control.text 
                validators={{
                  required,
          minlength:minlength(3),
          maxlength:maxlength(15)
        }}
         className='col-8 m-1' model=".name" name="name" id="name" placeholder="taha zalzali" />
          <Errors  
         className='text-danger'
         model='.name'
         show="touched"
         messages={{
          
           required:'Required, ',
           minlength:'Name must be more than 2 characters'
            }}      />
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Control model=".select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Control>
      </FormGroup> */}
      <FormGroup>
        <Label  className='col-3' s for="exampleText">Comment :</Label>
        <Control.textarea className='m-1 w-100 col-8'rows='4'
                        validators={{
                  required,
          minlength:minlength(3),
          maxlength:maxlength(15)
        }}
         model=".comment" name="text" id="exampleText" />
     
        <Errors  
         className='text-danger'
         model='.comment'
         show="touched"
         messages={{
          
           required:'Required, ',
           minlength:'Comment must be more than 2 characters',
           maxlength:'Comment must be less than 15 characters '
            }}      />
      </FormGroup>

    

      <Button type='submit'>Submit</Button>
    </LocalForm>
  );
}
}

export default CommentForm;