// create classes for Mars Colony 

export class Encounter {
    constructor(
      public id: number,
      public date: string,
      public colonist_id: number,
      //report encounter 
      public atype: string,
      public action: string
    ){}
}

export class Job { 
    constructor(
        public name: string,
        public id: number,
        public description: string
    ){}
}

//posting this object 
export class NewColonist {
    constructor(
      public name: string,
      public age: number,
      public job_id: string,
      
      
    ){}
}

interface Colonist {
    name: string;
    id: number;
    age: number;
    job: Job;
}
//getting back this object
export class Alien {
    constructor(
        public type: string,
        public submitted_by: string,
        public id: number,
        public description: string
        ){}
    }




