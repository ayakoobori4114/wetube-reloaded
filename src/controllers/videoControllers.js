export const trending = (req, res) => res.send("Home Page Videos");

export const watch = (req, res) => res.send("Wathc");
export const edit = (req, res) => res.send("Edit");

//export default trending;
//export default는 하나밖에 못함
//그래서 export const 를 하는데 export const 를 import 하려면
//import { trending } from "../controllers/videoControllers"; 이렇게 작성 {}
//**참고로 이름이 같아야함 ! default는 달라도 되지만 export const는 이름이 꼭 같아야함 */
