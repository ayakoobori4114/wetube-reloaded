import express from "express";
import { join, login } from "../controllers/userControllers";
import { trending, search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login); //login은 user 가 하기 때문에 userControllers 에
globalRouter.get("/search", search); //search 는 video

export default globalRouter;
//변수를 export 함. 하지않으면 에러
//프로젝트에 있는 모든 파일은 분리된 모듈임
//그래서 무언가를 바깥에 공유하기 위해서는 익스포트를 먼저해줘야함
//default export이기 때문에 import 하고 이름을 바꿔도 됨
