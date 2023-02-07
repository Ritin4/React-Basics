class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const winner = (s1 === s2) && ((s2 === s3)) 
        return(
            <div className="Machine">
            <h3>Try your Luck !!</h3>
            <p style={{ fontSize: '50px' , backgroundColor: 'Purple'} }> {s1} {s2} {s3} </p>
            <p className={winner ? 'winner': 'loser'} 
                    >{winner ? 'Winner' : "Looser"}</p>
            </div>
        )
    }
} 