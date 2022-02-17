export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
  console.log(req.params); //이렇게 하고 url/123142 하면 id: 123142 의 값이 콘솔에 찍힘
  return res.send("Watch");
};
export const edit = (req, res) => {
  console.log(req.params);
  res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");

//export default trending;
//export default는 하나밖에 못함
//그래서 export const 를 하는데 export const 를 import 하려면
//import { trending } from "../controllers/videoControllers"; 이렇게 작성 {}
//**참고로 이름이 같아야함 ! default는 달라도 되지만 export const는 이름이 꼭 같아야함 */
