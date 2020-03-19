import React, {useState} from 'react';

function Counter(props) {
    return (
        <div >
            ID {props.id}
            Counter name {props.name}
            <button onClick={() =>props.decrement(props.id)}>-</button>
            {props.count}
            <button onClick={() => props.increment(props.id)}>+</button>
            <button onClick={() => props.remove(props.id)}>Delete</button>


        </div>
    );
}
export default Counter;