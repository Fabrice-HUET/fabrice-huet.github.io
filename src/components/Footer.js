import React, { Component } from 'react';

export default function Footer(props) {

    if (props.data) {
        var networks = props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return (
        <footer>

            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>

                    <ul className="copyright">
                        <li>Thanks to Mírian Silva for this Guided project on Coursera</li>
                        <li>&copy; Copyright 2020 Mírian Silva</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>

                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
        </footer>
    );
}

