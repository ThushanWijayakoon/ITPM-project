import React,{useState,useEffect} from 'react'
import {NavLink,useParams,useHistory} from 'react-router-dom'

const Edit = () => {

  //const [getuserdata, setUserdata] = useState([]);
 // console.log(getuserdata);

 const history = useHistory("");


    const [inpval, setINP] = useState({
        name: "",
        email: "",
        arts: "",
        mobile: "",
        price: "",
        add: "",
        paymentmethod: ""
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

      const res = await fetch(`/getuser/${id}`, {
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

  const {name,email,price,add,mobile,paymentmethod,arts} = inpval;

  const res2 = await fetch(`/updateuser/${id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
          name,email,price,add,mobile,paymentmethod,arts
      })
  });

  const data2 = await res2.json();
  console.log(data2);

  if(res2.status === 422 || !data2){
      alert("fill the data");
  }else{
    alert("data added");
    history.push("/")
  }

}



  return (
    <div className="container">
        <NavLink to="/">home2</NavLink>

        <form className='mt-5'>
            <div className='row'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Customer Name</label>
    <input type="email" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Arts</label>
    <input type="text" value={inpval.age} onChange={setdata} name="arts" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone number</label>
    <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" value={inpval.work} onChange={setdata} name="price" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Adress</label>
    <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Paymentmethod</label>
    <textarea  name="paymentmethod" value={inpval.desc} onChange={setdata} className="form-control" id="exampleInputPassword1" />
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

export default Edit