import React from 'react';
class login extends React.Component { 
        return( 
         <div>
         <div>
      <h1>Virtigo</h1>
      </div>
      <div className="flex  items-center background-[#0C356A]">
       
        <h1 className="p-5 text-3xl">Log In</h1>
        <div className="">
          <input className="p-5 " type="email" placeholder="Email Address" />
          <input className="p-5 " type="password" placeholder="Password" />
        </div>
      </div>
      </div>
        );
}
 
export default login;