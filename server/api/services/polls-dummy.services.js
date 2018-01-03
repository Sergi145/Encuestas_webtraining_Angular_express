const preloadpolls=require('./../data/polls');
const _ = require('lodash');

//singleton
let instance=null;

class PollsDummyService{

	constructor(){

		if(!instance)
			this.init();
		return instance;
	}

	init(){
		instance=this;
		this.polls=preloadpolls;
	}

	save(poll){
		this.polls.push(poll);
	}

	getAll(){
		return this.polls;
	}

	getByid(id){

		const poll= _.find(this.polls,{id:parseInt(id,10)})//encontramos dentro del array y lo pasamos a numero
		return poll ? poll:false;//devolvemos poll y si no poll sera falso
	}
}


module.exports=new PollsDummyService();