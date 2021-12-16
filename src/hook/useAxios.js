import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = () => {
  const [calls, setCalls] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://aircall-job.herokuapp.com/activities")
      .then((res) => {
        if (res.status !== 200) {
          throw Error("could not get data");
        }
        return res.data;
      })
      .then((data) => {
        setError(null);
        setCalls(data);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return { calls, isPending, error };
};
