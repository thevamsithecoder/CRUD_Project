import React,{ useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";



const Edit = () => {

  const navigate = useNavigate("");

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

  const {id} = useParams("");
  console.log(id);

  const getdata = async()=>{

    const res = await fetch(`/getuser/${id}`,{
      method : "GET",
      headers : {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data) {//data is blank
      console.log("error");
  }
    else {
      setInputValue(data);
      console.log("Get data");
  }
  }

  useEffect(()=>{
    getdata();
  },[])
  const updateuser = async(e)=>{ //this name and in subit button onlick name should be same
    e.preventDefault();
    const {Name,  Email, Age, Mobile, Work, Address, Description} = inputValue;
    const res2 = await fetch(`/updateuser/${id}`, {
      method :"PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        Name,  Email, Age, Mobile, Work, Address, Description
      })
    });
    const data2 = await res2.json();
    console.log(data2);

    if(res2.status === 422 || !data2) {
      alert("Fill the data")
    }else {
      alert("Data Added Successfully")
      navigate("/")
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
          <textarea type="text" name="Description" onChange={setData} value={inputValue.Description} className="form-control" id="101" cols="30" rows="5"></textarea>
        </div>
        <button type="submit" onClick={updateuser} className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;