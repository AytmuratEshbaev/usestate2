import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from "./data";
import Quote from "./Quote";

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let index = this.state.index;
        index = (index + 1) % data.length;
        this.setState({
            index: index
        })
    }
    render() {
        const quote = data[this.state.index];
        const myStyle = {
            backgroundColor: quote.color
        }
        return (
            <div className="quotesWrapper" style={myStyle}>
                <div className="quoteBlock">
                    <Quote text={quote.text} author={quote.author} />
                    <button className="next-quote" style={myStyle} onClick={this.handleClick}>New Quote</button>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quotes />
  </React.StrictMode>
);

