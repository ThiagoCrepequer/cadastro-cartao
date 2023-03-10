import { useEffect, useState } from "react"
import Button from "../Button"
import Input from "../Input"
import { SectionFormulario } from "./styles"

const Form = ({handleValores}) => {
    const [values, setValues] = useState({
        nome: '',
        numeroCartao: '',
        dataVencimento: '',
        cvv: ''
    })

    const handleChange = (valor, nome) => {
        const value = valor.target.value;
        if(nome === 'dataVencimento') {
            // Formata em somente numeros
            const newValue = value.replace(/[^\d]/g, '');

            // Separa com uma / e limita a 2 digitos antes e depois da /
            let formattedValue = '';
            if (newValue.length > 2) {
              formattedValue += newValue.substr(0, 2) + '/';
                       formattedValue += newValue.substr(2, 2);
            } else {
              formattedValue = newValue;
            }

            return setValues(prev => ({...prev, [nome]: formattedValue}))
        }
        if (nome === 'numeroCartao') {
            // Remove tudo que não é número
            const newValue = value.replace(/[^\d]/g, '');

            // Limita ao maximo de 16 caracteres
            if (newValue.length > 16) {
                return;
              }
        
            // Formata a string como "xxxx xxxx xxxx xxxx"
            let formattedValue = '';
            for (let i = 0; i < newValue.length; i++) {
              if (i % 4 === 0 && i > 0) {
                formattedValue += ' ';
              }
              formattedValue += newValue[i];
            }
        
            return setValues(prev => ({...prev, [nome]: formattedValue}));
          } 

          if(nome === 'cvv') {
            // Remove tudo que não é número
            const newValue = value.replace(/[^\d]/g, '');

            // Limita em 3 caracteres
            if(newValue.length > 3) {
                return
            }
            return setValues(prev => ({...prev, [nome]: newValue}));
          }
          setValues(prev => ({...prev, [nome]: value}))
    }
    

    useEffect(() => {
        handleValores(values)
    }, [values, handleValores])

    return (
        <SectionFormulario>
          <h1>Pagamento</h1>
            <form>
                <Input onChange={(r) => handleChange(r, 'nome')} placeholder="Digite o nome do titular do cartão">Nome</Input>
                <Input value={values.numeroCartao} onChange={(r) => handleChange(r, 'numeroCartao')} placeholder="Digite os números do cartão">Número do cartão</Input>
                <div>
                    <Input value={values.dataVencimento} onChange={(r) => handleChange(r, 'dataVencimento')} placeholder="mm/aa">Data de vencimento</Input>
                    <Input value={values.cvv} onChange={(r) => handleChange(r, 'cvv')} placeholder="CVV">CVV</Input>
                </div>
                <Input onChange={(r) => handleChange(r, 'cpf')} placeholder="Digite seu CPF">CPF</Input>
                <Button>Enviar</Button>
            </form>
        </SectionFormulario>
    )
}

export default Form