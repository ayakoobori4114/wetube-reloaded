import express from "express"; //node module에서 알아서 찾아줌

const PORT = 4000;

const app = express(); //express application설계를 위한 규칙 / express function
//express와 관랸된 코드는 express application을 만들고 나서 진행해야됨. 다음부터 코드를 작성 (샌드위치같이)
app.get("/", () => console.log("sombody is trying to go home."));
//or -> const handleHome = () => console.log("sombody is trying to go home.");
//app.get("/", handleHome); 으로 쓰는 방법도 있다
const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT} 😼`);
//서버가 만들어짐 4000포트에
app.listen(PORT, handleListening);//port, callback; 서버가 항상 기다리게 만듦 
//내 서버에 가는방법 -> localhost:portnum 4000