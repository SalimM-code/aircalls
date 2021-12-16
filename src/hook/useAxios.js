import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [arc, setArc] = useState(false);

  useEffect(() => {
    axios.post(url)
    
  }, [url])
}