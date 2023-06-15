import React from "react";
import "./Contacts.css";
import DefaultStore from "../../Store/Default";
import Donate from "../../Components/Donate/Donate";
import map from "../../images/map.jpg";

function Contacts() {
    DefaultStore.setSelectedPage("contacts");
    return (
        <div id="contacts">
            <div className="header">CONTACTS</div>
            <div className="text">Address: Moscow, Russia</div>
            <div className="text">Email: support@gmail.com</div>
            <div className="text">Phone: 8(999) 999-99-99</div>
            <div className="map">
                <img src={map} alt="map"></img>
            </div>
            <Donate />
        </div>
    );
}
export default Contacts;
