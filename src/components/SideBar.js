import { BsBank,BsMinecartLoaded  } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';
import { GiWaterBottle } from "react-icons/gi";


function Sidebar() {
    
return( 
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primarybg text-white shadow-lg ">
     <SideBarIcon icon={<GiWaterBottle size = "28" /> }    />
     <SideBarIcon icon={<AiFillCar size = "28" />}   />
     <SideBarIcon icon={<BsBank size = "28" />}   />
     <SideBarIcon icon={<BsMinecartLoaded size = "28" />}   />

     </div>
     
);

}

const SideBarIcon =  ({icon}) => (

    <div className="SideBarIcon"> {icon} </div>
);


export default Sidebar;