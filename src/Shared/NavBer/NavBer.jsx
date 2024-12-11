import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";


const NavBer = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log('log out user from auth provider')
            })
            .then(err => {
                console.log(err)
            })
    }
    const isDark = true
    const nav =
        <>
            <NavLink to={"/"}><li>Home</li></NavLink>
            <NavLink to={'allVisas'}><li>All visas</li></NavLink>
            <NavLink to={'addVisa'} ><li>Add Visa</li></NavLink>
            <NavLink to={'myAddedVisas'}><li>My added visas</li></NavLink>
            <NavLink to={'myVisaApplication'}><li>My Visa applications</li></NavLink>
        </>
    return (
        <div className={`top-0 sticky z-30 ${isDark ? 'bg-darkBg/40 text-gold border-gold' : 'bg-[#d4af37b7]'}  backdrop-blur-xl`}>
            <div className="flex justify-between w-11/12 mx-auto items-center py-5  ">
                <img className="hidden md:block h-14 bg-black rounded-full" src="https://img.icons8.com/?size=100&id=23734&format=png&color=D4AF37" alt="" />
                {/* mobile */}
                <div className="md:hidden block ">
                    <nav>
                        <div className={`md:hidden text-xl bg-gold text-white py-2 px-4 rounded-md `
                        } onClick={() => setOpen(!open)}>
                            {
                                open === true ?

                                    <img className="w-10" src="https://img.icons8.com/?size=100&id=37221&format=png&color=000000" alt="" />
                                    :
                                    <img className="w-10" src="https://img.icons8.com/?size=100&id=37218&format=png&color=000000" alt="" />

                            }
                        </div>
                        <ul className={`md:flex absolute z-[500] md:static bg-gold text-darkBg font-semibold p-3 duration-1000 left-0 rounded-md  ${open ? `top-[91px] ` : '-top-60'} `}>
                            {
                                nav
                            }
                        </ul>
                    </nav>
                </div>
                {/* md + */}
                <div className="hidden md:block">
                    <div className="flex items-center gap-4 ">

                        <ul className="flex gap-4 text-xl  font-semibold">
                            {nav}
                        </ul>

                    </div>
                </div>
                <div className="flex justify-between items-center gap-4" >
                    <div>
                        {/* <DarkModeToggle
                            onChange={setIsDark}
                            checked={isDark}
                            size={60} /> */}
                    </div>
                    <div>
                        {
                            user ?
                                <div className="group relative">
                                    <img
                                        width={500}
                                        height={500}
                                        className="size-12 rounded-full bg-slate-500 object-cover"
                                        // src={user?.photoURL}
                                        alt="avatar GlobalGate"
                                    />
                                    <div className={`group-hover:block hidden rounded-xl absolute right-0 top-12 p-5 bg-white/70 backdrop-blur-2xl ${isDark ? 'text-darkBg' : ''}`}>
                                        <h1 className="mb-2">name</h1>
                                        <h1 className="my-2">email</h1>
                                        <button
                                            onClick={handleLogOut}
                                            className={`  border-2 border-black bg-[#D4AF37]
                             py-1 px-3 font-semibold rounded-md ${isDark ? 'bg-accentDark text-darkBg border-darkBg' : ''}`}
                                        >LogOut</button>
                                    </div>
                                </div>
                                :

                                <div className="flex gap-2">
                                    <Link to={'/login'}>
                                        <button className={`border-2 border-black  py-1 px-3 font-semibold rounded-md ${isDark ? 'bg-darkBg text-gold border-gold' : 'bg-[#D4AF37]'}`}
                                        >Login</button></Link>
                                    <Link to={'/register'}>
                                        <button className={`border-2 border-black  py-1 px-3 font-semibold rounded-md ${isDark ? 'bg-darkBg text-gold border-gold' : 'bg-[#D4AF37]'}`}
                                        >Register</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBer;