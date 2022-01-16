export type ManType = {
    name:string
    age:number
}

const people: Array<ManType>  = [
    {name:'Andrew Ivanov', age:33},
    {name:'Alexander Petrov', age:24},
    {name:'Dmitry Sidorov', age:18},
]

const itInncubator = (man:ManType) => ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })



const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    }
]

const dev2 = [
    itInncubator(people[0]),
    itInncubator(people[1]),
    itInncubator(people[2])
]

const dev3 = people.map(itInncubator)

const dev4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))