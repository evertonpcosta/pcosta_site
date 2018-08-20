import React, { Component } from 'react';
import axios from 'axios';

import about from '../img/about-img.jpg'

class ContatLeads extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        error: null,
        isLoaded: false,
        obrigado: false,
        items: [],
        itensMutation: [],
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const nome = data.get('nome');
        const telefone = data.get('telefone');
        const cep = data.get('cep');
        const email = data.get('email');
        const quantidade_vidas = data.get('quantidade_vidas');
        const tipo = data.get('tipo');
        console.log(tipo);


        const query = `mutation {
            createPessoa(pessoaData:{
                      nome:"${nome}",
                      email:"${email}",
                      telefone:"${telefone}",
                      cep:"${cep}", 
                      quantidadeVidas:"${quantidade_vidas}",
                      idPessoaTipo:"${tipo}"
                    }) {
                pessoa {
                    nome
                }
            }
        }`;



        try {
            const response = axios({
                method: "POST",
                url: "http://api.pcostaplanosdesaude.com.br/exgraphql?query=" + query,

            });
            // Set the data to the state
            this.setState(() => ({
                obrigado: true,
                itensMutation: response.data
            }));

        } catch (error) {
            // If there's an error, set the error to the state
            this.setState(() => ({ error }))
        }

    }

    getAnime = async (query, variables) => {
        try {
            const response = await axios({
                method: "POST",
                url: "http://api.pcostaplanosdesaude.com.br/exgraphql?query=" + query,

            });

            // Set the data to the state
            this.setState(() => ({
                isLoaded: true,
                items: response.data.data.allTipo.edges
            }));

        } catch (error) {
            // If there's an error, set the error to the state
            this.setState(() => ({ error }))
        }
    }

    componentDidMount() {

        // This is the GraphQL query
        const query = `query{allTipo{edges{node{id,nome}}}}`;

        // These variables are optional, leave empty for now
        const variables = {};

        // We call the method here to execute our async function
        this.getAnime(query, variables)

    }


    render() {
        if (this.state.obrigado) {
            return (
                <section className="about-area" id="appoinment">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-end align-items-center">
                            <div className="col-lg-6 col-md-12 about-left no-padding">
                                <img className="img-fluid" src={about} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12 about-right no-padding">
                                <h1>Ola!
                                <br /> Obrigado pelo seu contato, agora aguarde um pouquinho, pois um de nossos consultores entrara em contato.</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        return (
            <section className="about-area" id="appoinment">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-end align-items-center">
                        <div className="col-lg-6 col-md-12 about-left no-padding">
                            <img className="img-fluid" src={about} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 about-right no-padding">
                            <h1>Faça o Seu
						    <br /> Orçamento</h1>
                            <form className="booking-form" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 d-flex flex-column">
                                        <input name="nome" placeholder="Nome" className="form-control mt-20" type="text" required />
                                    </div>
                                    <div className="col-lg-6 d-flex flex-column">
                                        <input name="telefone" placeholder="Telefone" className="form-control mt-20"
                                            type="text" required />
                                    </div>
                                    <div className="col-lg-6 d-flex flex-column">
                                        <input id="cep" name="cep" className="single-in mt-20" type="text"
                                            placeholder="Cep" required />
                                    </div>
                                    <div className="col-lg-12 d-flex flex-column">
                                        <input id="email" name="email" className="single-in mt-20" type="text"
                                            placeholder="E-mail" required />
                                    </div>
                                    <div className="col-lg-6 d-flex flex-column">
                                        <select name="quantidade_vidas" className="single-select mt-20">
                                            <option value="">Qunatidade de Vidas</option>
                                            <option value="1">Um</option>
                                            <option value="2">Dois</option>
                                            <option value="3">Três</option>
                                            <option value="4">Quatro</option>
                                            <option value="5">Cinco ou Mais</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 flex-column">
                                        <select name="tipo" className="single-select mt-20">
                                            <option value="">Tipo</option>
                                            {this.state.items.map(post => {
                                                return <option key={post.node.id} value={post.node.id}>{post.node.nome}</option>
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-lg-12 d-flex justify-content-end send-btn">
                                        <button className="submit-btn primary-btn mt-20 text-uppercase ">Enviar
									        <span className="lnr lnr-arrow-right"></span>
                                        </button>
                                    </div>

                                    <div className="alert-msg"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ContatLeads;