import React from 'react';
// import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {

	return (
		<div className="container" style={{'backgroundColor': 'lightgreen'}}>
			<h1>Sign In</h1>
			<Link to = "/signup" >Go to sign up</Link>
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' className="btn btn-default" name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
		</div>
	);

}

export default SignIn;