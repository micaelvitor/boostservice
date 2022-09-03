import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm" className='row'>
        <div className='col-md-6'>
            <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
            />
        </div>
        <div className='col-md-6'>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label for="name">Numero do cartao</label>
                            <input
                            type="number"
                            name="number"
                            placeholder="Numero do cartao"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label for="name">Nome do portador</label>
                            <input
                            type="text"
                            name="name"
                            placeholder="Ex: Alan Fernando Camocardi"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="name">Data de validade</label>
                            <input
                            type="tel"
                            name="expiry"
                            placeholder="Ex: 04/2030"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="name">CVV</label>
                            <input
                            type="tel"
                            name="cvc"
                            placeholder="Ex: 999"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            className="form-control"
                            />
                        </div>    
                    </div> 
                </div>
            </form>
        </div>
      </div>
    );
  }
}