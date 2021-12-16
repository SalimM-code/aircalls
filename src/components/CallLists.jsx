import React from "react";
import { format } from 'date-fns'
import { Link } from "react-router-dom";
import { Wrapper } from "./styles/Lists.styled";



const CallLists = (props) => {
  const { calls } = props;


  return ( 
    <Wrapper>
      <p className="note">Activity</p>
      {calls.map((call) => (
        <div key={call.id}>
        {call.is_archived ? null : <div className="call">
          <Link to={`/call/${call.id}`}>
            <h4 className={`to ${call.call_type === "missed" ? 'missed' : ''}`}>{`${call.direction === 'outbound' ? '↗️' : '↙️'} ${call.to === null ? 'Unknown' : call.to}`}</h4>
            <p>{`${call.from} - ${call.via}`}</p>
            <div className="date">{format(new Date(call.created_at), 'dd/MM HH:mm')}</div>
          </Link>
          </div>
        }
        </div>
      ))}
    </Wrapper>
  );
}
export default CallLists;