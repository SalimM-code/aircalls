import React from "react";
import { format } from 'date-fns'
import { Link } from "react-router-dom";
// import CallMadeIcon from '@mui/icons-material/CallMade';
// import CallReceivedIcon from '@mui/material/Icon';
// import CallMadeIcon from '@mui/material/Icon/'

const CallLists = (props) => {
  const { calls } = props;


  return ( 
    <div>
      {calls.map((call) => (
        <div key={call.id}>
          {call.is_archived ? null : <Link to={`/call/${call.id}`}>
            <h4>{`${call.direction === 'outbound' ? '↗️' : '↙️'} || ${call.to}`}</h4>
            <p>{`${call.from} - ${call.via}`}</p>
            <div>{format(new Date(call.created_at), 'dd/MM HH:mm')}</div>
          </Link>}
          
        </div>
      ))}
    </div>
  );
}
export default CallLists;