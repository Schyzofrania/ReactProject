import React from 'react';
import ReactDOM from 'react-dom';

function Contact(props) {

const isDeletable = true;

    return (
            <div>
                <div>
                    <h3> {props.name} </h3>
                </div>
                <div>
                    <h4>
                    {' '}
                    📧{props.mail} <br /> 📞{props.phone}
                    </h4>
                </div>
                <div>{isDeletable ? <button>{props.isDeletable}</button> : ''}</div>
            </div>
    );
};
export const App = (
    <div>
        <h1 className="text-center">My contacts list 📱</h1>
        <div>
            <Contact
                name="John DOEUF"
                mail="Johndoeuf@gmail.com"
                phone="0754456372"
                isDeletable="Delete"/>
            <Contact
                name="Alex CREMENT"
                mail="alexcrement@gmail.com"
                phone="0456738398"
                isDeletable="Delete"/>
            <Contact
                name="Sarah DEGOUT"
                mail="sarahdegout@gmail.com"
                phone="0567283940"
                isDeletable="Delete"/>
            <Contact
                name="Sarah CROCHE"
                mail="sarahcroche@gmail.com"
                phone="0987645373"
                isDeletable="Delete"/>
            <Contact
                name="Alex ENDRA"
                mail="alexendra@gmail.com"
                phone="0345893029"
                isDeletable="Delete"/>
        </div>
    </div>
);

export default Contact;
ReactDOM.render(App, document.getElementById('root'));
