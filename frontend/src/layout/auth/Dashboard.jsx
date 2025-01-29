import { useSelector } from "react-redux";
import AdminDashboard from "../modules/AdminDashboard";
import ReceptionistDashboard from "../modules/ReceptionistDashboard";

const Dashboard = () => {

    const user = useSelector(state => state?.user.userId)

    return (
        <div className="">
            {user?.role === "Admin" ?
                <AdminDashboard />
                :
                <ReceptionistDashboard />
            }
        </div>
    );
};

export default Dashboard;
