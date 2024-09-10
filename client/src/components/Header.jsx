import { FaSearch } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  useState } from 'react';
import logo from '/logo.png'
import {
  Drawer,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  ModalClose,
} from "@mui/joy";
export default function Header() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen("success");
    
  };

  const { currentUser } = useSelector((state) => state.user);
  
  
  return (
    <header className='navbar-gradient sticky top-0 shadow-md z-50'>
      <div>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <img src={logo} width={120} height={60} alt="logo" />
          {/* <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>OneClick</span>
            <span className='text-slate-700'>Property</span>
          </h1> */}
        </Link>
        
        <ul className='flex gap-4 items-center'>
          <Link to={'/search?type=sale'}>
            <li className='hidden sm:inline hover:gradient-text hover:underline text-white'>
             Buy
            </li>
          </Link>
          <Link to={'/search?type=rent'}>
            <li className='hidden sm:inline hover:gradient-text hover:underline text-white'>
              Rent
            </li>
          </Link>
          <Link to={'/search?offer=true'}>
            <li className='hidden sm:inline hover:gradient-text hover:underline text-white'>
             Offers
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-8 w-8 mr-5 md:mr-0 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' hover:gradient-text hover:underline text-white mr-6 md:mr-0 w-full '> Sign in</li>
            )}
          </Link>
          <button className='font-medium  hidden md:flex button '>
          {currentUser ? (
            <Link to='/create-listing'>Post AD</Link>
            ) : (
              <Link to='/sign-in'>Post AD</Link>
            )}
          </button>
        </ul>

        {/* drawer */}
        <div className="block md:hidden">
                <button
                  onClick={openDrawer}
                  type="button"
                  className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Drawer  */}
                {open === "success" && (
                  <>
                    <Drawer open={open} onClose={() => setOpen(false)}>
                      <ModalClose />
                      <div className="flex flex-col justify-between h-screen bg-white border-e">
                        <div className="">
                          <Link to='/'open={open} onClick={() => setOpen(false)} ><img
                            src={logo}
                            alt="Logo"
                            width={100}
                            className="mx-5"
                          /></Link>

                          <ul  className="px-6 mt-6 space-y-4 font-sans font-semibold text-black text-md">
                           

                         
          <Link to={'/search?type=sale'} onClick={() => setOpen(false)}>
            <li className=' text-slate-700 hover:underline hover:text-green-500'>
             Buy
            </li>
          </Link>
          <Link to={'/search?type=rent'} onClick={() => setOpen(false)}>
            <li className=' text-slate-700 hover:underline hover:text-green-500'>
              Rent
            </li>
          </Link>
          <Link to={'/search?offer=true'} onClick={() => setOpen(false)}>
            <li className=' text-slate-700 hover:underline hover:text-green-500'>
             Offers
            </li>
          </Link>
          
          <button onClick={() => setOpen(false)} className='button button-gradient  text-white  p-2 rounded-md hover:rounded-full hover:shadow-[#000080] hover:border hover:border-black hover:shadow-2xl'>
          {currentUser ? (
            <Link to='/create-listing'>Post AD</Link>
            ) : (
              <Link to='/sign-in'>Post AD</Link>
            )}
          </button>
                          </ul>
                        </div>

                        
                      </div>
                    </Drawer>
                  </>
                )}
              </div>
      </div>
      </div>
    </header>
  );
}
