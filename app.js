const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 3033;

app.use(express.json());

app.post('/main', (req, res) => {

    res.send(error);

});

app.post("/card", async (req, res) => {
    var myHeaders = {
        "Content-Type": "application/json",
        "Client-Code": "FC-SB-15",
        "Client-key": "6ea297bc5e294666f6738e1d48fa63d2"
    }
    var raw = JSON.stringify(req.body);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api-sandbox.fpay.me/credito", requestOptions)
        .then(response => response.json())
        .then((result) => {
            res.send(result);
        })

});

app.post("/boleto", (req, res) => {
    var myHeaders = {
        "Content-Type": "application/json",
        "Client-Code": "FC-SB-15",
        "Client-key": "6ea297bc5e294666f6738e1d48fa63d2"
    }
    var raw = JSON.stringify(req.body);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api-sandbox.fpay.me/boleto", requestOptions)
        .then(response => response.json())
        .then((result) => {
            res.send(result);
        })

});

app.post("/pix", (req, res) => {
    var myHeaders = {
        "Content-Type": "application/json",
        "Client-Code": "FC-SB-15",
        "Client-key": "6ea297bc5e294666f6738e1d48fa63d2"
    }
    var raw = JSON.stringify({
        "vl_total": 5,
        "url_retorno": "https://webhook.site/80cb0d11-b9ef-4d57-8f25-94cc867d82df"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api-sandbox.fpay.me/pix/qrcode", requestOptions)
        .then(response => response.json())
        .then((result) => {
            res.send(result);
        })

});

app.get("/about", (req, res) => {
    res.send("About");
});

app.listen(port, (err) => {
    if (err) {
        console.error('Erro ao iniciar o servidor:', err);
    } else {
        console.log(`Ouvindo na porta ${port}`);
    }
});