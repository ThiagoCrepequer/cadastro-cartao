import styled from "styled-components";

const CartaoEstilo = styled.div`
    width: 450px;
    height: 270px;
    border: 1px solid black;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-left: 50px;
    font-family: 'Orbitron', sans-serif;

    p {
        margin: 0;
        display: block;
    }
    
    .numero-cartao {
        font-size: 26px;
        letter-spacing: 3px;
    }
`

const TituloCartao = styled.h1`
    color: rgba(0,0,0, 0.7);
    font-size: 26px;
`

const BandeiraNome = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 30px;

    .nome-titular {
        display: inline-flex;
        width: 70%;
        align-items: start;
    }

    .bandeira-cartao {
        display: inline-flex;
        width: 30%;
        justify-content: end;

        img {
        }
    }
`

const ContainerChipCartao = styled.div`
    margin-top: 20px;
    width: 100%;
`


export {CartaoEstilo, BandeiraNome, ContainerChipCartao, TituloCartao}