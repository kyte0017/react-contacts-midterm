import React, {Component} from "react";
//import CardList from "./CardList";
//import {contacts} from "../data/contacts";
import Main from "./Main";
import CardDetails from "./CardDetails";
import CardList from "./CardList";
//import CardDetails from "./CardDetails";

export default class App extends Component {

    render() {
        return (
            <div className={"row"}>
                <Main name={"Contact List"}/>
                <CardList contactList={this.props.contactList} selectContact={this.props.selectContact}/>
                <CardDetails contact={this.props.contact}/>
            </div>
        );
    }
}