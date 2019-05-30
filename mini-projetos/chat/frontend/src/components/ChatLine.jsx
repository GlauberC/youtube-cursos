import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './chatline.css'
import io from 'socket.io-client';
import Msg from './Msg'
import ScrollToBottom from 'react-scroll-to-bottom';


export default class ChatLine extends Component{
    constructor(){
        super()
        this.state = {
            nick: '',
            msgParaEnviar: '',
            msgs: [],
            scrollTop: 9999
        }
        this.idMsg = 0
    }
    componentWillMount(){
        this.socket = io('http://localhost:3001')
        this.socket.on('recebeMsg', msg => {
            this.renderMsg(msg)
        })
        this.socket.on('msgAnteriores', msgs => {
            msgs.forEach(msg => this.renderMsg(msg))
        })
        
    }
    componentDidMount(){
        document.querySelector('.msgs').scrollTop = this.state.scrollTop
    }
    inputNick = (e) => {
        this.setState({nick: e.target.value})
    }
    inputMsgParaEnviar = (e) => {
        this.setState({msgParaEnviar: e.target.value})
    }
    enviarMsg = (e) => {
        e.preventDefault() 
        if(this.state.nick && this.state.msgParaEnviar){
            let sendData = {nick: this.state.nick,
                            msg: this.state.msgParaEnviar}

            this.setState({msgParaEnviar: ''})
            this.socket.emit('sendMsg', sendData)
            this.renderMsg(sendData)
        }
        
    }
    renderMsg = (msgObject) => {
        let msgs = this.state.msgs
        msgObject.id = this.idMsg++
        msgs.push(msgObject)
        this.setState({msgs: msgs})
    }
    render(){
        return(
            <div className = 'container'>
            <form className = 'form-group'>
                <label htmlFor = 'nick'>Nick:</label>
                <input onChange = {this.inputNick} type = 'text' id='nick' className = 'form-control' value = {this.state.nick}/>
                <ScrollToBottom className = "msgs">
                    {this.state.msgs.map(m => <Msg key = {m.id} nick = {m.nick} msg = {m.msg}/>)}
                </ScrollToBottom>
                <label htmlFor = 'msg'>Digite uma mensagem:</label>
                <input onChange = {this.inputMsgParaEnviar} value = {this.state.msgParaEnviar} type = 'text' id='msg' className = 'form-control'/>
                <button onClick = {this.enviarMsg} className = "btn btn-primary btn-enviar">Enviar</button>
            </form>
            </div>
        )

    }
}