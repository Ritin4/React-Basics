class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const winner = (s1 === s2) && ((s2 === s3)) 
        return(
            <div>
            <h3>Try your Luck !!</h3>
            <p> {s1} {s2} {s3} </p>
            <p>{winner ? 'Winner' : "Looser"}</p>
            </div>
        )
    }
}