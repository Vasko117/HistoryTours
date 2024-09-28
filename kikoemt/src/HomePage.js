import React from 'react';
import './HomePage.css';
import {useNavigate} from "react-router-dom"; // Import the CSS for custom styles

const HomePage = () => {
    const nav=useNavigate()
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <h1 className="homepage-title">Добредојдовте во Водич низ Историјата</h1>
                <p className="homepage-description">
                     "Водич низ Историјата" им овозможува на корисниците  да истражуваат историски локации ширум светот преку резервирање на тури од разни организатори, секоја со различни детални информации и искуства поврзани со локациите.
                </p>
                <p className="homepage-description">
                    Апликацијата овозможува пребарување на локации според период на историјата, географска локација или тип на локација. Корисниците имаат пристап до информации за културното наследство и археолошките откритија на секоја локација, истражувајќи ги во живо преку резервација.
                </p>
                <p className="homepage-description">
                    Оваа апликација ги обединува историските знаења со виртуелното искуство на патување, создавајќи иновативно и интерактивно искуство за љубителите на историјата и патниците кои сакаат да истражуваат низ светот.
                </p>
                <button onClick={()=>{nav('/locations')}} className="explore-btn">Истражете Историски Локации</button>
            </div>
        </div>
    );
}

export default HomePage;