
import { Component, OnInit, HostBinding,trigger,transition,animate,style,state} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { Alien , NewEncounter } from '../models';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service';
import { cantBe } from '../shared/validators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensService, EncountersService],
   animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          width: '100%',
          opacity: 1,
          transform: 'translateY(0)'
        })
      ),
      transition('void => *', [
        style({
          width: '100%',
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('1s ease-out')
      ]),
      transition('* => void', [
        animate('1s ease-in', style({
          width: '100%',
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class ReportComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }


  encounter: NewEncounter;
  marsAliens: Alien[];
  reportForm: FormGroup;

  NO_ALIEN_SELECTED ='(none)';

  constructor(private aliensService: AliensService,
              private router: Router, 
              private encountersService: EncountersService) {

              // private formBuilder: FormBuilder) {
        
        aliensService.getAliens().subscribe((aliens)=> {
              this.marsAliens = aliens;
            }, (err) => {
              console.log('error')
            });
          }

 ngOnInit() {
   this.reportForm = new FormGroup({
     atype: new FormControl('(none)', [cantBe(this.NO_ALIEN_SELECTED)]),
     action: new FormControl('', [Validators.required, Validators.maxLength(450)]),
   });
 }

private getDate(){
  const date = new Date();
  return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
}

// goToEncounters() {
//   this.router.navigate(['/encounters']);
// }

   onSubmit(event, reportForm) {
    event.preventDefault();
    if (this.reportForm.invalid) { 
} else {
  const date = this.getDate();
  const atype = this.reportForm.get('atype').value;
  const colonist_id = 4;
  const action = this.reportForm.get('action').value;

  const encounter = new NewEncounter(action, atype, 4, date);

  //console.log('Ok, let\'s register this encounter:');


  this.encountersService.submitEncounter(encounter).subscribe( (colonist_id) => {

     console.log (sessionStorage.getItem('id'));
       this.router.navigate(['../encounters']);

  }, (err) => {
    console.log(err);
  });
}
}
}   
