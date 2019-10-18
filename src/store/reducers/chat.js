const initial_state  = {
    mensagens:[]
}

export default function chat(state = initial_state, action = {}) {
    
    if(action.type === 'ENVIA_MENSAGEM'){
        return {
            mensagens: [...state.mensagens, action.payload.mensagem] 
            //Retornará as mensagens antigas e a nova mensagem.
        }
    } else {
        return state
    }
}