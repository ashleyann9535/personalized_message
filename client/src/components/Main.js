import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {MemberList} from "./MemberList";

const Main = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/member')
        .then((res) => {
            console.log(res.data);
            setList(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

  return (
    <div>
      <h1>Create your message</h1>
      <div className="row">
        <div className="col-3">
          <h3>List <Link to={"/createMember"}>+</Link> </h3>
          <MemberList list={list} />
        </div>
        <div className="col-9">
          <form className="">
          <h3>Create Message</h3>
            <input type="text" placeholder="Title" className="m-1 d-block" />
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
      </div>
    </div>
  );
};

export default Main;
