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
      invoices: [
        {
          "id" : "100",
          "Vendor" : "Hankook",
          "Amount" : "$200",
          "Invoice" : "1125",
          "Date" : "21/12/2012"
        },

        {
          "id" : "200",
          "Vendor" : "Hankook",
          "Amount" : "$200",
          "Invoice" : "1199",
          "Date" : "20/12/2012",
        },

        {
          "id" : "300",
          "Vendor" : "Hankook",
          "Amount" : "$200",
          "Invoice" : "1825",
          "Date" : "21/10/2012",
        },
        
        {
          "id" : "400",
          "Vendor" : "Hankook",
          "Invoice" : "1855",
          "Amount" : "$250",
          "Date" : "21/10/2012",
        },
      ]
    }
  }

  remove(id){
    console.log(id)
    let updetedInvoices = [...this.state.invoices].filter(i => i.id !== id);
    
    this.setState({invoices : updetedInvoices});
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
        <td><Button className="btn btn-lg btn-success" onClick={()=> this.remove(invoice.id)}><FontAwesomeIcon icon={faThumbsUp} />OK</Button></td>
        <td><Button className="btn btn-lg btn-danger" onClick={()=> this.remove(invoice.id)}><FontAwesomeIcon icon={faThumbsDown} />NOK</Button></td>
        <td><Button className="btn btn-lg btn-info" onClick={()=> this.remove(invoice.id)}><FontAwesomeIcon icon={faMoneyCheckAlt}> /</FontAwesomeIcon>50%</Button></td>
        <td><Button className="btn btn-lg btn-warning" onClick={()=> this.remove(invoice.id)}><FontAwesomeIcon icon={faSearchDollar}> /</FontAwesomeIcon>??</Button></td>
        <td><Button className="btn btn-lg btn-info" onClick={()=> this.remove(invoice.id)}> <FontAwesomeIcon icon={faImage}> /</FontAwesomeIcon>Image</Button></td>
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
                {this.state.invoices.length === 0 ? <td colSpan="9">All caught up!</td> : invoices}
              </tbody>

            </Table>

          </div>
        </div>

    </div>
      );
  }
}
 
export default App;


