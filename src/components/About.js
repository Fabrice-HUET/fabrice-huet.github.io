import React from 'react';
import Pdf from "./CV/CV-Fabrice-HUET.pdf";

export default function About(props) {

    if (props.data) {
        var name = props.data.name;
        var profilepic = 'images/' + props.data.image;
        var bio = props.data.bio;
        var street = props.data.address.street;
        var city = props.data.address.city;
        var state = props.data.address.state;
        var phone = props.data.phone;
        var email = props.data.email;
        var resumeDownload = props.data.resumedownload;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Profile" />
                </div>
                <div className="nine columns main-col">
                    <h2>Ces derniers mois...</h2>

                    <p>{bio}</p>
                    <hr/>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Me contacter</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{street}<br />
                                    {city} {state}
                                </span><br />
                                <span>{phone}</span><br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={Pdf} target = "_blank" className="button"><i className="fa fa-download"></i>Mon CV</a> {/* https://www.cjoint.com/c/KKipA4U1HK5 */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

