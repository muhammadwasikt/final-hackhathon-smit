import { useForm } from "react-hook-form";

const BenificiaryRegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Beneficiary Data:", data);
        // Add API call to save beneficiary data here
    };

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Beneficiary Registration
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* CNIC Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">CNIC</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter CNIC (e.g., 12345-1234567-1)"
                        className={`input input-bordered w-full ${errors.cnic ? "border-red-500" : ""
                            }`}
                        {...register("cnic", {
                            required: "CNIC is required",
                            pattern: {
                                value: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/,
                                message: "Invalid CNIC format",
                            },
                        })}
                    />
                    {errors.cnic && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.cnic.message}
                        </span>
                    )}
                </div>

                {/* Name Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter full name"
                        className={`input input-bordered w-full ${errors.name ? "border-red-500" : ""
                            }`}
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters",
                            },
                        })}
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                {/* Phone Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter phone number (e.g., 0300-1234567)"
                        className={`input input-bordered w-full ${errors.phone ? "border-red-500" : ""
                            }`}
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{4}-[0-9]{7}$/,
                                message: "Invalid phone number format",
                            },
                        })}
                    />
                    {errors.phone && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                        </span>
                    )}
                </div>

                {/* Address Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea
                        placeholder="Enter address"
                        className={`textarea textarea-bordered w-full ${errors.address ? "border-red-500" : ""
                            }`}
                        {...register("address", {
                            required: "Address is required",
                        })}
                    ></textarea>
                    {errors.address && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.address.message}
                        </span>
                    )}
                </div>

                {/* Purpose Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Purpose</span>
                    </label>
                    <select
                        className={`select select-bordered w-full ${errors.purpose ? "border-red-500" : ""
                            }`}
                        {...register("purpose", {
                            required: "Purpose is required",
                        })}
                    >
                        <option value="">Select purpose</option>
                        <option value="financial aid">Financial Aid</option>
                        <option value="medical assistance">Medical Assistance</option>
                        <option value="education aid">Education Aid</option>
                    </select>
                    {errors.purpose && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.purpose.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <div className="form-control mt-4">
                    <button type="submit" className="btn bg-primary w-full">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BenificiaryRegistrationForm
