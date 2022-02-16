import express from "express";
import { edit, remove } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
//뭐든지 import 하려면 export 부터 해야함
//router 과 controller 는 섞어쓰지 않는게 좋음 ** 컨트롤러는 함수, 라우터는 그 함수를 이용함
//userRouter 즉 Router의 폴더이기 때문에 controller 폴더도 만들어야함
//user, videocontroller 파일을 만드는데 GlobalController 는 없음
//필요없어서. 회원가입은 유저가 하는것 이기 때문에 userController에 넣을거임
