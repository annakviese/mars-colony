// create classes for Mars Colony 

export class Encounter {
    constructor(
      public id: number,
      public date: string,
      public colonist_id: number,
      public atype: string,
      public action: string
    ){}
}

export class Colonist {
    constructor(
      public name: string,
      public job: Job,
      public id: number,
      public age: number
    ){}
}

export class Alien {
    constructor(
        public type: string,
        public submitted_by: number,
        public id: number,
        public description: string
        ){}
    }

export class Job { 
    constructor(
        public name: string,
        public id: number,
        public description: string
    ){}
}


