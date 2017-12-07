import React, {Component} from "react";
import PropTypes from "prop-types";
//import {data} from "../data/contacts";
//import contacts from "../data/contacts.js";
import { capitalizeFirst } from "../helpers/Helpers";

export default class Card extends Component {
    constructor (props) {
        super(props);
    }
    render(){
        return(
            <li className={"contact"} id={"contact-" + this.props.id} onClick={this.props.selectContact}>
                <div className={"row"}>
                    <div className={"column pic"}>
                        <img src={capitalizeFirst(this.props.avatar_url)} alt=""/>
                    </div>
                    <div className={"column data"}>
                        <div>{capitalizeFirst(this.props.first_name)}</div>
                        <div>{capitalizeFirst(this.props.last_name)}</div>
                        <div>{this.props.dob.split(" ")[0]}</div>
                    </div>
                </div>
            </li>
        );
    }
}

Card.propTypes = {
    avatar_url: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired
};
