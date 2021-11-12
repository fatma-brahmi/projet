import React, { useState } from 'react'

import { Form ,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addArticl } from '../../JS/actions/articlAction';
const AddArticl = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const [newArticl, setNewArticl] = useState({})
    const handleChange=(e)=>{
        e.preventDefault();
        
        setNewArticl({...newArticl,[e.target.name]:e.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
       dispatch(addArticl({
     title:data.get('title'),
     nameNutri:data.get('nameNutri'),
     description:data.get('description')
      
        },history));
    }
    return (
        <div>
           <Form onSubmit={handleSubmit} >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>your name</Form.Label>
    <Form.Control onChange={handleChange}name="nameNutri" placeholder="name" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control onChange={handleChange}name='description' placeholder="description" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>title</Form.Label>
    <Form.Control onChange={handleChange} name="title" placeholder="title" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
    }

export default AddArticl
