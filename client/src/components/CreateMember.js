import React from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import Form from './Form';

const CreateMember = () => {

    const navigate = useNavigate();

    const submitHandler= (member, setErrors) => {
        axios.post('http://localhost:8000/api/member/create', member)
        .then((res) => {
            console.log(res.data);
            navigate('/')
        })
        .catch((err) => {
            console.log(err.response.data.error);
            setErrors(err.response.data.error)
        })
    }

  return (
    <div>
        <Link to={'/'}></Link>
        <h4>Add Member</h4>
        <Form handleSubmit={submitHandler} buttonText={'Add Member'} />
    </div>
  )
}

export default CreateMember