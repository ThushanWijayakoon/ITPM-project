import React from 'react';
import background from "../Pages/Supply.jpg";
import ListItemEdit from '../components/ListItemEdit';

const EditDetails = () => {
    return (
        <div className="ViewDetails" style={{ backgroundImage: `url(${background})` }}>
          <br/><br/>
            <div>
              <div><ListItemEdit /></div>
            </div>
          <br/><br/>  
        </div>
   );
};

export default EditDetails ;