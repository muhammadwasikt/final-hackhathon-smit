import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userId } from '../../redux/reducers/userSlice'
import { getReq } from '../../api/axios'

const ApiHandling = () => {

    const dispatch = useDispatch()

    const token = useSelector(state => state?.user.token)

    const getRequest = async () => {
        const verifyUser = await getReq('managment/protect')
        dispatch(userId(verifyUser))
    }
    useEffect(() => {
        if (token?.length > 0) {
            getRequest()
        }
    }, [token])

    return (
        <div>

        </div>
    )
}

export default ApiHandling
