import { useEffect, useState } from "react";
import { CartaoEstilo, BandeiraNome, ContainerChipCartao, TituloCartao } from "./styles";

const Cartao = ({Nome, Numero, Validade, cvv}) => {
    const [bandeiraCartao, setBandeiraCartao] = useState()
    const [nomeCartao, setNomeCartao] = useState()

    useEffect(() => {
        const ArrayNumerosCartao = Numero.split('')
        const PrimeiroNumero = ArrayNumerosCartao[0]

        if(PrimeiroNumero === '3') {
            setBandeiraCartao('/bandeiras-cartao/american-express.jpg')
            setNomeCartao('American Express')
        }else if(PrimeiroNumero === '4') {
            setBandeiraCartao('/bandeiras-cartao/visa.jpg')
            setNomeCartao('Visa')
        }else if(PrimeiroNumero === '5') {
            setBandeiraCartao('/bandeiras-cartao/mastercard.png')
            setNomeCartao('MasterCard')
        }else if(PrimeiroNumero === '6') {
            setBandeiraCartao('/bandeiras-cartao/discover.png')
            setNomeCartao('Discover Card')
        } else {
            setBandeiraCartao('/bandeiras-cartao/desconhecido.png')
            setNomeCartao('Desconhecido')
        }
    }, [Numero])

    return (
        <CartaoEstilo>
            <TituloCartao>Cartão {nomeCartao}</TituloCartao>
            <ContainerChipCartao>
                <img src="/chip-cartao.jpg" alt="chip de cartão" width="50px"/>
            </ContainerChipCartao>
            <p className="numero-cartao">{Numero === '' ? '1234 5678 9101 1121' : Numero}</p>
            <p className="">{Validade === '' ? '31/01' : Validade}</p>
            <BandeiraNome>
                <div className="nome-titular">
                    <p>{Nome === '' ? 'Nome do titular' : Nome}</p>
                </div>
                <div className="bandeira-cartao">
                    <img src={bandeiraCartao} height='20px' alt="Bandeira do cartão"/>
                </div>
            </BandeiraNome>
            
        </CartaoEstilo> 
    )
}

export default Cartao