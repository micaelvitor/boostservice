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
    expiracao: ''
  }


  constructor(props) {
    super(props)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name })
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    if (name == 'expiry') {
      this.expiryDate(value)
    }
  }

  handleSubmitForm = (e) =>{
    console.log(e.target[0].value)
    e.preventDefault()
  }

  expiryDate = (expdate) =>{
    let xpdate = expdate.replace(/\//g, "").substring(0, 2) + 
      (expdate.length > 2 ? '/' : '') + 
      expdate.replace(/\//g, "").substring(2, 4);
    this.state.expiracao = xpdate
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
          <div className="container">
              <div className="row">
                  <div className="form-group col-md-12">
                      <label htmlFor="name">Numero do cartao</label>
                      <input
                      type="text"
                      name="number"
                      placeholder="Numero do cartao"
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      className="form-control"
                      required
                      maxLength={16}
                      />
                  </div>
                  <div className="form-group col-md-12">
                      <label htmlFor="name">Nome do portador</label>
                      <input
                      type="text"
                      name="name"
                      placeholder="Ex: Alan Fernando Camocardi"
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      className="form-control"
                      required
                      />
                  </div>
                  <div className="form-group col-md-6">
                      <label htmlFor="name">Data de validade</label>
                      <input
                      type="text"
                      name="expiry"
                      placeholder="Ex: 04/2030"
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      value={this.state.expiracao}
                      className="form-control"
                      required
                      />
                  </div>
                  <div className="form-group col-md-6">
                      <label htmlFor="name">CVV</label>
                      <input
                      type="text"
                      name="cvc"
                      placeholder="Ex: 999"
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      className="form-control"
                      required
                      maxLength={4}

                      />
                  </div>    
              </div> 
          </div>
        </div>
      </div>
    );
  }
}