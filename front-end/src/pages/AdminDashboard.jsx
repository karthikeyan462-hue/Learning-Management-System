import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminStats } from "../redux/adminSlice";
import { FiUsers, FiBook, FiClipboard, FiDollarSign, FiBarChart, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { totalUsers, totalCourses, totalExams, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAdminStats());
  }, [dispatch]);

  return (
    <div className="flex min-h-screen bg-slate-50 pt-16">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden md:block">
        <div className="p-8">
          <h1 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">Z</div>
            ZenLearn Workspace
          </h1>
          <nav>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Main Menu</p>
            <ul className="space-y-2">
              <li>
                <Link to="/admin/Dash" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 font-semibold rounded-xl transition-all">
                  <FiHome className="text-lg" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/usersList" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all group">
                  <FiUsers className="text-lg group-hover:scale-110 transition-transform" /> Manage Users
                </Link>
              </li>
              <li>
                <Link to="/admin/coursesList" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all group">
                  <FiBook className="text-lg group-hover:scale-110 transition-transform" /> Manage Courses
                </Link>
              </li>
              <li>
                <Link to="/admin/exams" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all group">
                  <FiClipboard className="text-lg group-hover:scale-110 transition-transform" /> Manage Exams
                </Link>
              </li>
            </ul>

            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-10 mb-4">Financials</p>
            <ul className="space-y-2">
              <li>
                <Link to="/admin/payments" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all group">
                  <FiDollarSign className="text-lg group-hover:scale-110 transition-transform" /> Payments
                </Link>
              </li>
              <li>
                <Link to="/admin/reports" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all group">
                  <FiBarChart className="text-lg group-hover:scale-110 transition-transform" /> Reports
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-1">Command Center</h2>
            <p className="text-slate-500 text-sm font-medium">Monitoring platform-wide performance and user growth.</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="btn-secondary !py-2 !px-4 text-sm">Download Report</button>
             <button className="btn-primary !py-2 !px-4 text-sm">Add New Resource</button>
          </div>
        </header>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-medium animate-fade-in">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {error}
          </div>
        )}

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <FiUsers className="text-2xl" />
            </div>
            <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Total Users</h3>
            <p className="text-4xl font-black text-slate-900">{loading ? "..." : totalUsers}</p>
            <div className="mt-4 flex items-center gap-2 text-green-500 text-xs font-bold">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              <span>12.5% increase</span>
            </div>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-green-500/5 transition-all duration-500 group">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
              <FiBook className="text-2xl" />
            </div>
            <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Active Courses</h3>
            <p className="text-4xl font-black text-slate-900">{loading ? "..." : totalCourses}</p>
            <div className="mt-4 flex items-center gap-2 text-green-500 text-xs font-bold">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              <span>4.2% increase</span>
            </div>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500 group">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <FiClipboard className="text-2xl" />
            </div>
            <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Published Exams</h3>
            <p className="text-4xl font-black text-slate-900">{loading ? "..." : totalExams}</p>
            <div className="mt-4 flex items-center gap-2 text-red-500 text-xs font-bold">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              <span>1.8% decrease</span>
            </div>
          </div>
        </div>

        {/* Placeholder for Data Table / Recent Activity */}
        <div className="mt-12 bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900">Recent Platform Activity</h3>
            <button className="text-blue-600 font-bold text-sm hover:underline">View All Logs</button>
          </div>
          <div className="space-y-6">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded-xl px-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="User" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">User Registered</p>
                    <p className="text-xs text-slate-400">A new learner joined the platform {i * 10} minutes ago.</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
