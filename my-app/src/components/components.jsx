import React from "react";
import HeaderComponent from "./main_Header";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: "snckjnj"
        }
    }

    render() {
        return (
            <HeaderComponent name = "Arzum"/>
            )
    }
}

export default Welcome