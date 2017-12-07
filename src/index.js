import {contacts} from "./data/contacts";
require("./main.scss");

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

let state = {};
var contact;
var current;

function setState(changes) {
    state = Object.assign({}, state, changes);

    // Passing the selectContact event through to the App -> CardList -> Card
    state.selectContact = function (e) {
        let id = e.currentTarget.id.split("-")[1];
        location.hash = "#/contact/" + id;
        let contact = state.contactList.find(i => i.id == id);
        setState({contact: contact});
    };

    let splittedUrl = state.location.replace(/^#\/?|\/$/g, "").split("/");

    if(splittedUrl[0] == "contact" && !(current == splittedUrl[1])){
        let contact = state.contactList.find(i => i.id == splittedUrl[1]);
        current = splittedUrl[1];
        setState({currentContact:contact, contact: contact});
    }else{
        contact = null;
    }

    // Rendering the App if there are any new changes
    ReactDOM.render(React.createElement(App, state), document.getElementById("react-app"));
}

window.addEventListener("hashchange", () => setState({location:location.hash}));

// Starting the app by declaring the initial state
setState({contactList:contacts, contact: contact, location: location.hash, currentContact:current});
