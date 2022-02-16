import express from "express";
import { join } from "../controllers/userControllers";
import { trending } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
//변수를 export 함. 하지않으면 에러
//프로젝트에 있는 모든 파일은 분리된 모듈임
//그래서 무언가를 바깥에 공유하기 위해서는 익스포트를 먼저해줘야함
//default export이기 때문에 import 하고 이름을 바꿔도 됨
