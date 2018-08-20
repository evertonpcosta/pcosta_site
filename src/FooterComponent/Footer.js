import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer className="footer-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6  col-md-12">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">Contato</h6>
                                <h3>Tel: 11 94707-0537</h3>
                                <h3>E-mail: pcostaplanosdesaude@gmail.com</h3>
                            </div>
                        </div>
                        {/* <div className="col-lg-6  col-md-12">
                            <div className="single-footer-widget newsletter">
                                <h6>Newsletter</h6>
                                <p>You can trust us. we only send promo offers, not a single spam.</p>
                                <div id="mc_embed_signup">
                                    <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                        method="get" className="form-inline">

                                        <div className="form-group row" style="width: 100%">
                                            <div className="col-lg-8 col-md-12">
                                                <input name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
                                                    required="" type="email" />
                                                <div style="position: absolute; left: -5000px;">
                                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-12">
                                                <button className="nw-btn primary-btn">Subscribe
											<span className="lnr lnr-arrow-right"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="info"></div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="row footer-bottom d-flex justify-content-between">
                        <p className="col-lg-8 col-sm-12 footer-text m-0">
                            Copyright &copy;
					<script>document.write(new Date().getFullYear());</script>PCosta Planos de Saúde,
					<i className="fa fa-heart-o" aria-hidden="true"></i> Todos direitos reservados.
                        </p>
                        {/* <div className="col-lg-4 col-sm-12 footer-social">
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-dribbble"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-behance"></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;