import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import zenlearn from "../assets/ZenLearnLogo.png";
import { fetchCurrentUser } from "../redux/userSlice";
import userImage from "/user.png";
import { toast } from "react-toastify";
import useNetworkStatus from "../hooks/useNetworkStatus";


function Navbar() {
  const [modalType, setModalType] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (user) dispatch(fetchCurrentUser());
  }, [dispatch, user]);

  const openLogin = () => setModalType("login");
  const openRegister = () => setModalType("register");
  const closeModal = () => setModalType(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch({ type: "user/resetCurrentUser" });
    navigate("/");
    setDropdownOpen(false);
    setMenuOpen(false);
    toast.success("Logged Out Successfully!");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/courses?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };
  const isOnline = useNetworkStatus();
  const wasOnline = useRef(isOnline);

  useEffect(() => {
    if (wasOnline.current !== isOnline) {
      if (!isOnline) {
        toast.error("You're offline. Some features may not work.");
      } else {
        toast.success("You're back online!");
      }
      wasOnline.current = isOnline;
    }
  }, [isOnline]);


  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img className="w-10 h-10 object-contain" src={zenlearn} alt="ZenLearn" />
            <span className="text-2xl font-black text-slate-900 tracking-tighter">ZenLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/courses" className="nav-link font-medium text-sm">Courses</Link>
            {user && (
              <Link to="/exams" className="nav-link font-medium text-sm">Exams</Link>
            )}
            <Link to="/about-us" className="nav-link font-medium text-sm">About</Link>
            <Link to="/contact" className="nav-link font-medium text-sm">Contact</Link>

            {/* Improved Search Bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="px-4 py-2 w-64 rounded-xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all text-sm"
              />
              <div className="absolute right-3 top-2.5 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              {user && currentUser ? (
                <div className="relative">
                  <button
                    className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-gray-100 transition-all shadow-sm"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <img
                      src={currentUser.profilePicture || userImage}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                    />
                    <span className="font-semibold text-sm text-gray-700">{currentUser.username}</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in py-2">
                       <div className="px-4 py-2 border-b border-gray-50 mb-1">
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Account</p>
                      </div>
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        Your Profile
                      </Link>
                      {currentUser.role === 'admin' && (
                        <Link
                          to="/admin/Dash"
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                        onClick={handleLogout}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    className="px-5 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={openLogin}
                  >
                    Login
                  </button>
                  <button
                    className="btn-primary flex items-center gap-2 !py-2 text-sm"
                    onClick={openRegister}
                  >
                    Get Started <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu (Improved) */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 transform ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col p-6 gap-4">
            <Link to="/courses" className="text-lg font-semibold hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Courses</Link>
            {user && (
              <Link to="/exams" className="text-lg font-semibold hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Exams</Link>
            )}
            
            <div className="h-px bg-gray-100 my-2" />

            {user ? (
              <>
                <Link to="/profile" className="text-lg font-semibold hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Your Profile</Link>
                <button className="text-red-500 font-semibold text-lg text-left hover:text-red-700 transition-colors" onClick={handleLogout}>Sign Out</button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <button
                  className="btn-secondary w-full"
                  onClick={openLogin}
                >
                  Login
                </button>
                <button
                  className="btn-primary w-full"
                  onClick={openRegister}
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>

        {!isOnline && (
          <div className="bg-red-600 text-white text-center text-xs font-bold py-1.5 uppercase tracking-widest animate-pulse">
            ⚠️ Connection Lost - Working Offline
          </div>
        )}
      </header>

      {/* Login & Register Modals */}
      {modalType === "login" && <Login isOpen={true} onClose={closeModal} onRegisterClick={openRegister} />}
      {modalType === "register" && <Register isOpen={true} onClose={closeModal} onLoginClick={openLogin} />}
    </>
  );
}

export default Navbar;
