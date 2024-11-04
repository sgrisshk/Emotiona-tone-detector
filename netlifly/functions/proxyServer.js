const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/analyze-sentiment', async (req, res) => {
    try {
        
        console.log("Got text for analysis:", req.body.text);

        const response = await axios.post(
            'http://text-processing.com/api/sentiment/',
            new URLSearchParams({ text: req.body.text })
        );


        console.log("Iternal API answer", response.data);


        const label = response.data.label;

        if (label) {
            res.json({ label });
            console.log("Send label to frontend", label);
        } else {
            console.error('Error: no label is found in API answer');
            res.status(500).send('Error: no label is found');
        }
    } catch (error) {
        console.error('Error in tone analysis', error);
        res.status(500).send('Error in tone analysis');
    }
});


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
