import {LEADERS} from './shared/leaders'
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import Media1 from './Media'
class MediaRender extends Component{


    render(){
        const Medias = this.props.leaders.map(
            leader =>{
                return(
                    <Media1 name={leader.name} image={leader.image} key={leader.id}
                    description={leader.description} designation={leader.designation}/>
                )
            }
        );
    return (
        <>
        {Medias}
        </>
    )
}
}
const mapStateToProps= state =>{
    return{
        leaders:state.leaders
    }
}
export default (connect(mapStateToProps)(MediaRender));