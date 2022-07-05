import { useEffect, useState } from "react";
import axios from "axios";

const postData =()=>{
    
  useEffect(() => {
    axios
      .get("http://124.197.210.234:8188/bulletin/list")
      .then((result) => {
        console.log(result.data.list);
      })
      .catch(() => {});
  }, []);
}
export default postData;
