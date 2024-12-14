import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyAddedJobs = () => {
    const { user } = useAuth()
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])
    console.log(jobs)
    return (
        <div className="">
            {jobs.length}
            <table className="border m-2 ">
                <tr className="p-2 border">
                    <th className="p-2 border">img</th>
                    <th className="p-2 border">job</th>
                    <th className="p-2 border">title</th>
                    <th className="p-2 border">request</th>
                    <th className="p-2 border">position</th>
                </tr>
                {
                    jobs.map(job => <tr key={job._id}
                        className="p-2 border"
                    >
                        <td className="p-1 border"><img src={job?.company_logo} alt="" /> </td>
                        <td className="p-2 border">{job?.company}</td>
                        <td className="p-2 border">{job?.title}</td>
                        <td className="p-2 border">{job?.applicationCount || 0}</td>
                        <td className="p-2 border">
                            {/* <select
                                name="currency"
                                className={`w-full px-3 py-2rounded-lg `}
                                required
                            >
                                <option value="haired">haired</option>
                                <option value="pending">pending</option>
                                <option value="cancel">cancel</option>

                            </select> */}
                            <Link to={`/viewApplications/${job._id}`}><button className="text-blue-800">Applications</button></Link>
                        </td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default MyAddedJobs;