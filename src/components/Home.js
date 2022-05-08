import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
  const [getuserdata, setUsertdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUsertdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {

    const res2 = await fetch(`/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("Emplployee deleted");
      
        getdata();
    }

}



  return (
    <div className="containerA">
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-outline-primary">
            Add EMP
          </NavLink>
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Customername</th>
              <th scope="col">email</th>
              <th scope="col">Arts</th>
              <th scope="col">Mobile</th>
              <th scope="col">Price</th>
              <th scope="col">Address</th>
              <th scope="col">Paymentmethod</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((element, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.arts}</td>
                    <td>{element.mobile}</td>
                    <td>{element.price}</td>
                    <td>{element.add}</td>
                    <td>{element.paymentmethod}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`view/${element._id}`}><button className="btn btn-outline-primary">view</button></NavLink>
                      <NavLink to={`edit/${element._id}`}><button className="btn btn-outline-warning">update</button></NavLink> 
                      <button className="btn btn-outline-danger" onClick={() => deleteuser(element._id)}>delete</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Home;
