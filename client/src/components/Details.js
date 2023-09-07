import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import { useParams } from 'react-router-dom';



const Details = () => {

  const [getUserData, setUserData] = useState([]);
  console.log(getUserData);
  
  const {id} = useParams("");
  console.log(id);

  

  const getdata = async()=>{
    const res = await fetch(`/getuser/${id}`,{
      method : "GET",
      headers : {
        "Content-Type" : "application/json"
      },
    })

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data) {//data is blank
      console.log("error");
  }
    else {
      setUserData(data);
      console.log("Get data");
  }
  }
  useEffect(()=>{
    getdata();
  })


  return (
    <div className='container mt-3'>
      <h1 style={{fontWeight: 300}}>Hi! {getUserData.Name}</h1>
   
      <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <div className="row">
        <div className="left_view col-lg-6 col-md-6 col-12">
        <h3 className="mt-3">Name : <span>{getUserData.Name}</span></h3>
        <h3 className="mt-3">Age : <span>{getUserData.Age}</span></h3>
        <p className="mt-3"><EmailIcon/>Email : <span>{getUserData.Email}</span></p>
        <p className="mt-3"><WorkIcon />Occupation : <span>{getUserData.Work}</span></p>
        </div>
        <div className="right_view col-lg-6 col-md-6 col-12">
            <div className="add-btn pr-9">     
            </div>
            <p className="mt-5"><CallIcon />Mobile : <span>{getUserData.Mobile}</span></p>
            <p className="mt-3 "><PlaceIcon />Place : <span>{getUserData.Address}</span></p>  
            <p className="mt-3 ">Description : <span>{getUserData.Description}</span></p>  
        </div>
        </div>
      </CardContent>
      </Card>
    </div>
  )
}

export default Details