import express from 'express'; //載入express框架模組
import bodyParser from 'body-parser';


let app = express();

app.use(bodyParser.json()); //使用JSON形式進行傳遞

//server開始聆聽client
app.listen(5000, () => {
    console.log(new Date() + "開始監聽port 5000!");
});


// GET /data/{place}
app.get("/data/:place/:type", (req, res) => {
    const place = req.params.place;
    const type = req.params.type;  
    
    const encodedPlace = encodeURI(place);
    const decodedPlace = decodeURI(encodedPlace);
    
    const encodedType = encodeURI(type);
    const decodedType = decodeURI(encodedType);
    if (place != '' && type != '') {
        return res.status(200).json({ '區域': decodedPlace, '產業別': decodedType });
    } else {
        return res.status(200).json({ '區域': null, '產業別': null });
    }
});

// POST /data
app.post("/data", (req, res) => {
    const place = req.body.place;
    const type = req.body.type;
    if (place != '' && type != '') {
        return res.status(200).json({ '區域': place, '產業別': type });
    } else {
        return res.status(200).json({ '區域': null, '產業別': null });
    }
});
