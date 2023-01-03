import React from "react";
import { useNavigate} from "react-router-dom";

function AcceptPage(){
    const nav = useNavigate();
    return(
        <div className="cont">
            <div className="accept__container">
                <div className="accept__section" id="accept__header">
                    <h2>You have been Logged in</h2>
                </div>
                <div className="accept__section" id="accept__body">
                    <h3>Please wait to access your Account</h3>
                    <p>Thanks you for choosing us!</p>
                </div>
                <div className="accept__section" id="accept__footer">
                    <button className="login-btn" id="accept__btn" onClick={() => {nav(-1)}}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default AcceptPage;