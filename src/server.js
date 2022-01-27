import express from "express"; //node module에서 알아서 찾아줌

const PORT = 4000;

const app = express(); //express application설계를 위한 규칙 / express function

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT} 😼`);
//서버가 만들어짐 4000포트에
app.listen(PORT, handleListening);//port, callback; 서버가 항상 기다리게 만듦 
//내 서버에 가는방법 -> localhost:portnum 4000