import React, {Component} from 'react'
import {InputGroup,Input,InputGroupAddon,Button,Alert,Badge} from 'reactstrap'

class ChatConversa extends Component{
    render(){
        return(
            <div className='chat-conversa'>
                <Badge color='primary'>
                    Você disse:
                </Badge>
                <Alert color='primary'>
                    Eu vou conseguir?
                </Alert>
                <Badge color='warning'>
                    Nayru disse:
                </Badge>
                <Alert color='warning'>
                    Você vai conseguir sim!
                </Alert>
            </div>
        )
    }
}
export default ChatConversa