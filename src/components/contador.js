import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'

export default function Contador(){
    const contador = useSelector ((state)=> state.numero);
    const dispatch = useDispatch();
    return(
        <div class="contador-cont">
            <h1>Contador de ovejas</h1>
            <h3>{contador}</h3>
            <div class="cont-botones">
                <button onClick={()=> dispatch({ type: 'INCREMENTAR'})}>+</button>
                <button onClick={()=> dispatch({ type: 'DECREMENTAR'})}>-</button>
                <button id="reset" onClick={()=> dispatch({ type: 'RESET'})}>reset</button>
            </div>
        </div>
    );
}