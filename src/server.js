import express from "express"; //node module에서 알아서 찾아줌

const PORT = 4000;

const app = express(); //express application설계를 위한 규칙 / express function
//express와 관랸된 코드는 express application을 만들고 나서 진행해야됨. 다음부터 코드를 작성 (샌드위치같이)
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); //함수가 next를 호출하면 middleware임
};

const handleHome = (req, res) => {
  return res.send("<h1>i love you</h1>"); //send는 middleware가 아님 *연결이 중단되기 때문에
};

app.get("/", logger, handleHome);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 😼`);
//서버가 만들어짐 4000포트에
app.listen(PORT, handleListening); //port, callback; 서버가 항상 기다리게 만듦
//내 서버에 가는방법 -> localhost:portnum 4000
