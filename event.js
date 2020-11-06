const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('tutorial', (a, b) => {
    console.log(a + b)
})

eventEmitter.emit('tutorial', 23, 89)

class Student extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }
    get name (){
        return this._name;
    }
}

let Andrew = new Student('Andrew');
let Sopulu = new Student('Sopulu');
Sopulu.on('name', () => {
    console.log('my name is ' + Sopulu.name)
})
Andrew.on('name', () => {
    console.log('my name is ' + Andrew.name)
})

Andrew.emit('name');
Sopulu.emit('name');