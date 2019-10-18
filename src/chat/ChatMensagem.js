import React, {Component} from 'react'
import {InputGroup,Input,InputGroupAddon,Button} from 'reactstrap'
import {connect} from 'react-redux'
import {enviaMensagem} from './../store/actions/chat' 
import { conversaWatson } from '../store/actions/watson'



class ChatMensagem extends Component {
    constructor(props){
        super(props)

        this.inputEnviaTexto = this.inputEnviaTexto.bind(this)  
        this.props.conversaWatson("Inicio", 'contexto')
    }

    inputEnviaTexto(e){
        if(e.keyCode === 13){ //13 é o keycode da tecla Enter
            console.log(e.target.value)
            const mensagem = {
                texto: e.target.value,
                origem: 'user'
            }
            let contexto = {}
            if(this.props.resposta.data && this.props.resposta.data.context){
                contexto = this.props.resposta.data.context
            }
            this.props.enviaTexto(mensagem)//Mensagem digitada no meu input
            this.props.conversaWatson(mensagem, contexto)
            e.target.value = ''
        }

    }

    render(){
        return (
            <div className='chat-mensagem'>
            <hr/>
                <InputGroup>
                    <Input onKeyDown={this.inputEnviaTexto} placeholder='Digite sua mensagem'/>
                    <InputGroupAddon addonType='append'/>
                    <Button color='success'>Enviar</Button>
                </InputGroup>

            </div>
        )
    }
}    

const mapDispatchToProps = (dispatch) => {
    return {
        enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
        conversaWatson: (msg,contexto) => dispatch(conversaWatson(msg,contexto)) 
        //Sempre que eu chamar o enviatexto e passar para ele minha mensagem, ele irá na 
        //action e vai dar um dispatch na action enviaMensagem passando a mensagem digitada.
    }
}

const mapStateToProps = (state) => {
    return {
        resposta: state.watson.respostas
    }
}
export default connect(mapStateToProps  ,mapDispatchToProps)(ChatMensagem) //Enviará a mensagem para a store.