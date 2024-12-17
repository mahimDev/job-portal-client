import { useEffect, useState } from "react";
import JobsCart from "../../Components/JobsCart/JobsCart";
import axios from "axios";

const HotJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        // fetch('http://localhost:3000/jobs')
        //     .then(res => res.json())
        axios.get('http://localhost:3000/jobs')
            .then(data => setJobs(data.data))
    }, [])
    // console.log(jobs)
    return (
        <div className="grid grid-cols-4 gap-10 mt-20">
            {jobs.map(job => <JobsCart key={job._id} job={job}></JobsCart>)}
        </div>
    );
};

export default HotJobs;