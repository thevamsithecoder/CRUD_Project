import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState({
    Name : "",
    Email : "",
    Age : "",
    Mobile : "",
    Work : "",
    Address : "",
    Description : ""
  })

  const setData = (e) => {
    console.log(e.target.value);
    const {name, value} = e.target;
    setInputValue((previousValue)=>{
      return {
        ...previousValue,
          [name] : value
      }
    })
  }

  const addInputData = async(e)=>{
    e.preventDefault();

    const {Name,  Email, Age, Mobile, Work, Address, Description} = inputValue;  

    const res = await fetch("/register",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        Name,  Email, Age, Mobile, Work, Address, Description
      })
    })

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data) {//data is blank
      alert("error");
      console.log("error");
  }
    else {
      alert("Whoa! Data Added Successfully");
      navigate("/")
      console.log("Data Added Successfully");   
  }
  }

  return (
    <div className="container">
      <form className="mt-4">
        <div className="row">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" name="Name" onChange={setData} value={inputValue.Name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12 ">
          <label for="exampleInputPassword1" className="form-label">Email</label>
          <input type="text"  name="Email" onChange={setData} value={inputValue.Email} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">Age</label>
          <input type="number" name="Age" onChange={setData}  value={inputValue.Age} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">Mobile</label>
          <input type="number" name="Mobile" onChange={setData} value={inputValue.Mobile} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">Work</label>
          <input type="text" name="Work" onChange={setData} value={inputValue.Work} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">Address</label>
          <input type="text" name="Address" onChange={setData} value={inputValue.Address} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 col-lg-12 col-md-12 col-12">
          <label for="exampleInputPassword1" className="form-label">Description</label>
          <textarea type="text" name="Description" onChange={setData} value={inputValue.Description} className="form-control" id="exampleInputPassword1"   cols="30" rows="5"></textarea>
        </div>
        <button type="submit" onClick={addInputData} className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Register

//if we don't add name means it can't work you cant type anything