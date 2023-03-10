import { useState } from "react";
import Cartao from "./components/Cartao";
import Form from "./components/Form";
import { Conatiner } from "./styles";

const App = () => {
  const [dadosCartao, setDadosCartao] = useState()

  const onValoresUpdate = (r) => {
    setDadosCartao(r);
  }

  return (
    <Conatiner>
      <Form handleValores={onValoresUpdate}/>
      {dadosCartao ? 
        <Cartao Nome={dadosCartao.nome} Numero={dadosCartao.numeroCartao} Validade={dadosCartao.dataVencimento} cvv={dadosCartao.cvv}/>
        : ''  
      }
    </Conatiner>
  )
}

export default App;
