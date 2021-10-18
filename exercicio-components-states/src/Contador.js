import React, {useState} from "react";
import './Contador.css'

export default function Contador(){
    const[num, setNum] = useState(0);
    return(
        <div>
            <h1 className="count">Contador : {num}</h1>
            <button className="soma" onClick={() => setNum(num+5)}>Somar</button>
            
            <button className="subtrai" onClick={() => setNum(num - 3)}>Subtrair</button>
            
            <button className="zeraCount" onClick={() => setNum(0)}>Zerar Contagem</button>

        </div>
    )
}