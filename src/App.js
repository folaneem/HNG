import './App.css';
import profile from "./images/profile.jpg"
import slack from "./images/slack.png"
import github from "./images/github.png"
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import name from "./profiledata";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import {FaShare} from "react-icons/fa";
import {BsThreeDotsVertical} from "react-icons/bs";


function App() {
    const [size, setSize] = useState(
        {
            width: undefined,
            height: undefined,
        }
    );

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="App">
            <div className="app__content">
                <div><img id='profile__img' src={profile}/>
                    <div className="app__icon__container">
                        <div className="app__icon"> {size.width > 768 ? <FaShare/> : <BsThreeDotsVertical/>} </div>
                    </div>

                </div>


                <a href={'https://twitter.com/folaneem'} className="username">Neemat Olajide</a>

                <div className="app__container">
                    {name.map((item) => {
                        return (
                            <ProfileComponent
                                item={item}
                            />
                        )
                    })}

                </div>
                <div className="app__socials">

                    <img src={slack}/>
                    <a href="https://github.com/folaneem/"> <img src={github}/></a>


                </div>
            </div>


            <div className="footer">
                <Footer/>
            </div>


        </div>
    );
}

export default App;
