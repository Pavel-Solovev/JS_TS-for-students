function getNumber() {
    // const promise = Promise.resolve(Math.random())

    const promise = new Promise( (resolve, reject) => {
        reject('some error')
        setTimeout(()=>{
            resolve(Math.random())
        }, 2000);

    } )

    return promise
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))


const repo = {
    save(data) {
        try {
            localStorage.setItem(
                'some-key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise ( (resolve, reject) => {
            try {
                localStorage.setItem(
                    'some-key', JSON.stringify(data)
                )
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        return true
    },
    read() {
        return new Promise((res, rej)  =>  {
            const data = localStorage.getItem('some-key')
            if (!data) {
                res(null)
            } else {
                res(JSON.parse(data))
            }
        })
    }
}


// const result = repo.save({name: 'Name'})
// if (result) {
//     console.log('SAVED')
// } else {
//     console.log('NOT SAVED')
// }

const promise = repo.saveAsync({name: 'Name'})
promise
    .then( ()=> console.log('SAVED'))
    .catch(error => console.warn('NOT SAVED: '+ error))

const run_1 = async () => {
    await repo.saveAsync({name: 'Name'})
    console.log('SAVED')

    const data = await repo.read()
    console.log(data)

}

function wait(ms) {
    return new Promise( (res) => {
        setTimeout(()=> { res() }, ms)
    })
}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
    await wait(1000)
    console.log(4)
}

run()

var findUserInDB = (id) => {
    const users = [{id: 1, name: 'name1', frintd: 2}, {id: 2, name: 'name2', frintd: 3}, {id: 3, name: 'name3', frintd: null}]
    return new Promise((res, rej) => {
        setTimeout(()=> {
            let user = users.find(u=> u.id == id)
            if (user == null) {
                rej('user not found')
            }  else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}