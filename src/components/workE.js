import React,{useState,useEffect} from 'react'
import {NavLink,useParams,useHistory} from 'react-router-dom'

const WorkE = () => {

  //const [getuserdata, setUserdata] = useState([]);
 // console.log(getuserdata);

 const history = useHistory("");


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


    const { id } = useParams("");
    console.log(id);


    const getdata = async () => {

      const res = await fetch(`/getuser1/${id}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setINP(data)
          console.log("get data");

      }
  }

  useEffect(() => {
    getdata();
}, []);

const updateuser = async(e)=>{
  e.preventDefault();

  const {name,  orderID, price, arts, extracharge, total, specials } = inpval;

  const res2 = await fetch(`/updateuser1/${id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name,  orderID, price, arts, extracharge, total, specials
      })
  });

  const data2 = await res2.json();
  console.log(data2);

  if(res2.status === 422 || !data2){
      alert("fill the data");
  }else{
    alert("data added");
    history.push("/workH")
  }

}



  return (
    <div className="container">
        <NavLink to="/workH">home2</NavLink>

        <form className='mt-5'>
            <div className='row'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Customer Name</label>
    <input type="email" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">orderID</label>
    <input type="email" value={inpval.empID} onChange={setdata} name="orderID" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">price</label>
    <input type="text" value={inpval.salary} onChange={setdata} name="price" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">arts</label>
    <input type="number" value={inpval.leaveDays} onChange={setdata} name="arts" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">extracharge</label>
    <input type="text" value={inpval.allowence} onChange={setdata} name="extracharge" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">total</label>
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
  <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
  </div>
</form>

    </div>
  )
}

export default WorkE