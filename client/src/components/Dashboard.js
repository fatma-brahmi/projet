import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { currentUser, logout } from "../JS/actions/user"
import Home2 from '../components/home2/home2'

const Dashboard = () => {
    const dispatch = useDispatch()
    const history = useHistory()
  

    
    const loading = useSelector(state => state.userReducer.loading)
    
    useEffect(() => {
        dispatch(currentUser())
    }, [])
    
    return (
        <div>
            <button onClick={() => { dispatch(logout()); history.push("/login") }}>logout</button>
            {loading ? <h1>loading...</h1> :<Home2/>}
        </div>
    )
}

export default Dashboard
