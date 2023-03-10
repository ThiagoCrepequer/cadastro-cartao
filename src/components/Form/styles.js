import styled from "styled-components";

const SectionFormulario = styled.section`
    width: 40%;
    background-color: #F2F2F2;
    padding: 20px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;

    h1 {
        diplay: block;
        margin: 0 auto;
    }

    div {
        display: flex;
    }

    .CVV {
        margin-left: 10px;
        width: calc(100% - 10px);
    }
`

export {SectionFormulario}