import React from "react";
import './Contacts.css'
import DefaultStore from "../../Store/Default";
function Contacts(){
    DefaultStore.setSelectedPage("contacts")
    return(
        <div id="contacts">
            
        </div>
    );
}
export default Contacts