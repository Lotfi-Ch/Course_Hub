import Image from "next/image";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { React, useState,useEffect } from "react";
import Sidebar from "./sidebar.js";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';



const Navbar = () => {
    const [token,settoken] = useState("")
     
    
    useEffect(() => {
        settoken(localStorage.getItem('token'))
         
         console.log(token);
    },[])
const logout = () => {
   

   
            localStorage.clear();
            checkToken()
       

}

    const checkToken = ()=>{
 
   
        if (!token || token.length<100) {
            return     ( <div className="p-4">
            <FaUserCircle size={35} color={"#3881AB"} />
        </div>)
        }
        else if (token.length>100){
            return (<div>
                <IconButton onClick={logout}>
                    logout
                    <ExitToAppIcon/>
                </IconButton>
            </div>)

        }

    }


    return (
        <div className="flex justify-between bg-gray-100">
            <div className="p-4 text-center">
                <Sidebar />
            </div>
            <div>
            <Image src="/logo.png" width={100} height={60} alt={""} />
        </div>
      
            <div>
            {checkToken()}
            </div>

        </div>
    );
}

export default Navbar;