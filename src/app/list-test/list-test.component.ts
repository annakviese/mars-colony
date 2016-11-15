import { Component, OnInit } from '@angular/core';


class Apple {
  constructor(
    public name: string,
    public colour: string
  ) {}
}

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  appleList: [Apple];
  apple: Apple;
  
  constructor(){
  this.apple = {name: '', colour: ''};
  this.appleList  = [
    {name: 'Granny Smith', colour: 'Green'},
    {name: 'Delicious', colour: 'Deep Red'},
    {name: 'Crab', colour: 'Crab'}
  ]; 
  }

  addApple() {
    this.appleList.push(this.apple);
    this.apple = { name: '' , colour: ''};
  }
  renderAppleForm(appleForm){
    
  }

  

  ngOnInit() {
  }

}
