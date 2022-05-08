import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const WorkH = () => {
  const [getuserdata, setUsertdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch("/getdata1", {
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


  return (
    <div className="containerB">
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register1" className="btn btn-primary">
            Add EMP
          </NavLink>
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">OrderID</th>
              <th scope="col">Price</th>
              <th scope="col">Arts</th>
              <th scope="col">extracharge</th>
              <th scope="col">total</th>
              <th scope="col">specials</th>
              
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
                    <td>{element.orderID}</td>
                    <td>{element.price}</td>
                    <td>{element.arts}</td>
                    <td>{element.extracharge}</td>
                    <td>{element.total}</td>
                    <td>{element.specials}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`view1/${element._id}`}><button className="btn btn-outline-primary">view</button></NavLink>
                      <NavLink to={`edit1/${element._id}`}><button className="btn btn-outline-warning">update</button></NavLink> 
                      <button className="btn btn-outline-danger" >delete</button>
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

export default WorkH;
