export const loginAction = (username) => {
    return async (dispatch) => {
        
        try {
            dispatch({
                type: 'LOGIN',
                payload: username
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            await asyncStorage.removeItem('username')

            dispatch({
                type: 'LOGOUT'
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const keepLogin = () => {
    return async (dispatch) => {
        try {
            console.log('keep login terpanggil')
            const token = await asyncStorage.getItem('username')

            if (!token) return
            console.log('ada token', token)

            dispatch({
                type: "LOGIN",
                payload: token
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}