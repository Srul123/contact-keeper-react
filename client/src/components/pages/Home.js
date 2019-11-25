import React from 'react';
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="grid-2">
      <div className="grid-2">
        <div>
          { /* ContactForm  */}
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    </div>
  )

}


export default Home;
