import { useDispatch, useSelector } from "react-redux"
import Button from "./common/Button"
import { useNavigate } from "react-router"
import { userId, userToken } from "../redux/reducers/userSlice"

const Header = () => {

    const user = useSelector(state => state?.user.userId)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleLogout = () => {
        dispatch(userToken(''));
        dispatch(userId(''));
        navigate('/')
    }
    return (
        <div>
            <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">{user?.role}</h1>
                <div className="flex gap-2">
                    {user.role === 'Admin' ? 
                    <Button onevent={() => navigate('/auth/create-new-employe')} title={'Add New Employe'}/>
                    :
                    <Button onevent={() => navigate('/')} title={'Add New Benificiary'}/>
                    }
                    <Button onevent={handleLogout} title={"Logout"}/>
                </div>
            </header>
        </div>
    )
}

export default Header
