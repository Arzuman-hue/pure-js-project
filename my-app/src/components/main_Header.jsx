import React from "react";
import TodoComponent from "../css-styles-components/react_css_style_component"

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: " ",
        }
        this.handleCopyText = this.handleCopyText.bind(this)
    }

    handleCopyText(event) {
        localStorage.setItem('textLocal', event.target.value);
        this.setState({"text": localStorage.getItem('textLocal')})
    }

    render() {
        return (
            <div>
                <textarea  onKeyDown={this.handleCopyText} className="copy-text"
                          style={TodoComponent}>
                </textarea>,
                <textarea value={this.state.text} className="sexy" style={{height: "200px", width: "200px", backgroundColor: "red"}}>
                </textarea>
            </div>
        )
    }
}


export default HeaderComponent;