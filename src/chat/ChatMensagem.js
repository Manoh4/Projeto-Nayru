import React from 'react'
import {InputGroup,Input,InputGroupAddon,Button} from 'reactstrap'

const ChatMensagem = props => {
    return (
        <div className='chat-mensagem'>
            <hr/>
            <InputGroup>
                <Input placeholder='Digite sua mensagem'/>
                <InputGroupAddon addonType='append'/>
                <Button color='success'>Enviar</Button>
            </InputGroup>
            Digite aqui sua mensagem
        </div>
    )
}    

export default ChatMensagem