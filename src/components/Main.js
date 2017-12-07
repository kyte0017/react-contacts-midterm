import React, {Component} from "react";
import PropTypes from "prop-types";
import { capitalizeFirst } from "../helpers/Helpers";

export default class Main extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className={"column title"}>
                Hello {capitalizeFirst(this.props.name)}
            </div>
        );
    }
}

Main.propTypes = {
    name: PropTypes.string.isRequired
};