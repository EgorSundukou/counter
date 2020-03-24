import React, {useState} from 'react';
import './App.css';

function Counters(props) {
    const {counter, increment, decrement, remove} = props;

    return (
        <div className='card mb-2' >
            <div className='card-body'>
                <div className="row">

                    <div className="col">
                        ID {counter.id}
                    </div>
                    <div className="col">
                        Counter name {counter.name}
                    </div>

                    <div className="col">
                    <button className="btn btn-secondary" onClick={() => decrement(counter.id)}>-</button>

                    <strong>{counter.count}</strong>

                    <button className="btn btn-secondary" onClick={() => increment(counter.id)}>+</button>
                    </div>

                    <div className="col">
                    <button className="btn btn-danger" onClick={() => remove(counter)}>Delete
                    </button>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Counters;