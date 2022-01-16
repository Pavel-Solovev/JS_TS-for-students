test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
    }
)


test('should take courses chipper 160', () => {
    const courses = [
        {title: 'CSS', price:110},
        {title: 'JS', price:200},
        {title: 'React', price:150},
    ]


    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('CSS')
    expect(chipCourses[1].title).toBe('React')
    })

test('get only completed tasks', () => {
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Salt', isDone: false},
        {id:4, title: 'Sugar', isDone: true},
    ]

    const completedTask = tasks.filter(task => task.isDone)
    expect(completedTask.length).toBe(2)
    expect(completedTask[0].id).toBe(2)
    expect(completedTask[1].id).toBe(4)
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Salt', isDone: false},
        {id:4, title: 'Sugar', isDone: true},
    ]

    const uncompletedTask = tasks.filter(task => !task.isDone)
    expect(uncompletedTask.length).toBe(2)
    expect(uncompletedTask[0].id).toBe(1)
    expect(uncompletedTask[1].id).toBe(3)


})