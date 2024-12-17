import { Link } from "react-router-dom";


const JobsCart = (props = {}) => {
    const { job } = props || {}
    const {
        applicationDeadline,
        category,
        company,
        company_logo,
        description,
        hr_email,
        hr_name,
        jobType,
        location,
        requirements,
        responsibilities,
        salaryRange,
        status,
        title,
        _id,
    } = job

    return (
        <div>
            <div>
                <div className="border-2 border-[#2a7715] rounded-xl p-4 ">
                    <div className=" rounded-xl  overflow-hidden">
                        <img
                            className="rounded-xl  w-20  transition-transform duration-300 transform hover:scale-110"
                            src={company_logo} alt="" />
                    </div>

                    <div className="flex  justify-between items-center my-2">
                        <h1 className="ml-1 font-semibold">{company}</h1>
                        <p className="bg-[#FFD700] px-1 rounded font-bold ">{jobType}</p>
                    </div>
                    <div className="border border-[#2a7715]"></div>


                    <div className="flex justify-between items-center my-2">
                        <div className=" items-center">
                            {title}

                        </div>

                        <Link to={`/job-details/${_id}`}><button
                            className="border rounded py-1 px-3 font-medium bg-[#2a7715] text-white hover:text-[#2a7715] hover:bg-white hover:border-[#2a7715]"
                        >
                            Apply
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCart;