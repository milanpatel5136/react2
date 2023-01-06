import React from "react"; 
import FooterHoc from "./FooterHoc";
import HeaderHoc from "./HeaderHoc";


const MyHoc = (Component) => () => (
    <div>
        
        <HeaderHoc/>

      <div >
        <Component />

      
       
      </div>
      
      <FooterHoc/>
    </div>
  );

export default MyHoc;
