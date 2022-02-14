import express from "express"; //node module에서 알아서 찾아줌
import morgan from "morgan"; //morgan 즉middilware설치

const PORT = 4000;

const app = express(); //express application설계를 위한 규칙 / express function
//express와 관랸된 코드는 express application을 만들고 나서 진행해야됨. 다음부터 코드를 작성 (샌드위치같이)
const logger = morgan("dev");

const home = (req, res) => {
  console.log("I will respond");
  return res.send("Hello");
};
const login = (req, res) => {
  return res.send("LOGIN");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 😼`);
//서버가 만들어짐 4000포트에
app.listen(PORT, handleListening); //port, callback; 서버가 항상 기다리게 만듦
//내 서버에 가는방법 -> localhost:portnum 4000
