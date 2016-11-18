import { Component, OnInit } from '@angular/core';
import { NewEncounter } from '../models';
import EncountersService from '../services/encounters.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersService],
})
export class EncountersComponent implements OnInit {
  marsEncounters: NewEncounter[];

  constructor(encountersService: EncountersService,
              private router: Router) { 
  encountersService.getEncounters().subscribe((encounters)=> {
    this.marsEncounters = encounters;
    
  }, (err) => {
    console.log(err);
  });
}

  ngOnInit() {
    /*setTimeout(() => {
       console.log('I\m late!');
     }, 2000);*/
  }

  onClick(event) {
    event.preventDefault();
    this.router.navigate(['../report']);
  }

}
