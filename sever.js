const PORT = 8000
const express =require('express')
const cors =require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = '비밀';

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            message: [{ role:"user",content:"how are you" }],
            max_tokens: 100
        })
    };
    try {
        const response = await fetch('https://api.openai.com/v1/completions', options);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error(error);
    }
})

app.listen(PORT,()=> console.log('당신의 서버는 실행되고 있어요. 포트번호 : '+PORT))