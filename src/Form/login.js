import React from 'react';
import {Field,reduxForm} from 'redux-form';

const validate = values =>{
    const errors={};
    if(!values.username){
        errors.username="Please Enter Username";
    }else if(values.username.length<5){
        errors.username='Please enter atlease 5 characters';
    }
    if(!values.password){
        errors.password='Please enter password'
    }
    return errors;
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>))}
      </div>
    </div>
  )

  const LoginForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" type="email" component={renderField} label="Email"/>
        <Field name="password" type="password" component={renderField} label="Password"/>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    )
  }
  
  export default reduxForm ({
    form: 'login',  
    validate     
  })(LoginForm)