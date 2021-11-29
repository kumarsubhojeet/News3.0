import React, { useState } from "react";
import { Drawer, Input ,Button } from "antd";
import "../CSS/TopNav.css";
import {AlignLeftOutlined , SearchOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import {NewsCategorySearch} from '../data'


export default function TopNav() {

  const [visible, setVisible] = useState(false);
  const [search , setseatch] = useState("");

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };



  return (
    <div>
      <div className="TopNav_main">
        <div className="TopNav_wrapper">
         <div className="left">
         <div className="drawer">
           
           <AlignLeftOutlined className="hanburger" onClick={showDrawer} />
          
           <Drawer
             title="Close"
             placement="left"
             onClose={onClose}
             visible={visible}
             width="270"
           >
           
           <div className="NavTop_links">
           {
                   NewsCategorySearch.map(news=>(
                       <>
                       <Link to={`/News/${news.name}`}>
                           <p onClick={onClose} className="Top_Nav_links">{news.name}</p>
                       </Link>
                       
                       </>
                   ))
               }
           </div>
           <hr />

           <div className="search_main_mobile">
        <Link to={`/Search/${search}`} >
        <Input value={search} onChange={(e)=> setseatch(e.target.value)} placeholder="Search News..." prefix={<SearchOutlined  />} />
        </Link>         
         </div>

         <hr />
           <div className="about">
               <p>About</p>
               <p>Contact</p>
           </div>
           <hr />
           <div className="about">
               <p>Sign-in</p>
               <p>Register</p>
           </div>
           </Drawer>
         </div>

         <div className="search_main">
         <Link to={`/Search/${search}`} >
        <Input value={search} onChange={(e)=> setseatch(e.target.value)} placeholder="Search News..." prefix={<SearchOutlined  />} />
        </Link>    
         </div>
         </div>

         <div className="right">
         <Button >Suscribe</Button>
         <Button >Sign In</Button>
         </div>
        </div>
      
      </div>
    </div>
  );
}
