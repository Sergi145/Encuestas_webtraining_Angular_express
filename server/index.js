const express=require('express');
const app=express();
const path=require('path');
const server=require('http').createServer(app);
const morgan=require('morgan');
const bodyParser=require('body-parser');
const port=3300;

app.use(morgan('dev'));//morgan nos permite dar informacion de la peticion,ruta,codigo, y tiempo de respuesta(LOGS)


//cors

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,Api-Token,Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	next();
});



//cargamso las rutas
const pollsRouter=require('./routers/polls-router');



app.get('/',(request,response)=>{

	response.sendFile(path.join(__dirname,'index.html'));

})



//rutas

app.use('/api/v1/polls',pollsRouter);



server.listen(port,()=>{

	console.log('servidor ejectuandose en el puerto'+ port);

})
