// Creating a list of cards

import React, {Component} from "react";
import PropTypes from "prop-types";
import Card from "./Card.js";


//var contacts = require("../data/contacts.js");

export default class CardList extends Component {
    render() {
        return(
            <div className={"column list"}>
                <ul>
                    {this.props.contactList.map(contact => {
                        return <Card selectContact={this.props.selectContact} key={contact.id} first_name={contact.name.first} last_name={contact.name.last} dob={contact.dob} avatar_url={contact.picture.thumbnail} {...contact}/>;
                    })}
                </ul>
            </div>
        );
    }
}

CardList.propTypes = {
    contactList : PropTypes.array.isRequired
};

//return contacts.map(contact => {
//return <Card first_name={contact.name.first} last_name={contact.name.last} avatar_url={contact.picture.medium} dob={contact.dob}/>;