import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollsService } from './services/polls.service';
import { Poll } from './models/poll.model';

@Component( {
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: [ './polls.component.css' ],
  providers:[PollsService]

} )
export class PollsComponent implements OnInit {

	polls:Array<Poll>=[];

  constructor( private _pollsService:PollsService) { }

  ngOnInit() {

	this._pollsService.getPolls().subscribe(
		(data) => {

  			this.polls=data;
  		},
  		error=>{
  			console.log(error);
  		});
  }

}

