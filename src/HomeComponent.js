import React, { Component } from 'react'
function Home(props){
return (
    <div className="container">
    <div className='row align-items-center'>
        <div className='col-12 col-md m-1'>
            <div  >
        {props.leaders}
            </div>
        </div>
        <div className='col-12 col-md m-1'>
            <div >
            {props.promotions}
            </div>
        </div>
    </div>
    </div>
);
}
export default Home ; 