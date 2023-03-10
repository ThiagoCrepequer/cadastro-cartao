import styled from "styled-components";

const InputEstilo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    input {
        padding: 16px;
        font-size: 16px;
        border: none;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
        margin: 10px 0;
        width: 100%;
        border-radius: 5px;
    }

    label {
        font-size: 20px;
    }
`

export {InputEstilo}