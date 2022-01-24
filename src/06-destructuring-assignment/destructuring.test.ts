test('', () => {
    let props = {
        name: 'Name',
        age: 32,
        lessons: [{title: '1'}, {title:'2'}]
    }



    const {age, lessons} = props;

    const a = age;
    const l = lessons;


    expect(a).toBe(32);
    expect(l.length).toBe(2);



})

