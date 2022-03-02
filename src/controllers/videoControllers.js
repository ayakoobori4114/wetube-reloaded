export const trending = (req, res) => {
  const videos = [
    {
      title: "Hello",
    },
    {
      title: "Video #2",
    },
    {
      title: "Whats up",
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
}; //렌더링 home이 view임 그래서 home임 (pug)
//pug에 변수를 만들어 옆에 {} 해서 변수명: "작성" 하면됨
//하지만 error이 뜸. home.pug는 view폴더가 아니라 src폴더 안에 있기 때문!
//nodejs 는 package.json에서 작동하기때문에 그 디렉토리가 현재 작업 디렉토리가 되는것**
//그러면 어떻게 해야하냐. app.set("views")를 사용함
//--> app.set("views", process.cwd() + "/src/views"); 하면 적상작동
export const see = (req, res) => res.render("watch");
// console.log(req.params); //이렇게 하고 url/123142 하면 id: 123142 의 값이 콘솔에 찍힘
export const edit = (req, res) => res.render("edit");
// console.log(req.params);
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");

//export default trending;
//export default는 하나밖에 못함
//그래서 export const 를 하는데 export const 를 import 하려면
//import { trending } from "../controllers/videoControllers"; 이렇게 작성 {}
//**참고로 이름이 같아야함 ! default는 달라도 되지만 export const는 이름이 꼭 같아야함 */
