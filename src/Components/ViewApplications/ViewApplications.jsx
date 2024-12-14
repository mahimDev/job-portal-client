
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {

    const loader = useLoaderData()
    const handleChange = (e, id) => {
        const data = { value: e.target.value }
        console.log(id)
        fetch(`http://localhost:3000/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <table className="border m-2 ">
                <tr className="p-2 border">
                    <th className="p-2 border ">email</th>
                    {/* <th className="p-2 border">job</th>
                    <th className="p-2 border">title</th>
                    <th className="p-2 border">request</th> */}
                    <th className="p-2 border">position</th>
                </tr>
                {
                    loader.map(job => <tr key={job._id}
                        className="p-2 border"
                    >
                        <td className="p-1 border">{job.user_email} </td>
                        <td className="p-2 border">
                            <select
                                onChange={(e) => handleChange(e, job._id)}
                                defaultValue={'change status'}
                                name="currency"
                                className={`w-full px-3 py-2rounded-lg `}
                                required
                            >
                                <option
                                    disabled
                                // value="haired"
                                >change status</option>
                                <option
                                // value="haired"
                                >haired</option>
                                <option
                                // value="pending"
                                >pending</option>
                                <option
                                // value="cancel"
                                >cancel</option>
                            </select>
                        </td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default ViewApplications;