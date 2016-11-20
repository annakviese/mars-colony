import { Component, OnInit, HostBinding,trigger,transition,animate,style,state} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { NewColonist, Job} from '../models';
import JobsService from '../services/jobs.service';
import { cantBe } from '../shared/validators';
import { Router, ActivatedRoute } from '@angular/router';

import ColonistService from '../services/colonist.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [JobsService, ColonistService],
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

export class RegisterComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  colonist: NewColonist;
  marsJobs: Job[];
  registerForm: FormGroup;

  NO_JOB_SELECTED = '(none)';

  constructor(private jobsService: JobsService,
              private colonistService: ColonistService,
              private router: Router, 
              private formBuilder: FormBuilder) {

  jobsService.getJobs().subscribe((jobs)=> {
    this.marsJobs = jobs;
  }, (err) => {
    console.log(err);
  });
              }


 ngOnInit() {

   this.registerForm = new FormGroup({
     name: new FormControl('', [Validators.required, Validators.minLength(2)]),
     age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
     job_id: new FormControl(this.NO_JOB_SELECTED,[cantBe(this.NO_JOB_SELECTED)]),
   });
 }


  onSubmit(event) {
      event.preventDefault();
      if (this.registerForm.invalid) {   
        //the form is Valid       
} else {
  const name = this.registerForm.get('name').value;
  const age = this.registerForm.get('age').value;
  const job_id = this.registerForm.get('job_id').value;
  
  const colonist = new NewColonist(name, age, job_id);

  this.colonistService.submitColonist(colonist).subscribe( ( colonist ) => {
      sessionStorage.setItem('id', colonist.id.toString()); //local storage strings only! 
        this.router.navigate(['../encounters']);

  }, (err) => {
    console.log(err);
  });
}
}
}

