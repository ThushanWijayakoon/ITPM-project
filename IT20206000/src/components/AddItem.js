import React, { Component } from 'react';
import axios from 'axios';
import background from "../Pages/Supply.jpg";
import './AddItem.css';


class AddEmployee extends Component {
    constructor(props) {
    super(props);
    this.state = {
        itemNo: '',
        itemName: '',
        itemPrice: ''
    }
}

// When value changes of the fields
handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
}

// To add new employee when user submits the form
handleSubmit = (event) => {
    event.preventDefault();
    const { itemNo, itemName, itemPrice } = this.state;
    axios.post('http://localhost:4000/items/addItem', {
        itemNo: itemNo,
        itemName: itemName,
        itemPrice: itemPrice
    })
    .then((response) => {
        console.log(response);
        alert('Item Details Added Successfully..');
        this.props.history.push('/');
    })
    .catch((error) => {
        console.log(error);
        alert('Something Went Wrong..');
    });
}

render() {
    return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <center>
    <br/><br/>
        <div className="Box1">
        <br/>
        <center><h3>Add Item Details</h3></center>
        <br/><br/>
        <center>
        <form onSubmit={this.handleSubmit}>
            <label><h6> Item No </h6>
            <input name="itemNo" type="text" value={this.state.itemNo}
            onChange={this.handleChange} className="form-control"
            />
            </label>
            <br /><br />
            <label><h6> Item Name </h6>
            <input name="itemName" type="text" value={this.state.itemName}
            onChange={this.handleChange} className="form-control"
            />
            </label>
            <br /><br />
            <label><h6> Item Price </h6>
            <input name="itemPrice" type="number" value={this.state.itemPrice}
            onChange={this.handleChange} className="form-control"
            />
            </label>
            <br /><br />
            <input type="submit" value="Add Item" className="btn btn-primary"  />
        </form>
        </center>
        </div>
        <br/><br/>
    </center>
    </div>
    );
    }
}

export default AddEmployee;