import React, { Component } from 'react';
class FeatureArea extends Component {
    render() {
        return (

            <section className="feature-area section-gap" id="service">

                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 pb-80 header-text">
                            <h1>CATEGORIAS DE PLANOS DE SAÚDE</h1>
                            <p>
                                Não sabe que tipo de plano se adequa melhor a você? Nós ajudamos!
					        </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-feature d-flex flex-row pb-30">
                                <div className="icon">
                                    <span className="lnr lnr-user"></span>
                                </div>
                                <div className="desc">
                                    <h4 className="text-uppercase">Plano de Saúde Individual</h4>
                                    <p>
                                        inappropriate behavior is often laughed off as “boys will be boys,”
								    <br /> women face higher conduct women face higher conduct.
							        </p>
                                </div>
                            </div>
                            <br />
                            <div className="single-feature d-flex flex-row pb-30">
                                <div className="icon">
                                    <span className="lnr lnr-users"></span>
                                </div>
                                <div className="desc">
                                    <h4 className="text-uppercase">Plano de Saúde Familiar</h4>
                                    <p>
                                        inappropriate behavior is often laughed off as “boys will be boys,”
								        <br /> women face higher conduct women face higher conduct.
							        </p>
                                </div>
                            </div>
                            <br />
                            <div className="single-feature d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-shirt"></span>
                                </div>
                                <div className="desc">
                                    <h4 className="text-uppercase">Plano de Saúde Para Crianças</h4>
                                    <p>
                                        inappropriate behavior is often laughed off as “boys will be boys,”
								        <br /> women face higher conduct women face higher conduct.
							        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-feature d-flex flex-row pb-30">
                                <div className="icon">
                                    <span className="lnr lnr-chart-bars"></span>
                                </div>
                                <div className="desc">
                                    <h4 className="text-uppercase">Plano de Saúde para Empresas</h4>
                                    <p>
                                        inappropriate behavior is often laughed off as “boys will be boys,”
								        <br /> women face higher conduct women face higher conduct.
							        </p>
                                </div>
                            </div>
                            <br />
                            <div className="single-feature d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-mustache"></span>
                                </div>
                                <div className="desc">
                                    <h4 className="text-uppercase">Plano de Saúde para Idosos</h4>
                                    <p>
                                        inappropriate behavior is often laughed off as “boys will be boys,”
								    <br /> women face higher conduct women face higher conduct.
							        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FeatureArea;