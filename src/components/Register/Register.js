import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (evt) => {
        this.setState({name: evt.target.value})
    }

    onEmailChange = (evt) => {
        this.setState({email: evt.target.value})
    }

    onPasswordChange = (evt) => {
        this.setState({password: evt.target.value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:5555/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Регистрация</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Имя</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name" 
                            onChange={this.onNameChange} 
                            id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email" 
                            onChange={this.onEmailChange} 
                            id="email" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">пароль</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"
                            onChange={this.onPasswordChange} 
                            id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={this.onSubmitRegister}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"
                            value="Регистрация" />
                    </div>
                </div>
            </main>
        </article>
    );        
    }
}

export default Register;
