import useAuth from "../../Hooks/useAuth";

const AddJob = () => {
    const { user } = useAuth()
    const isDark = true
    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newData } = initialData
        newData.salaryRange = { min, max, currency }
        newData.requirements = newData.requirements.split('\n')
        newData.responsibilities = newData.responsibilities.split('\n')
        console.log(newData)
        fetch('http://localhost:3000/add-jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.insertedId) {

                //     // toast.success("Successfully added Visa")
                // }
            })

    };

    return (
        <div className="p-6 w-11/12 mx-auto">
            <h2 className={`text-5xl text-center  font-bold my-8 ${isDark ? 'text-gold' : ''}`}>Add job</h2>
            <form onSubmit={handleSubmit} >
                <div className="flex gap-10 justify-between">
                    <div className="space-y-6 w-full">
                        {/* title */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="title here"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            />
                        </div>

                        {/* location */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            />
                        </div>

                        {/* job Type */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>jobType</label>
                            <select
                                name="jobType"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            >
                                <option value="Tourist Visa">Hybrid</option>
                                <option value="Student Visa">Remote</option>
                                <option value="Official Visa">Part-time</option>
                                <option value="Official Visa">Full-time</option>
                            </select>
                        </div>

                        {/* category */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>Category</label>
                            <select
                                name="category"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            >
                                <option value="Tourist Visa">Engineering</option>
                                <option value="Student Visa">Marketing</option>
                                <option value="Official Visa">Teaching</option>
                                <option value="Official Visa">Management</option>
                            </select>
                        </div>

                        {/* application Deadline */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>application Deadline</label>
                            <input
                                type="date"
                                name="applicationDeadline"
                                placeholder="e.g., 15-30 days"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            />
                        </div>
                        {/* salary Range */}
                        <div className="grid grid-cols-3 items-end">

                            <div>
                                <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>Salary Range</label>
                                <input
                                    type="text"
                                    name="min"
                                    placeholder="min"
                                    className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                name="max"
                                placeholder="max"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            />
                            <select
                                name="currency"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            >
                                <option value="BDT">BDT</option>
                                <option value="USD">USD</option>
                                <option value="AUR">AUR</option>

                            </select>
                        </div>
                    </div>
                    <div className="space-y-6 w-full">

                        {/* company */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>company</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Enter company name"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                            />
                        </div>

                        {/* company_logo */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>company logo</label>
                            <input
                                type="text"
                                name="company_logo"
                                placeholder="company logo URL"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            />
                        </div>

                        {/* hr_email */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>HR email</label>
                            <input
                                type="text"
                                name="hr_email"
                                placeholder="HR email"
                                defaultValue={user?.email}
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            />
                        </div>
                        {/* hr_name */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>HR name</label>
                            <input
                                type="text"
                                name="hr_name"
                                placeholder="HR name"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                required
                            />
                        </div>

                        {/* requirements */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>Requirements</label>
                            <textarea
                                name="requirements"
                                placeholder="put requirements in a new line"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                rows="1"
                                required
                            ></textarea>
                        </div>
                        {/* responsibilities */}
                        <div>
                            <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>Responsibilities</label>
                            <textarea
                                name="responsibilities"
                                placeholder="put responsibilities in a new line"
                                className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                                rows="1"
                                required
                            ></textarea>
                        </div>


                    </div>
                </div>
                {/* end */}


                {/* Description */}
                <div>
                    <label className={`block text-gray-700 text-sm mb-2 ${isDark ? 'text-gold' : ''}`}>Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter job description"
                        className={`w-full px-3 py-2 border-b rounded-lg ${isDark ? 'text-lightText bg-darkBg border-gold' : ''}`}
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-[#D4AF37] font-semibold py-2 px-4 rounded hover:bg-[#c99b07] hover:shadow-xl w-full"
                    >
                        Add Visa
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;