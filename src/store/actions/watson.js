import axios from 'axios'
import { enviaMensagem } from './chat'


export const conversaWatsonRequest = () => {
    return {
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }
}

export const conversaWatsonSucess = (mensagens, contexto) => {
    return {
        type: 'CONVERSA_WATSON_SUCESS',
        mensagens,
        contexto,
        carregando: false,
        erro: false
    }
}

export const conversaWatsonError = () => {
    return{
        type: 'CONVERSA_WATSON_ERROR',
        carregando: false,
        erro: true
    }
}


export const conversaWatson = ((mensagem, contexto) => {
    return dispatch => {
        dispatch(conversaWatsonRequest())
        //Chama o backend do Watson (firebase cloud functions)
        const url = 'https://us-central1-nayru-chatterbot.cloudfunctions.net/conversa'
        axios
        .post(url, {input: mensagem.texto,contexto: contexto})
        .then((data) => {
            dispatch(conversaWatsonSucess(data))
            
            const msg = {
                texto: data.data.output.text[0],
                origem: 'bot'
            }

            console.log(msg.texto)
            dispatch(enviaMensagem(msg))
        })
        .catch(() => dispatch(conversaWatsonError()))

    }     
})