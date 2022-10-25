import {useState} from 'react'

const Form = (props) => {
    const {handleSubmit, buttonText, oldMember} = props;

    const [member, setMember] = useState(oldMember || {
        firstName: "",
        lastName: "",
        gender:"",
    });

    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        handleSubmit(member, setErrors)
    }

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value});
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label className="d-block m-1">First Name:</label>
            {errors.firstname && (
              <p className="m-0 text-danger">{errors.firstname.message}</p>
            )}
            <input
              type="text"
              value={member.firstname}
              name="firstname"
              onChange={handleChange}
              className="m-1"
            />

            <label className="d-block m-1">Last Name:</label>
            {errors.lastname && (
              <p className="m-0 text-danger">{errors.lastname.message}</p>
            )}
            <input
              type="text"
              value={member.lastname}
              name="lastname"
              onChange={handleChange}
              className="m-1"
            />

            <label className="d-block m-1">Gender:</label>
            {errors.gender && (
              <p className="m-0 text-danger">{errors.gender.message}</p>
            )}
            <select
              name="gender"
              type="text"
              value={member.gender}
              onChange={handleChange}
              className="m-1"
            >
              <option value="">--Please choose a gender--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input type={"submit"} value={buttonText} className='d-block mt-3' />
        </form>
    </div>
  )
}

export default Form