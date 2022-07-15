import axios from "axios";

const postData = async (id) => {
  const res = await axios.get(
    `http://124.197.210.234:8188/bulletin/list?numPerPage=6&curPage=${id ?? 1}`
  );
  return res;
};
const detailData = async (id) => {
  const res = await axios.get(
    `http://124.197.210.234:8188/bulletin/${id ?? 1}`
  );
  return res;
};
const wrtData = async (data) => {
  const res = await axios.post(
    `http://124.197.210.234:8188/bulletin`,
    data
    // {test:'banana'}
  );
  return res;
};
const pwdCheck = async (id, pwd) => {
  const res = await axios.patch(
    `http://124.197.210.234:8188/bulletin/${id}`,
    {
      password:pwd,
    }
  );
  return res;
};
export { postData, detailData, wrtData, pwdCheck };
