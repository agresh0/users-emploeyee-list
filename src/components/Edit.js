import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';


function Edit() {

    const [empName, setName] = useState('')
    const [empDesg, setDesg] = useState('')
    const [empPhone, setPhone] = useState(0)
    const [empId, setId] = useState('')

    const navigate = useNavigate()

    const handleUpdate = (event) => {
        // to prevent auto reffresh
        event.preventDefault()
        var index = Employee.map((item) => item.empId).indexOf(empId)
        let emp = Employee[index]
        emp.empId = empId
        emp.empName = empName
        emp.empDesg = empDesg
        emp.empPhone = empPhone
        navigate('/')
    }

    useEffect(() => {
        setName(localStorage.getItem("empName"))
        setDesg(localStorage.getItem("empDesg"))
        setPhone(JSON.parse(localStorage.getItem("empPhone")))
        setId(localStorage.getItem("empId"))
    }, [])
    

    return (

        <div className='m-5 row'>
            <h1>Edit employee details</h1>

            <Form className='border mt-3 p-5 '>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" value={empName} placeholder="Enter Name"
                        onChange={(event) => setName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDesg">
                    <Form.Control type="text" value={empDesg} placeholder="Enter Designation"
                        onChange={(event) => setDesg(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSalary">
                    <Form.Control type="text" value={empPhone} placeholder="Enter Salary"
                        onChange={(event) => setPhone(event.target.value)} />
                </Form.Group>

                <Button onClick={(event) => handleUpdate(event)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Edit