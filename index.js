const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const sounds = {
    dog: "멍",
    cat: "냐옹",
    pig: "꿀",
    cow: "음메",
    duck: "꽥",
    chicken: "꼬꼬댁",
    horse: "히힝",
    sheep: "매에",
    lion: "어흥",
    elephant: "뿌우우"
};

app.get('/sound/:name', (req, res) => {
    const { name } = req.params;
    const sound = sounds[name];

    if (sound) {
        res.json({ sound });
    } else {
        res.json({ sound: "그런건 없습ㄴ디ㅏ만!" });
    }
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});
