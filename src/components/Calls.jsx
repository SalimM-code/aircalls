import CallLists from "./CallLists";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles/Call.styled";
import { useAxios } from "../hook/useAxios";

const Calls = () => {
  const { calls, isPending, error } = useAxios();

  return (
    <Wrapper>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div>
      {calls && <CallLists calls={calls}  />}
      </div>
      <Link to="/archived">
      <button className="main btn">View Archived calls</button>
      </Link>
    </Wrapper>
  )
}

export default Calls;