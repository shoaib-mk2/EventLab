import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-2 border-[#007aff] font-bold text-[#007aff]" : "font-bold "
                }>
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/speakers"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-2 border-[#007aff] font-bold text-[#007aff]" : "font-bold "
                }>
                SPEAKERS
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/faq"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-2 border-[#007aff] font-bold text-[#007aff]" : "font-bold "
                }>
                FAQ
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-2 border-[#007aff] font-bold text-[#007aff]" : "font-bold "
                }>
                CONTACT
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100 w-4/5 mx-auto">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div> */}
                <NavLink to="/" className="text-2xl md:text-4xl font-extrabold">EventPro</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <a className="btn btn-sm" onClick={handleLogOut}>Sign Out</a>
                        </>
                        :
                        <Link to="/login">
                            <button className="btn btn-sm">Login</button>
                        </Link>
                }
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;