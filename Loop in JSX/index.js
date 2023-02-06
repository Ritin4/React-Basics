class App extends React.Component {
    render() {
        return(
            <div>
                <Friend 
                name="Bhar"
                hobbies={['Dance','Sing','Cricket']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));