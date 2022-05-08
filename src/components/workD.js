import React, { useEffect, useState }  from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink, useParams, useHistory} from 'react-router-dom';



const WorkD = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const history = useHistory();

    


    const getdata = async () => {

        const res = await fetch(`http://localhost:8003/getuser1/${id}`, {
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
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

   


  return (
    <div className="container mt-3">
    <h1 style={{ fontWeight: 400 }}>Detials of Sajith</h1>

    <Card sx={{ maxWidth: 600 }}>
        <CardContent>
        <div className='add_btn'>
                <NavLink to={`/edit1/${getuserdata._id}`}><button className='btn btn-primary mx-2'>update</button></NavLink>
                <button className='btn btn-danger'>delete</button>
                </div>
            <div className="row">
                <div className="left_view col-lg-6 col-md-6 col-12">
                    <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                    <h3 className="mt-3">Name: <span >{getuserdata.name}</span></h3>
                    <h3 className="mt-3">OrderID: <span >{getuserdata.orderID}</span></h3>
                    <h3 className="mt-3">price: <span >{getuserdata.price}</span></h3>
                    <p className="mt-3">arts: <span>{getuserdata.arts}</span></p>
                    <p className="mt-3">extracharge: <span>{getuserdata.extracharge}</span></p>
                </div>
                <div className="right_view  col-lg-6 col-md-6 col-12">
               


                    <p className="mt-5">Total: <span>{getuserdata.total}</span></p>
                    <p className="mt-3">specials: <span>{getuserdata.specials}</span></p>
                    
                </div>
            </div>

        </CardContent>
    </Card>
</div>
  )
}

export default WorkD