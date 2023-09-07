import React, {useState, useEffect} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";


const Home = () => {
  const [getUserData, setUserData] = useState([]);
  console.log(getUserData);

  const getdata = async(e)=>{

    const res = await fetch("/getdata",{
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
    getdata()  //when ever the page loads useEffect hook called
  },[])


  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method : "DELETE",
      headers : {
        "Content-Type": "application/json"
      }
    });
    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status === 422 || !deletedata){
      console.log("error");
    }else {
      console.log("user deleted");
      getdata();
    }
  }

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <Link to="/register" className="btn btn-primary">Add Data</Link>
        </div>

        <table class="table">
          <thead>
            <tr className="table-info">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              getUserData.map((element,id)=>{
                return(
                  <>
                    <tr>
              <th scope="row">{id+1}</th>
              <td>{element.Name}</td>
              <td>{element.Email}</td>
              <td>{element.Work}</td>
              <td>{element.Mobile}</td>
              <td className="d-flex justify-content-between">
               <Link to={`/view/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon /></button></Link>
               <Link to={`/edit/${element._id}`}><button className="btn btn-warning"><CreateIcon /></button></Link>       
                <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteIcon /></button>     
              </td>
            </tr>
                  </>
                )
              }
            )}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;