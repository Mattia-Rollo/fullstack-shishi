import { Component } from 'react';

function Card (props) {
  

    
        return (
       
        <div className="col" style={{textAlign: "center"}}>
          <div className="card shadow" >
          <button className="btn btn-primary shadow-lg " 
                onClick={() => props.onIncrement(props.card)}>Aggiungi
                <span className='badge bg-light text-dark    ms-2'>{props.card.quantità}</span>
                </button>
            <img src={props.card.immagine} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.card.nome} Roll</h5>
                <p className="card-text">€{props.card.prezzo.toFixed(2)}</p>
                <button className="btn btn-outline-danger shadow-lg" 
                // per passare degli argomenti alla funzione in react per forza bisogno di usare un arrow function, altrimenti se non devo passare argomenti posso sempricemente usare
                // props.onDelete()
                onClick={() => props.onDelete(props.card.id)}>Elimina</button>
            </div>
            </div>
        </div>
        );
    
}

export default Card;