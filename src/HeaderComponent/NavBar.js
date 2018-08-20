import React, { Component } from 'react';
import logo from '../img/logo.png';

class NavBar extends Component {
    state = {
        open: false,
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return (
            <div>
                <header className="default-header">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="header-top d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <a href="#home">
                                        <img height="50" src={logo} alt="" />
                                    </a>
                                </div>
                                <div className="main-menubar d-flex align-items-center">

                                    <nav className={this.state.open === false ? "hide" : ""}>

                                        <a href="#home">Home</a>
                                        <a href="#service">Categorias</a>
                                        <a href="#appoinment">Orçamento</a>
                                        <a href="#consultant">Consultants</a>
                                    </nav>
                                    <div onClick={this.toggle} className="menu-bar" ><span className={this.state.open === false ? "lnr lnr-menu" : "lnr lnr-cross"}></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default NavBar;
