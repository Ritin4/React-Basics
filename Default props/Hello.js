class Hello extends React.Component {
    static defaultProps ={
        to:"Anonymous",
        trophies: 1
    }
    render(){
        let trophies = "🎉".repeat(this.props.trophies)
        return(
            <div>
                <p>Hi {this.props.to} from {this.props.from} have won {trophies}</p>
            </div>
        )
    }
}