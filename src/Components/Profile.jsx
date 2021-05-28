import React from 'react';
import Pic from '../images/picsm1.gif';
import Piclg from '../images/piclg.png';

export default function Profile() {
    return (
        <div>
            <div className="d-sm-block d-md-none d-lg-none">
                <img src={Pic} style={{width: '100vw', height: '90vh'}} />
            </div>
            <div className="d-none d-md-block d-lg-block pt-5">
            <img src={Piclg} style={{maxWidth: "1000px"}}/>
        </div>
        </div>
    );
}
