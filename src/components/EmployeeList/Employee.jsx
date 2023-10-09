import React, { Fragment,useEffect,useState } from 'react';
import axios from 'axios';
import './Employee.css';
import { ModalBody, ModalTitle } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Container, FormGroup, Input,Button ,Form, ModalHeader} from "reactstrap";
import Modal from 'react-bootstrap/Modal';

function Employee()
{
    const[employee,setEmployee] = useState([]);
    const[newEmployee,setNewEmployee] = useState({});
    const[deptData,setDeptData] = useState([]);
    const[showAdd,setShowAdd] = useState(false);
    const[showEdit,setShowEdit] = useState(false);
    const[oneEmployee,setOneEmploye] =useState({});


        //Handels for Add modal 
        const handleShowAdd = () => setShowAdd(true);
        const handleCloseAdd = () => setShowAdd(false);
        //handels for Edit modal
        const handleShowEdit =()=> setShowEdit(true);
        const handleCloseEdit = ()=> setShowEdit(false);

    useEffect(()=>{getDataFromServer()},[]);
   useEffect(()=>{getDepartmentData()},[]);

   const handleEdit = (id) =>
   {
    handleShowEdit();
    fetchOneEmployee(id);
   }

   //Update data to server
   const updateDataToServer = () =>
   {
    var id = oneEmployee.empId;
    axios.put(`https://localhost:7198/api/Employee/${id}`,oneEmployee).then((result)=>{
        console.log(result.data);
    }
    ).catch((err)=>
    {
        console.log(err);
    }
    )

   }
   //Fetch the data of oneEMployee frome server

   const fetchOneEmployee = (id) => {

    axios.get(`https://localhost:7198/api/Employee/${id}`).then((result)=>{
        setOneEmploye(result.data);
        console.log(result.data);
    }
    ).catch((err)=>
    {
        console.log(err);
    }
    )

   }

//Delete data from server
const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this Employee") === true) {
        axios.delete(`https://localhost:7198/api/Employee/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    getDataFromServer();
                }
            })
            .catch((error) => {
            })
    }
};
//Get department data from department table 
const getDepartmentData = () =>{
    axios.get("https://localhost:7198/api/Department").then((result)=>
    {console.log(result.data);
        setDeptData(result.data);
    }
    ).catch((err)=>{
        console.log(err)
    })
}

//Add Employee to database 
const addEmployeeToDatabase = () =>{

    axios.post("https://localhost:7198/api/Employee",newEmployee).then((result)=>
    {
        console.log("Employee Added succefully");

    }).catch((err)=>{
        console.log(err)
    })

}
const departments = deptData.map((item)=>
{
    return(
    <option key={item.deptName} value={item.deptName}>
     {item.deptName}
    </option>
    )
}
)

    //Get the data from server 
    const getDataFromServer = () =>
    {
        axios.get("https://localhost:7198/api/Employee").then((result)=>
        {
        console.log(result.data);
        setEmployee(result.data);
        }
        )
    }
    return(
      <Fragment>
          <button type="button" className="btn btn-warning right-corner-button"  style={{ position: "absolute",  top: "0",right: "0", marginRight: "50px" ,  marginTop: "10px" }} onClick={()=>{handleShowAdd()}} >Add</button>
       <br></br>
       <br></br>
        <Table>
         <thead>
            <tr>
                <th>EmpId</th>
                <th>EmpName</th>
                <th>EmpDesignation</th>
                <th>EmpSalary</th>
                <th>DeptName</th>
                <th>DOB</th>
                <th>DOJ</th>
                <th>DOE</th>
                <th >Action</th>
            </tr>
         </thead>
         <tbody>
         {employee && employee.length>0 ?(
            employee.map((item,index)=>{
              return(<tr key={index}>
              <td>{item.empId}</td>
              <td>{item.empName}</td>
              <td>{item.empDesignation}</td>
              <td>{item.empSalary}</td>
              <td>{item.deptName}</td>
              <td>{item.dob}</td>
              <td>{item.doj}</td>
              <td>{item.doe}</td>
              <td id='outer'>
                <button className='btn btn-primary' id='inner' onClick={()=>{handleEdit(item.empId)}}>Edit</button>  <button className='btn btn-danger' onClick={()=>{handleDelete(item.empId)}} id='inner'>Delete</button>
              </td>
              </tr>
              )
            })):(
                <div>Loading...</div>
              )  }
         </tbody>
        </Table>
        <Modal show={showAdd}  onHide={handleCloseAdd}>
           <Modal.Header closeButton >
        <Modal.Title >Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={()=>{addEmployeeToDatabase()}}>
                <FormGroup>
                   <h1> Enter Employee Deatils </h1>
                </FormGroup>
                <FormGroup>
                 <label type='title'>Enter Employee Name</label>
                 <Input required type='text' value={employee.empName} onChange={(e)=>setNewEmployee({...newEmployee,empName: e.target.value})}></Input>
                </FormGroup>
                <FormGroup>
                 <label type='title'>Enter  Designation</label>
                 <Input required type='text' value={employee.empDesignation} onChange={(e)=>setNewEmployee({...newEmployee,empDesignation: e.target.value})}></Input>
                </FormGroup>
                <FormGroup>
                 <label type='number'>Enter Salary</label>
                 <Input required type='text' value={employee.empDesignation} onChange={(e)=>setNewEmployee({...newEmployee,empSalary: e.target.value})}></Input>
                </FormGroup>
                <FormGroup>
                 <label type='number'>Select Department</label>
                 <select value={deptData.deptName} onChange={(e)=> setNewEmployee({...newEmployee,deptName:e.target.value})}>
                    {departments}
                 </select >
                </FormGroup>
                <FormGroup>
                <label>Date of Birth</label>
                 <Input  required type="date" value={newEmployee.dob} onChange={(e)=>setNewEmployee({...newEmployee,dob:e.target.value})}></Input>
                </FormGroup>
                <FormGroup>
                <label>Date of Joinnig</label>
                 <Input  required type="date" value={newEmployee.doj} onChange={(e)=>setNewEmployee({...newEmployee,doj:e.target.value})}></Input>
                </FormGroup>
                <FormGroup>
                <label>Date of Exit</label>
                 <Input  required type="date" value={newEmployee.doe} onChange={(e)=>setNewEmployee({...newEmployee,doe:e.target.value})}></Input>
                </FormGroup>
                <FormGroup>
                    <Button type='submit' className='btn btn-success' >Submit</Button>
                    <Button type='reset'  className='btn btn-warning' style={{ position: "absolute",  marginLeft: "10px" }}>Clear</Button>
                </FormGroup>
            </Form>
        </Modal.Body>
        </Modal >
          
          <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
            <ModalHeader>Edit Employee</ModalHeader>
        </Modal.Header>
        <ModalBody>
        <Form onSubmit={()=>{updateDataToServer()}}>
        <FormGroup>Edit Employee Details</FormGroup>
        <FormGroup>
            <Input readOnly value={oneEmployee.empId}></Input>
        </FormGroup>
        <FormGroup>
            <Input  required type='text' value={oneEmployee.empName} placeholder='Enter the name' onChange={(e)=>setOneEmploye({...oneEmployee,empName:e.target.value})}></Input>
        </FormGroup>
        <FormGroup>
            <Input  required type='text' value={oneEmployee.empDesignation} placeholder='Enter the Designation' onChange={(e)=>setOneEmploye({...oneEmployee,empDesignation:e.target.value})}></Input>
        </FormGroup>
        <FormGroup>
            <Input  required type='number' value={oneEmployee.empSalary} placeholder='Enter the salary' onChange={(e)=>setOneEmploye({...oneEmployee,empSalary:e.target.value})}></Input>
        </FormGroup>
        <FormGroup>
        <select value={oneEmployee.deptName} onChange={(e)=>setOneEmploye({...oneEmployee,deptName:e.target.value})}>
                    {departments}
         </select >
        </FormGroup>
        <FormGroup>
            <Input type='datetime' required value={oneEmployee.dob} placeholder='Enter the Date of Birth' onChange={(e)=>setOneEmploye({...oneEmployee,dob:e.target.value})}></Input>
        </FormGroup>
        <FormGroup>
            <Input type='datetime' required value={oneEmployee.doj} placeholder='Enter the Date of Joining' onChange={(e)=>setOneEmploye({...oneEmployee,doj:e.target.value})}></Input>
        </FormGroup>
        <FormGroup>
            <Input type='datetime' required value={oneEmployee.doe} placeholder='Enter the Date of Exit' onChange={(e)=>setOneEmploye({...oneEmployee,doe:e.target.value})}></Input>
        </FormGroup>
        <FormGroup>
            <Button typeof='submit' className='btn btn-success'>Submit</Button>
        </FormGroup>
        </Form>
        </ModalBody>
          </Modal>
    
      </Fragment>
      
    )
}

export default  Employee;
