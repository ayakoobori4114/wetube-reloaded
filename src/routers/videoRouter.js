import express from "express";
import {
  see,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see); //express 가 number만 받을것임
videoRouter.get("/:id(\\d+)/edit", edit); // /:id 에는 이름을 붙여줄 것임 request.params.id로 불러와야 하기 때문
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
//:id란 ? 이름은 바뀌어도됨. 이것은 parameter 파라미터임
//이걸로 url안에 변수를 포함시킬 수 있게 해줌. 변수란 ?url/url/url/2231 숫자가 변수임. 페이지마다 다름
//만약 파라미터가 없었으면 모든 영상마다 라우터를 새로 만들어야했을 것임. 불가능. 그래서 파라미터가 있음
//express가 역할을 해줌, : 그 라우터를 불러줌
//upload 를 :id보다 위에 둔 이유는 ?
//:id가 있던 자리에 upload가 있어서 express 가 upload를 id로 착각해버림. 그래서 멈춰버리고 다음으로 넘어가지않음

//정규식 ? 문자열로부터 특정 정보를 추출해 내는 방법 . 예를들면 url주소는 숫자만 되게 할수 있음
//regular Expression
//(dong\w+) 는 dong으로 시작하는걸 선택함. \w는 문자열을 뜻함 \d 는 number
//donggoo, dongkim is name me dongkoo  ===> dong포함된건 다 선택됨
//express router 의 power
export default videoRouter;
