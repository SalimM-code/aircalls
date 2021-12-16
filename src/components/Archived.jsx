import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Wrap } from "./styles/Arc.styled";
import { useAxios } from "../hook/useAxios";



const Archived = () => {
  const { calls, isPending, error } = useAxios();
  const navigate = useNavigate()

  const handleClick = () => navigate(-1);
  const handleArc = (id) => {
    axios.post("https://aircall-job.herokuapp.com/activities/" + id, { is_archived: false})
    .then(res => {
      if(res.status === 200) {
        navigate(-1);
      }
    })
  }
  const handleReset = () => {
    axios.get("https://aircall-job.herokuapp.com/reset")
    .then(res => {
      navigate(-1);
    })
  }

  return ( 
    <Wrap>
      <CloseIcon onClick={handleClick} className="closeIcon"/>
      <p className="note">Please click the call if you wish to <strong>unarchive</strong></p>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {calls.map(call =>(
        <div key={call.id} onClick={() => handleArc(call.id)}>
          {!call.is_archived ? null : 
          <div className="call">
              <h4 className={`to ${call.call_type === 'missed' ? 'missed' : ''}`}>{`${call.direction === 'outbound' ? '↗️' : '↙️'} ${call.to === null ? 'Unknown' : call.to}`}</h4>
              <p>{`${call.from} - ${call.via}`}</p>
              <div className="date">{format(new Date(call.created_at), 'dd/MM HH:mm')}</div>
            </div>
          }
        </div>
      ))}
      
      <button className="btn" onClick={handleReset}>Reset All</button>

    </Wrap>
  );
}

export default Archived;