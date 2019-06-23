var express = require('express');
app = express();

port = 80;

app.get('/', (req,res) => {
    res.status(200).send("oi");
})


app.get('/whats', (req, res) => {

    var sensor = req.query.sensor || 'teste'; 
    var valor = req.query.valor || 'teste'; 
  
    const accountSid = 'AC07bde883bcb642503a70c91f4628b61e'; 
    const authToken = '8dae697ef3134320e0872445cc1c3886'; 
    const client = require('twilio')(accountSid, authToken); 
   
  client.messages 
        .create({ 
           body: 'MindTalking: Atenção. Dectectamos uma anomalia.  Sensor: ' + sensor + ' valor:' + valor + '. Maquina:TT_Machine01_SP.  Acesse: https://solarc02-tokenvendor-solarc02.eu1.mindsphere.io/', 
           from: 'whatsapp:+14155238886',       
           to: 'whatsapp:+5511994176693' 
         }) 
        .then(message => console.log(message.sid)) 
        .done();
  
  
      res.status(200).send('tudo bem');
    })

app.listen(port, function(){
    console.log("Servidor Iniciado");
});

    

