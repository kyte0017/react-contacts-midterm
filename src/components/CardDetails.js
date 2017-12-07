import React, {Component} from "react";
import PropTypes from "prop-types";
import {capitalizeWords} from "../helpers/Helpers.js";
import {calculateAge} from "../helpers/Helpers";

export default class CardDetails extends Component {
    constructor (props) {
        super(props);
    }
    render(){
        if(null == this.props.contact){
            return <div>{"Please select Contact"}</div>;
        }else{
            return (
                <div className={"details"}>
                    <h1>{capitalizeWords(this.props.contact.name.first  + " " + this.props.contact.name.last)} </h1>
                    <div>
                        <div> {capitalizeWords("Gender: " + this.props.contact.gender)}</div>
                        <div>{"DOB: " + this.props.contact.dob + (" (" + calculateAge(this.props.contact.dob) + " years old)")}</div>
                    </div>
                    <hr/>
                    <div>{capitalizeWords(this.props.contact.location.street)}</div>
                    <div>{capitalizeWords(this.props.contact.location.city + " " + this.props.contact.location.state)}</div>
                    <div>{this.props.contact.location.postcode}</div>
                    <hr/>
                    <div>
                        <div>
                            Email:
                            <a href={this.props.contact.email}>{" " + this.props.contact.email}</a>
                        </div>
                        <div>{"Phone: " + this.props.contact.phone}</div>
                    </div>
                    <br/>
                    <img src={this.props.contact.picture.large} alt=""/>

                </div>

            );
        }
    }
}

CardDetails.propTypes = {
    contact: PropTypes.object
};