import React, {Component} from 'react'
import { Button } from 'reactstrap';

class Home extends Component {
    render(){
        return (
            <div className="home">    
                <p className="App-intro">
                    Para começar, começe
                </p>
                <Button color="danger">DANGER!</Button>
            </div>
        )
    }
}

export default Home