import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Authentication = () => {
    const [activeTab, setActiveTab] = useState('signin');
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/authentication/signin');
    }, [])

    const  handTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/authentication/${tab}`);
    }

  return (
    <div>
      <div className="w-[45%] mx-auto mt-8">
        <div role="tablist" className="tabs tabs-bordered">
          <a role="tab" 
          className={`tab font-bold text-xl ${activeTab === 'signup' ? 'tab-active' : ''}`}
          onClick={() => handTabClick('signup')}
          >
            Sign Up
          </a>
          <a role="tab" 
          className={`tab font-bold text-xl ${activeTab === 'signin' ? 'tab-active' : ''}`}
          onClick={() =>  handTabClick('signin')}
          >
            Sign In
          </a>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Authentication;
