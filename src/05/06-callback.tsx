import React from 'react'

export const User = () => {

    const delUser = () => {
        alert('user deleted')
    }

    const saveUser = () => {
        alert('user save')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div><textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}
    >Name</textarea>
        <input/>
        <div onClick={delUser}>delete</div>
        <div onClick={saveUser}>save</div>

    </div>
}