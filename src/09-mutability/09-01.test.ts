function icreaseAge(u:UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}

test('big test', () => {


    var user:UserType = {
        name: 'Dimych',
        age: 32
    }
    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)


})