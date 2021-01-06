import React from 'react';
import {FaFacebook, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'



export default function Footer() {
    return (
        <div>

            <div className="text-center">
                <a className="mr-3" href="https://www.facebook.com/profile.php?id=100025657035866">
                    <FaFacebook style={{fontSize: '20px', color: '#008037'}} />
                </a>
                <a className="mr-3" href="https://wa.me/+2349033275449">
                    <IoLogoWhatsapp style={{fontSize: '20px', color: '#008037'}} />
                </a>
                <a className="mr-3" href="mailto:ibeandyson123@gmail.com?subject=subject text">
                    <MdEmail style={{fontSize: '20px', color: '#008037'}} />
                </a>
                <a className="mr-3" href="https://www.linkedin.com/in/ibe-andyson-b290ba176/">
                    <FaLinkedin style={{fontSize: '20px', color: '#008037'}} />
                </a>
                <a className="mr-3" href="https://github.com/Ibeandyson">
                    <FaGithub style={{fontSize: '20px', color: '#008037'}} />
                </a>
                <a className="mr-3" href="https://twitter.com/iaaTechworm">
                    <FaTwitter style={{fontSize: '20px', color: '#008037'}} />
                </a>
                  <p className="mt-3" style={{fontSize: "0.6em"}}>Made with love By Me</p>
            </div>
        </div>
    );
}
