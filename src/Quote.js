function Quote(props) {
    return (
        <div className="quote">
            <p className="quote__text">{props.text}</p>
            <p className="quote__author">{props.author}</p>
        </div>
    )
}

export default Quote;