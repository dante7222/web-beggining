const name = 'George'
const age = 26

function getAge() {
    return age
}

const outputsss = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
const outputss = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`
const outputs = `
   <div>This is div</div>
   <p>this is o</p>
 `

console.log(outputs)

const name1 = 'Geroge'
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.charAt(2))
console.log(name1.indexOf('!'))
console.log(name1.toLowerCase().startsWith('george'))
console.log(name1.startsWith('Geori'))
console.log(name1.endsWith('ен!'))
console.log(name1.repeat(3))
const string = '     password      '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'not yet'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}


const personName = 'George'
const personName2 = 'Maxim'
const personAge = 26
const personAge2 = -10

const output1 = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output1)
console.log(output2)

//you can use every string like array of chars
let heeloElement = "heelo"[1];
console.log(heeloElement)