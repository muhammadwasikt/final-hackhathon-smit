import { useDispatch, useSelector } from "react-redux";
import { userId, userToken } from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router";
import Header from "../../components/Header";

const AdminDashboard = () => {

    const user = useSelector(state => state?.user.userId)

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            <Header />
            {/* Main Content */}
            <div className="flex-1 p-6 space-y-6">
                {/* Metrics Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Total Visitors */}
                    <div className="card bg-white shadow-md">
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Total Visitors</h2>
                            <p className="text-4xl font-semibold">120</p>
                            <p className="text-gray-500">New: 80 | Returning: 40</p>
                        </div>
                    </div>

                    {/* Department-wise Activity */}
                    <div className="card bg-white shadow-md">
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Active Departments</h2>
                            <p className="text-4xl font-semibold">5</p>
                            <p className="text-gray-500">Finance, Medical, Education, etc.</p>
                        </div>
                    </div>

                    {/* Tokens Issued */}
                    <div className="card bg-white shadow-md">
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Tokens Issued</h2>
                            <p className="text-4xl font-semibold">150</p>
                            <p className="text-gray-500">Today</p>
                        </div>
                    </div>
                </section>

                {/* Logs and Department-wise Stats */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Logs Table */}
                    <div className="card bg-white shadow-md">
                        <div className="card-body">
                            <h2 className="text-xl font-bold mb-4">Activity Logs</h2>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Beneficiary</th>
                                            <th>Action</th>
                                            <th>Department</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Ahmed</td>
                                            <td>Token Issued</td>
                                            <td>Finance</td>
                                            <td>10:30 AM</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Sara Khan</td>
                                            <td>Request Completed</td>
                                            <td>Medical</td>
                                            <td>11:00 AM</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Ahmed Raza</td>
                                            <td>Token Issued</td>
                                            <td>Education</td>
                                            <td>12:15 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Department Activity Chart (Placeholder) */}
                    <div className="card bg-white shadow-md">
                        <div className="card-body">
                            <h2 className="text-xl font-bold mb-4">Department-wise Activity</h2>
                            {/* Placeholder for chart */}
                            <div className="flex items-center justify-center h-40">
                                <p className="text-gray-500">Chart Placeholder (e.g., Bar or Pie Chart)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AdminDashboard
