import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    upgradeUserLaptop,
    updateBooksToUser,
    userType,
    UserWithBooksType,
    UserWithLaptopType, UserWithCompanyType, updateCompanyToUser
} from './10_01'


test('reference type test', () => {
    let user: userType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 32
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)


})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 32
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)


})

test('upgrade laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 32
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradeUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(upgradeUser.laptop.title).toBe('Macbook')
    expect(user.laptop).not.toBe(upgradeUser.laptop)


})

test('move another house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 32
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradeUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(upgradeUser)
    expect(user.books).toBe(upgradeUser.books)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).not.toBe(upgradeUser.address)
    expect(upgradeUser.address.house).toBe(99)
})

test('add new books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 99
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradeUser = addNewBooksToUser(user, ['ts', 'rest API'])

    expect(user).not.toBe(upgradeUser)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).toBe(upgradeUser.address)
    expect(upgradeUser.address.house).toBe(99)
    expect(user.books).not.toBe(upgradeUser.books)
    expect(upgradeUser.books.length).toBe(6)
})

test('update books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 99
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradeUser = updateBooksToUser(user, 'js', 'ts')

    expect(user).not.toBe(upgradeUser)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).toBe(upgradeUser.address)
    expect(upgradeUser.books[2]).toBe('ts')
    expect(user.books).not.toBe(upgradeUser.books)
    expect(upgradeUser.books.length).toBe(4)
})

test('update company', () => {
    let user: UserWithLaptopType & UserWithBooksType & UserWithCompanyType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 99
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
        company: [
            {id: 1, name: 'Egfv'},
            {id: 2, name: 'it-inc'}
        ]
    }

    const upgradeUser = updateCompanyToUser(user, 1, 'EPAM') as UserWithLaptopType & UserWithBooksType & UserWithCompanyType

    expect(user).not.toBe(upgradeUser)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.books).toBe(upgradeUser.books)
    expect(upgradeUser.books.length).toBe(4)
    expect(upgradeUser.company[0].name).toBe('EPAM')
})
