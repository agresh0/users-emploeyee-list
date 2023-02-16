import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Home() {

    const navigate = useNavigate();
    const handleDelete = (empId)=>{
        // console.log(empId);
        let index = Employee.map((item)=>item.empId).indexOf(empId)
        Employee.splice(index,1)
        console.log(Employee);
        navigate('/');
    }
    const handleEdit = (empId,empName,empDesg,empPhone)=>{
      localStorage.setItem("empId",empId)
      localStorage.setItem("empName",empName)
      localStorage.setItem("empDesg",empDesg)
      localStorage.setItem("empPhone",empPhone)

    }

  return (

    <>
    {/* {console.log(Employee)} */}
    <div style={{margin:"8rem"}}>
        <h4>List of Employee 
        &nbsp;<Link to={'/add'}><Button variant='info'><i class="fa-solid fa-user-plus"></i>Add</Button></Link></h4>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th> Name</th>
              <th>Designatin</th>
              <th> Mobile No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           { Employee && Employee.length>0 ?
           Employee.map((item)=>(
            <tr>
              <td>{item.empName}</td>
              <td>{item.empDesg}</td>
              <td>{item.empPhone}</td>
              <td>
                <Link to={'/edit'}>
                  <Button onClick={()=>handleEdit(item.empId,item.empName,item.empDesg,item.empPhone)} variant="warning"><i class="fa-solid fa-user-pen"></i></Button>
                  </Link>&nbsp;&nbsp;
                <Button onClick={()=>handleDelete(item.empId)} variant="danger"><i class="fa-solid fa-trash-can"></i></Button>
              </td>
            </tr>
           )):"NO data to display"
            }

          </tbody>
        </Table>
    </div>

    </>
  )
}

export default Home