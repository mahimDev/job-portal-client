import { Link, useParams } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
const JobApply = () => {
    const { user } = useAuth()
    const { id } = useParams()
    console.log(id)
    const isDark = true
    const handleRegistration = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const linkdin = form.get('linkdin')
        const github = form.get('github')
        const facebook = form.get('facebook')
        // const photo = form.get('photo')
        const userInfo = {
            job_id: id,
            user_email: user.email,
            linkdin, github, facebook
        }
        fetch('http://localhost:3000/job-application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('job application successfully')
                }
            })

    }
    return (

        <div className=" mt-28 shadow-2xl shadow-[#53492a8e]  p-10 rounded-md">
            <form
                onSubmit={handleRegistration}
            >

                <h1 className={`text-5xl text-center font-semibold ${isDark ? 'text-gold' : ''}`}>Job Apply</h1>
                <div className="flex items-center border-b-2 border-[#D4AF37] gap-2 my-10" >
                    <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=PMlkV8LSgBdN&format=png&color=D4AF37" alt="" />
                    <input

                        className={`pl-3 pr-16 py-2 border-none ${isDark ? 'bg-darkBg text-lightText' : ''}`}
                        placeholder="Linkdin URL"
                        type="url"
                        name="linkdin"
                        id="" />
                </div>
                <div className="flex items-center border-b-2 border-[#D4AF37] gap-2 my-10" >
                    <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=PMlkV8LSgBdN&format=png&color=D4AF37" alt="" />
                    <input

                        className={`pl-3 pr-16 py-2 border-none ${isDark ? 'bg-darkBg text-lightText' : ''}`}
                        placeholder="github URL"
                        type="url"
                        name="github"
                        id="" />
                </div>
                <div className="flex items-center border-b-2 border-[#D4AF37] gap-2 my-10" >
                    <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=PMlkV8LSgBdN&format=png&color=D4AF37" alt="" />
                    <input

                        className={`pl-3 pr-16 py-2 border-none ${isDark ? 'bg-darkBg text-lightText' : ''}`}
                        placeholder="facebook URL"
                        type="url"
                        name="facebook"
                        id="" />
                </div>


                <div className="flex mt-10">
                    <button className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#D4AF37] hover:shadow-xl duration-300">Apply</button>
                </div>
            </form>


        </div>

    );
};

export default JobApply;