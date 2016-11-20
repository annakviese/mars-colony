import { Component, OnInit, HostBinding,trigger,transition,animate,style,state} from '@angular/core';
import { NewEncounter } from '../models';
import EncountersService from '../services/encounters.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersService],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          width: '100%',
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          width: '100%',
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('1s ease-out')
      ]),
      transition('* => void', [
        animate('1s ease-in', style({
          width: '100%',
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class EncountersComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }
  
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
