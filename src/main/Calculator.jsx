import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

// estado inicial da calculadora
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    // dizer se estou manipulando o valor de indice 0 ou de indice 1
    current: 0 // traducao: atual
}

export default class Calculator extends Component {

    // Usando o operador stred para crir um clone do objeto initialState e atribuir ele a state
    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }
    setOperation(operation) {
        console.log(operation)
    }
    addDigit(n) {
        // regra para evitar ter dois pontos na calculadora  
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        // valor corrente (atual)
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        // se foi digitado um valor diferente de ponto 
        if (n !== '.') {

            // pege o indice do valor alterado
            const i = this.state.current
            // convertendo o indice para float
            const newValue = parseFloat(displayValue)
            // armazene esse valor em values
            const values = [...this.state.values]
            // adicionando novo valor no array com indice escolhido
            values[i] = newValue
            // e adicone o novo array dentro de state
            this.setState({ values })
            console.log(values)
        }
    }

    render() {

        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label='AC' click={this.clearMemory} triple />
                <Button label='/' click={this.setOperation} operation />
                <Button label='7' click={this.addDigit} />
                <Button label='8' click={this.addDigit} />
                <Button label='9' click={this.addDigit} />
                <Button label='*' click={this.setOperation} operation />
                <Button label='4' click={this.addDigit} />
                <Button label='5' click={this.addDigit} />
                <Button label='6' click={this.addDigit} />
                <Button label='-' click={this.setOperation} operation />
                <Button label='1' click={this.addDigit} />
                <Button label='2' click={this.addDigit} />
                <Button label='3' click={this.addDigit} />
                <Button label='+' click={this.setOperation} operation />
                <Button label='0' click={this.addDigit} double />
                <Button label='.' click={this.addDigit} />
                <Button label='=' click={this.setOperation} operation />
            </div>

        )
    }
}