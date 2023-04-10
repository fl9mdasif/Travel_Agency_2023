// import { signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../Firebase.init';
// import '../../App.css'; 
// import Navlogo from '../../assets/img/Lafz_logo_black.png'
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Components/components.style.css';
import SiteLogo from '../../assets/Icons/deasil_tavel-1.png'

const Navbar = () => {

    // const [user] = useAuthState(auth);
    // const handleSignOut = () => {
    //     localStorage.removeItem('JWT_TOKEN')
    //     signOut(auth)
    // }

    const dummyUserPhoto = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    // const photoUrl = user?.reloadUserInfo.photoUrl;
    const photoUrl = false;
    const user = false;

    const menuItems =
        <>
            <li><a href='/'>Home</a></li>
            <li><Link to='/shop' >Contact-Us</Link></li>
            <li><Link to='/blogs' >Blog</Link></li>
            <li><Link to='/reviews' >About</Link></li>
            {/* {user && <li><Link to='/dashboard' >Dashboard</Link></li>} */}
            {/* {user && <li><Link to='/manageProduct' >Manage Product</Link></li>} */}
        </>

    return (
        <div className="navbar fixe bg-transparen top- text-white ">

            <div className="navbar-start">
                {/* mobile dropdown  */}

                <div className="dropdown bg-base">
                    <label tabIndex="0" className="btn  btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label >
                    <ul tabIndex="0" style={{ backgroundColor: '#0a2cb2' }}
                        className="menu bg-red-300 menu-compact dropdown-content mt-3 p-2 shadow text- rounded-box w-52" >
                        {menuItems}
                    </ul >

                </div >

                {/* mobile dropdown btn   */}
                <a href="/" className="  pl-3 font-bold text-black normal-case text-xl" >
                    <img style={{
                        height: '35px',
                        width: '75px',
                        objectFit: 'contain',
                        marginLeft: '10px',
                        // objectFit: 'cover'
                    }}
                        alt='' src={SiteLogo} />
                </a >
            </div >
            <div className="navbar-center hidden lg:flex " >
                <ul className="menu text-black menu-horizontal" >
                    {menuItems}
                </ul >
            </div >

            <div className="navbar-end  pr-4">
                {/* Dashboard button */}

                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label >

                {/* DropDown user photo and login dropdown end   */}
                <div className="dropdown  dropdown-end">
                    <label tabindex="0" className=" m-1">
                        {
                            user ?
                                <div className="avatar online">
                                    <div className=" rounded-full hover13 column">
                                        <figure>
                                            <img className=' userImg' style={{
                                                height: '42px',
                                                width: '42px',
                                                borderRadius: '50%',
                                                padding: '2px',
                                                border: '2px solid #c5c5c5 '

                                            }}
                                                referrerpolicy="no-referrer"
                                                src={photoUrl ? photoUrl : dummyUserPhoto} alt="*" />
                                        </figure>
                                    </div>
                                </div>
                                :
                                <div className="avatar offline">
                                    <div className=' rounded-full'>
                                        <img className='userImg' style={{
                                            height: '42px',
                                            width: '42px',
                                            borderRadius: '50%',
                                        }} src={dummyUserPhoto} alt="" />
                                    </div>
                                </div>
                        }
                    </label>

                    {/* dropdown list   */}
                    <ul style={{ backgroundColor: '#912059' }} tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {/* {user && <li > <Link to='/myitems' >My Items</Link></li>} */}

                        {
                            user ?
                                <li>
                                    <span onClick={handleSignOut} className="flex items-center text-text ">
                                        Sign Out
                                        <span> <img style={{
                                            height: '42px',
                                            width: '42px',
                                            borderRadius: '50%'
                                        }}
                                            referrerpolicy="no-referrer"
                                            src={photoUrl ? photoUrl : dummyUserPhoto} alt="" />  </span>
                                    </span>
                                </li>
                                :
                                <li><Link to='/login' >Login</Link></li>
                        }
                    </ul>
                </div >

            </div >

        </div >

    );
};

export default Navbar;