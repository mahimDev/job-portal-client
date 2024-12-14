import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData()
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
        <>
            <div className="mt-32 w-4/5 ">
                <div className="border-2 border-[#2a7715] rounded-xl p-4">
                    <div className="flex justify-between text-center  rounded-xl ">
                        <img
                            className="rounded-xl  flex-1"
                            src={company_logo} alt="" />
                        <p className="flex-1"><span className="font-semibold ">Description:</span> {description}</p>
                    </div>

                    <div className="flex justify-between items-center my-2">
                        <h1 className="ml-1 font-semibold">{company}</h1>
                        <p className="bg-[#FFD700] px-3 rounded font-bold ">{category}</p>
                    </div>
                    <div className="border border-[#2a7715]"></div>


                    <div className="flex justify-between items-center my-2">
                        <div className=" items-center">
                            {title}

                        </div>

                        <Link to={`/job-apply/${_id}`}>   <button
                            className="border rounded py-1 px-3 font-medium bg-[#2a7715] text-white hover:text-[#2a7715] hover:bg-white hover:border-[#2a7715]"
                        >
                            Apply
                        </button></Link>
                    </div>
                </div>
            </div>
            <Link to={"/"}>   <button className="border rounded py-1 px-3 font-medium bg-[#2a7715] text-white hover:text-[#2a7715] hover:bg-white hover:border-[#2a7715]">Back</button></Link>
        </>
    );
};

export default JobDetails;