import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-6">
                        <div className="container">
                            <h1 className="text-center">New Ad channel</h1>
                            <p>Please authorize to following ad channels.</p>
                            <div className="buttons">
                                <div className="d-block ">
                                    <button className=" btn btn-lg rounded-0">
                                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>{' '}
                                        Facebook
                                    </button>
                                </div>

                                <div className="d-block">
                                    <button className=" btn btn-lg rounded-0">
                                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>{' '}
                                        LinkedIn
                                    </button>
                                </div>

                                <div className="d-block">
                                    <button className="btn btn-lg rounded-0">
                                        Google Analytics
                                    </button>
                                </div>

                                <div className="d-block">
                                    <button className="btn btn-lg rounded-0">
                                        Google Adwords
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 border-left">
                        <div className="container">
                            <h1 className="text-center">Authorized Ad channels</h1>
                            <div className="buttons">
                                <div className="d-block right-side">
                                    <button className="btn btn-lg rounded-0">
                                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>{' '}
                                        Facebook
                                    </button>{' '}
                                    <span className="cross-icon-holder">
                                        <FontAwesomeIcon size="2x" className="cross-icon"  icon={faTimes}></FontAwesomeIcon>
                                    </span>
                                </div>

                                <div className="d-block right-side">
                                    <button className=" btn btn-lg rounded-0">
                                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>{' '}
                                        LinkedIn
                                    </button>{' '}
                                    <span className="cross-icon-holder">
                                        <FontAwesomeIcon size="2x" className="cross-icon" icon={faTimes}></FontAwesomeIcon>
                                    </span>
                                </div>

                                <div className="d-block right-side">
                                    <button className="btn btn-lg rounded-0">
                                        Google Analytics
                                    </button>{' '}
                                    <span className="cross-icon-holder">
                                        <FontAwesomeIcon size="2x" className="cross-icon" icon={faTimes}></FontAwesomeIcon>
                                    </span>
                                </div>

                                <div className="d-block right-side">
                                    <button className="btn btn-lg rounded-0">
                                        Google Adwords
                                    </button>{' '}
                                    <span className="cross-icon-holder">
                                        <FontAwesomeIcon size="2x" className="cross-icon" icon={faTimes}></FontAwesomeIcon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;