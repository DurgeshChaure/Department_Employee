import React, { useEffect ,Fragment} from 'react';
import {ToastContainer, toast } from "react-toastify";
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, FormGroup, Input,Button ,Form, ModalHeader} from "reactstrap";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

function DepartmentList()
{
   const [department,setDepartment] = useState([]);
   const [oneDepartment,setOneDepartment] = useState({});
   const[showAdd,setShowAdd] = useState(false);
   const[showUpdate,setShowUpdate] = useState(false);
   useEffect(()=>{getDataFromServer();},[]);
   const [newDepartment, setNewDepartment] = useState({ deptName: "", status: false });
   const handleShowAdd = () => setShowAdd(true);
   const handleCloseAdd = () => setShowAdd(false);
   const handleShowUpdate = () =>setShowUpdate(true);
   const handleCloseUpdate = () =>setShowUpdate(false);
//Update One Employee in server

const updateDataFromServer = () =>
{
   axios.put(`https://localhost:7198/api/Department/${oneDepartment.deptId}`,oneDepartment).then((result) => {
         console.log(result.data);
      }).catch((err) => {
         console.log(err);
      });
}
   //Get data by Id From Server

   const getDataByIdFromServer = (id) =>
   {
      axios.get(`https://localhost:7198/api/Department/${id}`).then((result) => {
         setOneDepartment(result.data);
            console.log(result.data);
         }).catch((err) => {
            console.log(err);
         });
   }
//Delete the data from server

const deleteDataFromServer = (id) =>
{
   axios.delete(`https://localhost:7198/api/Department/${id}`).then((result)=>
   { getDataFromServer();
     
   }
   ).catch((err)=>{
      console.log("Something went wrong ");
   })

}

   //Posting the data in server 
   const postDataToServer = () =>{
      axios.post("https://localhost:7198/api/Department",newDepartment).then((result)=>
      {  
         console.log("data added succefully");
      }
      ).catch((err)=>{
         console.log(err);
         console.log("somthing went wrong");
      });
   }
   //Fetching data from server
   const getDataFromServer = () =>
   {
      axios.get("https://localhost:7198/api/Department").then((result) => {
      setDepartment(result.data);
         console.log(result.data);
      }).catch((err) => {
         console.log(err);
      });
   }
     // Function to render status based on boolean value
  const renderStatus = (status) => {
   return status ? "Active" : "Inactive";
 }

 const handleUpdate = (id) =>
 {
   getDataByIdFromServer(id);
   handleShowUpdate();
 }

   return(
      <Fragment>
          <ToastContainer />
      <button type="button" className="btn btn-warning right-corner-button"  style={{ position: "absolute",  top: "0",right: "0", marginRight: "50px" ,  marginTop: "10px" }} onClick={()=>{handleShowAdd()}} >Add</button>
   
      <br></br>
      <br></br>
      <Table>
         <thead>
            <tr>
               <th>Department Id</th>
               <th>Department Name</th>
               <th>Status</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody>
         {department && department.length > 0 ?(
            department.map((item,index)=>{ 
               return(
                 <tr key={index}>
                  <td>{item.deptId}</td>
                  <td>{item.deptName}</td>
                  <td>{renderStatus(item.status)}</td>
                  <td colSpan={2}>
                                        <button
                                            className="btn btn-primary"
                                           onClick={()=>{handleUpdate(item.deptId)}}
                                        >
                                            Edit
                                        </button>{" "}
                                        &nbsp;
                                        <button
                                            className="btn btn-danger"
                                            onClick={()=>{deleteDataFromServer(item.deptId)}}
                                        >
                                            Delete
                                        </button>
                               </td>
                 </tr>
               )
            })
         ):( 
            <div>Loading...</div>
         )}
         </tbody>
      </Table>
      <Modal show={showAdd}  onHide={handleCloseAdd}>
         <Modal.Header closeButton >
        <Modal.Title>Add Department</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          <Form onSubmit={postDataToServer}>
  <FormGroup>
    <h1>Enter Department Detail</h1>
  </FormGroup>
  <FormGroup>
    <label for='title'>Department Name</label>
    <Input
      required
      type="text"
      placeholder="Enter Name here"
      id="DeptName"
      value={newDepartment.deptName}
      onChange={(e) => {
        setNewDepartment({
          ...newDepartment,
          deptName: e.target.value,
        });
      }}
    ></Input>
  </FormGroup>
  <FormGroup>
    <label for='title'>Status</label>
    <Input
      type="checkbox"
      id="Status"
      checked={newDepartment.status}
      onChange={(e) => {
        setNewDepartment({
          ...newDepartment,
          status: e.target.checked,
        });
      }}
    ></Input>
  </FormGroup>
  <FormGroup>
    <Button className="btn btn-primary" type='submit'>Submit</Button>
  </FormGroup>
</Form>
         </Modal.Body>
      </Modal>


      <Modal show={showUpdate} onHide={handleCloseUpdate}>
         <ModalHeader closeButton>
         <Modal.Title>Update Department</Modal.Title>
         </ModalHeader>
         <Modal.Body>
   <Form onSubmit={updateDataFromServer}>
  <FormGroup>
    <h1>Update Department Detail</h1>
  </FormGroup>
  <FormGroup>
    <label for='title'>Department Name</label>
    <Input
      required
      type="text"
      placeholder="Enter Name here"
      id="DeptName"
      value={oneDepartment.deptName}
      onChange={(e) => {
       setOneDepartment({
          ...oneDepartment,
          deptName: e.target.value,
        });
      }}
    ></Input>
  </FormGroup>
  <FormGroup>
    <label for='title'>Status</label>
    <Input
      type="checkbox"
      id="Status"
      checked={oneDepartment.status}
      onChange={(e) => {
        setOneDepartment({
          ...oneDepartment,
          status: e.target.checked,
        });
      }}
    ></Input>
  </FormGroup>
  <FormGroup>
    <Button className="btn btn-primary" type='submit'>Submit</Button>
  </FormGroup>
</Form>
         </Modal.Body>
      </Modal>
    </Fragment>
   )
}

export default DepartmentList;