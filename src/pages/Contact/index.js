import React from "react"; 
import './style.css'; 
import ContactCard from "../../components/ContactCard";

const Contact = () => {
    return (
        <div className="contact-page"> 
            <div className="contact-title">
                <h2>Contact</h2>
                <ContactCard />
            </div>
            
        </div>
    )
}

export default Contact; 