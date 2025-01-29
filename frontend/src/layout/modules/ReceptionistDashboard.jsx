import React, { useState } from "react";
import BenificiaryRegistrationForm from "../../components/common/BenificiaryRegistrationForm";
import Header from "../../components/Header";

const ReceptionistDashboard = () => {
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    // Filter beneficiaries based on search
    const filteredBeneficiaries = beneficiaries.filter(
        (b) =>
            b.cnic.includes(searchTerm) ||
            b.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Header />

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Import and Display Beneficiary Form */}
                <BenificiaryRegistrationForm />

                {/* Beneficiary List */}
                <div className="card bg-white shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4">Beneficiary List</h2>

                    {/* Search Bar */}
                    <div className="form-control mb-4">
                        <input
                            type="text"
                            placeholder="Search by CNIC or name"
                            className="input input-bordered w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Beneficiary Table */}
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>CNIC</th>
                                    <th>Name</th>
                                    <th>Purpose</th>
                                    <th>Token</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBeneficiaries.length > 0 ? (
                                    filteredBeneficiaries.map((b, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{b.cnic}</td>
                                            <td>{b.name}</td>
                                            <td>{b.purpose}</td>
                                            <td>{b.token}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">
                                            No beneficiaries found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceptionistDashboard;
