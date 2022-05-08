import axios from 'axios';
 
class ItemService {

deleteItem(id) {
axios.get('http://localhost:4000/items/deleteItem/' + id)
.then(() => {
    alert('Item Deleted Successfully..');
    console.log('Item Deleted !!!');
    
})
.catch((error) => {
    alert('Something Went Wrong..');
    console.log(error);
    
})
}
}

export default ItemService;