import React, { Component } from "react";
import Painel from "./Painel";
import Botao from "./Botao";
import "./index.css";
const estado = {
    painel: '0',
    zerarPainel: true,
    operadores: null,
    valores: [0, 0],
    atual: 0
}
class Calculadora extends Component{
    state = {
        ...estado
    }
    constructor(props){
        super(props)
        this.zerarMemoria = this.zerarMemoria.bind(this);
        this.mudarOperador = this.mudarOperador.bind(this);
        this.adicionarDigito = this.adicionarDigito.bind(this);
    }
    zerarMemoria(){
        this.setState(
            {...estado}
        )
    }
    mudarOperador(operadores){ //if e else.
        if(this.state.atual === 0){
            this.setState(
                {zerarPainel: true, painel: '', operadores, atual: 1}
            )
        }else{
            const igual = operadores === '=';
            const opAtual = this.state.operadores;
            const valores = [...this.state.valores];
            try{ //eslint-disable-next-line
                valores[0] = eval(`${valores[0]} ${opAtual} ${valores[1]}`);
            }catch(_error){
                valores[0] = this.state.valores[0];
            }finally{
                valores[1] = 0;
            }
            this.setState(
                {
                    painel: Number(valores[0].toFixed(2)),
                    zerarPainel: !igual,
                    operadores: igual ? null : operadores,
                    valores: valores,
                    atual: igual ? 0 : 1
                }
            )
        }
    }
    adicionarDigito(num){ //if e if.
        if(num === '.' && this.state.painel && this.state.painel.includes('.')){
            return false;
        }
        var zerarPainel = this.state.painel === '0' || this.state.zerarPainel === true;
        var valorAtual = zerarPainel ? '' : this.state.painel;
        var painel = valorAtual + num;
        this.setState(
            {painel, zerarPainel: false}
        )
        if(num !== '.'){
            let indice = this.state.atual;
            let novoDigito = parseFloat(painel);
            let valores = [...this.state.valores];
            valores[indice] = novoDigito;
            this.setState(
                {valores}
            )
            console.log(valores);
        }
    }
    render(){
        return(
            <div>
                <h2>Calculadora</h2>
                <div className = "calculadora">
                    <Painel value = {this.state.painel} />
                    <Botao label = "AC" clicar = {this.zerarMemoria} triplo/>
                    <Botao label = "/"  clicar = {this.mudarOperador} operador/>
                    <Botao label = "7"  clicar = {this.adicionarDigito} />
                    <Botao label = "8"  clicar = {this.adicionarDigito} />
                    <Botao label = "9"  clicar = {this.adicionarDigito} />
                    <Botao label = "*"  clicar = {this.mudarOperador} operador/>
                    <Botao label = "4"  clicar = {this.adicionarDigito} />
                    <Botao label = "5"  clicar = {this.adicionarDigito} />
                    <Botao label = "6"  clicar = {this.adicionarDigito} />
                    <Botao label = "+"  clicar = {this.mudarOperador} operador/>
                    <Botao label = "1"  clicar = {this.adicionarDigito} />
                    <Botao label = "2"  clicar = {this.adicionarDigito} />
                    <Botao label = "3"  clicar = {this.adicionarDigito} />
                    <Botao label = "-"  clicar = {this.mudarOperador} operador/>
                    <Botao label = "0"  clicar = {this.adicionarDigito} duplo/>
                    <Botao label = "."  clicar = {this.adicionarDigito} />
                    <Botao label = "="  clicar = {this.mudarOperador} operador/> 
                </div>            
            </div>
        )
    }
}; 
export default Calculadora;