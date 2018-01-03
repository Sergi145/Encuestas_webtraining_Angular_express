
const pollsRouter=require ('express').Router();
const pollsService=require('../api/services/polls-dummy.services');

// /polls
pollsRouter.get('/',(request,response)=>{

	response.json(pollsService.getAll());
})


pollsRouter.param('id',(request,response,next,id)=>{

	console.log('id recibido',id);

	const idtofind=parseInt(id);
	const poll=pollsService.getByid(idtofind);

	if(poll){
		request.poll=poll;
		next();

	}
	else
		response.json({error:'Id no encontrado'})
})

pollsRouter.get('/:id',(request,response)=>{

	const poll=request.poll;
	response.json(poll || {error:"poll no encontrado"});
})

module.exports=pollsRouter;