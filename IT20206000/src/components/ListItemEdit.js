import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

// To use routing functionalities
import { Link } from 'react-router-dom';
import './ListItem.css';
import ItemService from './Services';


class ListItemEdit extends Component {

    constructor(props) {
    super(props);
    this.itemService = new ItemService();
    this.state = {
        items: []
    }
    this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount = () => {
    this.getItemList();
    }

    // To get all the items
    getItemList() {
        axios.get('http://localhost:4000/items')
        .then((response) => {
            console.log(response);
            this.setState({
                items: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    // To delete any item
    deleteItem(id) {
        this.itemService.deleteItem(id);
        this.getItemList();
    }

    render() {
    const { items } = this.state;
    
    return (
        <center>
        <div className="box2">
        <br/>
        <center><h3>Item Details</h3></center>
        <br/>
        <Table striped bordered hover>
        <thead>
        <tr>
            <th><center>ID</center></th>
            <th><center>Item No</center></th>
            <th><center>Item Name</center></th>
            <th><center>Item Price</center></th>
            <th><center>Action</center></th>
        </tr>
        </thead>
        <tbody>
        {
        items && items.map((item, i) => {
        return (
            <tr key={i}>
                <td><center>{i+1}</center></td>
                <td><center>{item.itemNo}</center></td>
                <td><center>{item.itemName}</center></td>
                <td><center>{item.itemPrice}</center></td>
                <td><center>
                <Link to={"edititem/" + item._id} className="btn btn-primary">Edit</Link>     |
                <Button onClick={() => this.deleteItem(item._id)} bsStyle="danger" >Delete</Button></center>
                </td>
            </tr>
        )
        })
        }
        </tbody>
        </Table>
        <br/>
        </div>
        </center>
    );
    } 
}

export default ListItemEdit;