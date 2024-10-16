import express from "express"
import "./GPT_calls/chatroute.cjs"
import router from "./GPT_calls/chatroute.cjs";

const app = express();

app.use(express.json());
app.use('/GPT_calls', router);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));