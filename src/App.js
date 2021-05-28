import './App.css';
import Profile from './Components/Profile';
import Bio from './Components/Bio';
import TechnicalSkills from './Components/TechnicalSkils';
import PersonalSkills from './Components/PersonalSkills';
import Footer from './Components/Footer';
import {useEffect} from 'react';
import {FiArrowUpCircle} from 'react-icons/fi';

function App() {
    const top = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="App">
           
            <Profile />
           
            
            <div className="container mt-5 ">
                <div className="mb-5">
                    <Bio />
                </div>
                <div className="mb-5">
                    <TechnicalSkills />
                </div>
                <div className="mb-5">
                    <PersonalSkills />
                </div>
                <div className="nav ">
                    <FiArrowUpCircle
                        onClick={() => top()}
                        style={{
                            fontSize: '50px',
                            paddingTop: '3px',
                            color: 'white'
                        }}
                    />
                </div>
                <div className="mb-5">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
