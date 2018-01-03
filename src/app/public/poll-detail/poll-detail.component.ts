import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PollsService} from '../../auth/polls/services/polls.service';

@Component( {
  selector: 'app-poll-participation',
  templateUrl: './poll-detail.component.html',
  styleUrls: [ './poll-detail.component.css' ]
} )
export class PollDetailComponent implements OnInit {


  constructor( public _activatedRoute: ActivatedRoute,private _pollsService:PollsService ) {

  }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {
      const pollID: number = params[ 'id' ];
      this._pollsService.
    } );
  }
}
