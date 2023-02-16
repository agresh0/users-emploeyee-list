import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import Employee from '../Employee';


function Add() {

    const [empName, setName] = useState('')
    const [empDesg, setDesg] = useState('')
    const [empPhone, setphone] = useState(0)
    const navigate = useNavigate()
    const handleSubmit = (event) => {

        event.preventDefault()
        const ids = uuid()
        let uniqueId = ids.slice(0, 8)
        let phone = Number(empPhone)
        Employee.push({
            empId: uniqueId,
            empName,
            empDesg,
            empPhone: phone
        })
        navigate('/')
    }


    return (

        <div className='m-5 row'>
            <h1>Add new employee details</h1>
            <Form className='border mt-3 p-5 '>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Name"
                        onChange={(event) => setName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDesg">
                    <Form.Control type="text" placeholder="Enter Designation"
                        onChange={(event) => setDesg(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSalary">
                    <Form.Control type="text" placeholder="Enter Mobile No"
                        onChange={(event) => setphone(event.target.value)} />
                </Form.Group>


                <Button onClick={(event) => handleSubmit(event)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Add