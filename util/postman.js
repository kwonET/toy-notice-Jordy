import axios from "axios";

const postData = async () => {
  const res = await axios.get("http://124.197.210.234:8188/bulletin/list?numPerPage=6")
    return res;
};
export { postData };
