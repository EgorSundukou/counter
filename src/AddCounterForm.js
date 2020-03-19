import React, {useState} from 'react';

function AddCounterForm(props) {

    const [name, setName] = useState('---');
    const [count, setCount] = useState(456);



    return (
        <div >
            <input type="text" name='name' value={name}
                   onChange={e => setName(e.target.value)} />

            <input type="number" name='count' value={count}
                   onChange={e => setCount(e.target.value)} />

            <button onClick={() => props.onSubmit(name, count)}>Add</button>


        </div>
    );
}
export default AddCounterForm;