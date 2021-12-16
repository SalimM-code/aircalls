import { useNavigate,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CallDetail = () => {
  const { id } = useParams();
  const [call, setCall] = useState({})
  const [arc, setArc] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities/" + id)
      .then(response => {
        console.log("2", response.data)
        setCall(response.data)
      })
  }, [id])

  const handleClick = () => navigate(-1);
  const archive = () => {
    axios.post("https://aircall-job.herokuapp.com/activities/" + id,
      {is_archived: true}
    )
    .then(res => {
      console.log("3", res)
      setArc(true);
      navigate(-1);
    })
  }

  return ( 
    <div>
      <button onClick={handleClick}>Back</button>
      <div>
        <p><strong>From</strong>: {call.from}</p>
        <p><strong>To</strong>: {call.to}</p>
        <p><strong>Call Type</strong>: {call.call_type}</p>
        <p><strong>Type</strong>: {call.direction}</p>
        <p><strong>Via</strong>: {call.via}</p>
        <p><strong>Duration</strong>: 
        {call.duration}</p>
        <p><strong>Time</strong>: {call.created_at}</p>
        <p><strong>Archived</strong>: {call.is_archived}</p>
      </div>
      <button onClick={archive}>Archive</button>
    </div>
  );
}
 
export default CallDetail;