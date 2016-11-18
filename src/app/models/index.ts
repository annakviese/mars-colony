// create classes for Mars Colony 

export class NewEncounter {
    constructor(
        public action: string,
        public atype: string,
        public colonist_id: number,
        public date: string,  
    ){} 
}

export interface Encounter {
    id: number,
    date: string,
    colonist_id: number,
    atype: string,
    action: string,
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

export interface Colonist {
    name: string;
    id: number;
    age: number;
    job: Job;
}


export interface Alien {
        type: string,
        submitted_by: string,
        id: number,
        description: string,
}




