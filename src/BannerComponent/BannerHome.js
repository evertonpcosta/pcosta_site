import React, { Component } from 'react';
import header from '../img/header.png'

class BannerHome extends Component {
    render() {
        return (
            <section className="banner-area relative" id="home">
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-center">
                        <div className="banner-content col-lg-6 col-md-12">
                            <h1 className="text-uppercase">
                                PCosta
						            <br /> Planos de Saúde
					            </h1>
                            <p>
                                Nossa
					            </p>
                        </div>
                        <div className="img-banner col-lg-6 align-self-end img-right">
                            <img className="img-fluid" src={header} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BannerHome;