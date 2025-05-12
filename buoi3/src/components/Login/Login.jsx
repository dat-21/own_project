import React from 'react'

const Login = () => {
    const isLogin = true;


    return (
        <>
            {isLogin ? <h1>Thông tin người dùng, button logout</h1> : <h1>Nút đăng nhập, đăng kí</h1>}

            {isLogin && <div>Avatar</div>}
        </>
    )
}

export default Login