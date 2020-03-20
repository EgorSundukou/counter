import React, {useState} from 'react';
import './App.css';

function Counters(props) {
    const {counter, increment, decrement, remove} = props;

    return (
        <div className='card mb-2' >
            <div className='card-body'>
                <div className="row">

                    <div className="col">
                        ID {props.id}
                    </div>
                    <div className="col">
                        Counter name {props.name}
                    </div>

                    <div className="col">
                    <button className="btn btn-secondary" onClick={() => props.decrement(props.id)}>-</button>

                    <strong>{props.count}</strong>

                    <button className="btn btn-secondary" onClick={() => props.increment(props.id)}>+</button>
                    </div>

                    <div className="col">
                    <button className="btn btn-danger" onClick={() => props.remove(props.id)}>Delete
                    </button>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Counters;