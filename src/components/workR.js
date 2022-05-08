import React, {useState} from  'react'
import {NavLink,useHistory} from 'react-router-dom'



const WorkR = () => {

  const history = useHistory();

    const [inpval, setINP] = useState({
        name: "",
        orderID: "",
        price: "",
        arts: "",
        extracharge: "",
        total: "",
        specials: ""
    })

    

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
      e.preventDefault();

      const { name,  orderID, price, arts, extracharge, total, specials  } = inpval;

      const res = await fetch("/register1", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name,  orderID, price, arts, extracharge, total, specials 
          })
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");
          alert("error");

      } else {
          alert("Order Details Added");
          history.push("/")
          console.log("Order Details Added");

      }
  }


  return (
    <div className="container">
        <NavLink to="/">home</NavLink>

        <form className='mt-5'>
            <div className='row'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Customer Name</label>
    <input type="email" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">OrderID</label>
    <input type="email" value={inpval.empID} onChange={setdata} name="orderID" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" value={inpval.salary} onChange={setdata} name="price" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Arts</label>
    <input type="number" value={inpval.leaveDays} onChange={setdata} name="arts" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">extracharge</label>
    <input type="text" value={inpval.allowence} onChange={setdata} name="extracharge" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Total</label>
    <input type="text" value={inpval.epf} onChange={setdata} name="total" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Specials</label>
    <textarea  name="specials" value={inpval.specials} onChange={setdata} className="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={addinpdata} class="btn btn-warning">Submit</button>
  </div>
</form>

    </div>
  )
}

export default WorkR