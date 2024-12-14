import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyApplicationJobs = () => {
    const [application, setApplications] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [user.email])
    console.log(application)
    return (
        <div>
            {
                application.map(item => <div key={item._id}>
                    <div className="flex justify-between border p-4">
                        <div>
                            <h1>{item.title}</h1>
                            <h1>{item.company}</h1>
                            <h1>{item.user_email}</h1>
                        </div>
                        <div>
                            <button className="p-2 border rounded-md">X</button>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyApplicationJobs;