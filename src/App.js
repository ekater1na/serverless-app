import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faImage, faMoneyCheckAlt, faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false ,
      invoices: [ ]
    }
  }

  remove(id){
    let updateedInvoices = [...this.state.invoices].filter (i => i.id !== id)
    this.setState({invoices : updateedInvoices});
  }

  async componentDidMount(){
    const response = await fetch('https://w8g7ku86ol.execute-api.eu-west-1.amazonaws.com/Dev');
    const body = await response.json();
    this.setState({invoices : body, isLoading: false})
  }

  render() { 
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;
            
    if (isLoading)
      return (<div>Loading...</div>);
    
    let invoices = allInvoices.map(invoice => 
      <tr key={invoice.id}>
        <td>{invoice.Vendor}</td>
        <td>{invoice.Invoice}</td>
        <td>{invoice.Amount}</td>
        <td>{invoice.Date}</td>
        <td><Button className="btn btn-lg btn-success" onClick={()=> this.remove(invoice.id)}><FontAwesomeIcon icon={faThumbsUp} /> OK </Button></td>
        <td><Button className="btn btn-lg btn-danger" onClick={()=> this.remove(invoice.id)}><FontAwesomeIcon icon={faThumbsDown} /> NOK </Button></td>
        <td><Button className="btn btn-lg btn-info" onClick={()=> this.remove(invoice.id)}><FontAwesomeIcon icon={faMoneyCheckAlt}> /</FontAwesomeIcon> 50% </Button></td>
        <td><Button className="btn btn-lg btn-warning" onClick={()=> this.remove(invoice.id)}><FontAwesomeIcon icon={faSearchDollar}> /</FontAwesomeIcon> ?? </Button></td>
        <td><Button className="btn btn-lg btn-info" onClick={()=> this.remove(invoice.id)}> <FontAwesomeIcon icon={faImage}> /</FontAwesomeIcon> Image </Button></td>
      </tr>
      )

    return(
      <div className="container border border-secondary rounded center">

        <div className="row">
          <div className="col-12">
            <h4>Pending Invoices - The Test Company</h4>
          </div>
        </div> 

        <div className="row">
          <div className=".col-xs-12 center text-center">
            <Table dark responsive striped bordered hover>

              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Amount</th>
                  <th>Invoice #</th>
                  <th>Date</th>
                  <th colSpan="4">Actions</th>
                  <th>Image</th>
                </tr>
              </thead>

              <tbody>
                {this.state.invoices.length === 0 ? <td colSpan="9"> All caught up! </td> : invoices}
              </tbody>

            </Table>

          </div>
        </div>

    </div>
      );
  }
}
 
export default App;


