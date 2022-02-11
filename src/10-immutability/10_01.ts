export type userType = {
    name:string
    hair:number
    address:{city:string, house:number}
}

export type LaptopType = {
    title:string
}

export type  UserWithLaptopType = userType & {
    laptop:LaptopType
}

export type  UserWithBooksType = userType & {
    books:Array<string>
}

export type UserWithCompanyType = userType & {
    company: Array<{id:number, name:string}>
}

export function makeHairStyle(u:userType, power:number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u:UserWithLaptopType, city:string) {
    const copy = {
            ...u,
        address: {
                ...u.address,
            city: city
        }
        }
    return copy
}

export function upgradeUserLaptop(u:UserWithLaptopType, laptop:string) {
    const copy = {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
    return copy
}

export function moveUserToOtherHouse(u:UserWithLaptopType & UserWithBooksType, house:number) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    return copy
}

export function addNewBooksToUser(u:UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {
        ...u,
        books:
            [...u.books.concat(books)]
    }}


export function updateBooksToUser(u:UserWithLaptopType & UserWithBooksType, oldbook: string, newbook:string) {
    return {
        ...u,
        books: u.books.map(t => t === oldbook ? newbook : t)
    }}


export const updateCompanyToUser = (u:UserWithCompanyType, id:number, name:string) => {
    return {
        ...u,
        company: u.company.map(m=> m.id === id ? {...m, name: name} : m)
    }
}