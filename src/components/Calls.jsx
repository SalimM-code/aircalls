import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import CallLists from "./CallLists";
import { Link } from "react-router-dom";

const Calls = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities")
      .then(response => {
        console.log("1", response.data)
        setCalls(response.data)
      })
  }, [])

  return (
    <div>
      {calls && <CallLists calls={calls}  />}
      <Link to="/archived">
      <button>view Archived calls</button>
      </Link>
    </div>
  )
}

export default Calls;