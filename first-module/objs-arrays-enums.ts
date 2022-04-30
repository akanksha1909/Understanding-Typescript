enum Role { ADMIN, READ_ONLY, AUTHOR }
enum Day { MORNING=6, AFTERNOON, EVENING, NIGHT}

const person1 = {
    name: 'Akanksha',
    age: 30,
    role: Role.ADMIN
}

console.log(person1)
console.log(person1.role)
console.log(Day.AFTERNOON)

// This will give error, because typescript doesn't know what person1 object contains it
// console.log(person1.name)

const person: {
    name: string
    age: number
    hobbies: string[]
    roleTuple: [number, string]
} = {
    name: 'Akanksha',
    age: 30,
    hobbies: ['Cooking', 'Singing'],
    roleTuple: [2, 'author'],
}

console.log(person.name)

let favouriteActivities: string[]
favouriteActivities = ['Cooking']

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

person.roleTuple.push(3)
person.roleTuple[1] = 'ak'
console.log(person.roleTuple)