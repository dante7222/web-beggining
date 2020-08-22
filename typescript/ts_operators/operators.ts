interface Person {
    name: string
    age : number
}

// keyof

type PersonKey = keyof Person; // age, name

type User = {
    _id : number
    name : string
    email : string
    createAt : Date
}

type  UserKeys = Exclude<keyof User, '_id'>;
let user1 : UserKeys = "name";

