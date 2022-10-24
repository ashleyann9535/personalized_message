import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
        <h1>Create your message</h1>
        <Link to={'/createMember'} >+</Link>
        <form className=''>
        <input
              type="text"
              placeholder='Title'
              className="m-1 d-block"
            />
            <textarea
          cols="70"
          rows="10"
          placeholder="Enter message..."
          className="m-1 d-block"
        ></textarea>
        <input
          type="submit"
          className="d-block m-3 rounded border-0"
          value={"Create Message"}
        />
        </form>
    </div>
  )
}

export default Main