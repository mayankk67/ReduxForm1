import React from 'react';
import {connect} from 'react-redux';
import SyncValidationForm from "../Form/signup";
import LoginForm from "../Form/login";

class Homepage extends React.Component{
    render(){
        return(
            <div>
                <SyncValidationForm onSubmit={this.props.addition}/>
                <LoginForm onSubmit={this.props.addition} />
            </div>
        )
    }
}

var matchStatetoProps = state =>{
    return {root:state.root}
}

var matchDispatchtoProps = dispatch =>{
    return{addition:(values)=>dispatch({type:'ADD',payload:values})}
}
 
export default connect(matchStatetoProps,matchDispatchtoProps)(Homepage);