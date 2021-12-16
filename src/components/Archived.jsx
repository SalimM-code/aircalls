import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Archived = () => {
  const [arc, setArc] = useState(true)
  const [calls, setCalls] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities")
      .then(response => {
        console.log("1", response.data)
        setCalls(response.data)
      })
  }, [])

  const handleClick = () => navigate(-1);
  const handleArc = (id) => {
    axios.post("https://aircall-job.herokuapp.com/activities/" + id, { is_archived: false})
    .then(res => {
      if(res.status === 200) {
        navigate(-1);
      }
      // console.log("10", res)
    })
  }
  return ( 
    <div>
      {calls.map(call =>(
        <div key={call.id}>
          {!call.is_archived ? null : 
          <div>
              <h4>{`${call.direction === 'outbound' ? '↗️' : '↙️'} || ${call.to === null ? 'Unknown' : call.to}`}</h4>
              <p>{`${call.from} - ${call.via}`}</p>
              <div>{format(new Date(call.created_at), 'dd/MM HH:mm')}</div>
              <button onClick={() => handleArc(call.id)}>unarchive</button>
            </div>
          }
        </div>
      ))}
      <button onClick={handleClick}>back to call logs</button>

    </div>
   );
}
 
export default Archived;