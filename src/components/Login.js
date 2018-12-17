import React, {Component} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
    state = {
        email: '',
        password: '',
        passwordShow: false
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    toggleType = () =>{
        this.setState({passwordShow: !this.state.passwordShow})
        console.log('toggle type')
    }

    render(){
        return (
            <div className="forms">
                <h2 className="text-center">Login Form</h2>
                <form>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control form-control-lg" name="email" id="email" value={this.state.email} onChange={this.handleChange}  />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type={this.state.passwordShow ? 'password' : 'text'} className="form-control form-control-lg" name="password" id="password" value={this.state.password} onChange={this.handleChange}  />
                            <FontAwesomeIcon className="eye-icon" onClick={this.toggleType} icon={this.state.passwordShow ? faEye : faEyeSlash} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login