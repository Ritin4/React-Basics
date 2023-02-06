class App extends React.Component {
    render() {
        return(
            <div>
                <Hello 
                from="Paul"
                trophies={5}
                />
                <Hello 
                from="Arnold"
                to="Schwazh"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));