import React, { Component } from 'react';
import axios from 'axios';
import background from "../Pages/Supply.jpg";
import './AddItem.css';

class EditItem extends Component {
    constructor(props) {
    super(props);
    this.state = {
        itemNo: '',
        itemName: '',
        itemPrice: ''
    }
  }

    componentDidMount = () => {
        this.getItemById();
    }

// To get item based on ID
    getItemById() {
    axios.get('http://localhost:4000/items/editItem/' + this.props.match.params.id)
    .then((response) => {
        this.setState({
            itemNo: response.data.itemNo,
            itemName: response.data.itemName,
            itemPrice: response.data.itemPrice,
        });
    })
    .catch((error) => {
        console.log(error);
    })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

// To update the record on submit
    handleSubmit = (event) => {
        event.preventDefault();
        const { itemNo, itemName, itemPrice } = this.state;
        axios.post('http://localhost:4000/items/updateItem/' + this.props.match.params.id, {
            itemNo: itemNo,
            itemName: itemName,
            itemPrice: itemPrice
        })
        .then((response) => {
            console.log(response);
            alert('Item Details Updated Successfully..');
            this.props.history.push('/EditDetails');
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
            <center><h3>Update Item Details</h3></center>
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
                <input type="submit" value="Update Item" className="btn btn-primary" />
            </form>
            </center>
            </div>
            <br/><br/>
        </center>
        </div>
        );
    }
}

export default EditItem;