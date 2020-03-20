import React, {useState} from 'react';
import './App.css';
import Counters from "./Counters";
import AddCounterForm from "./AddCounterForm";

function App() {

    const InitialCountersState = [
        {id: 123, name: 'Counter 1', count: 2},
        {id: 234, name: 'Counter 2', count: 5},
        {id: 345, name: 'Counter 3', count: 8},
        {id: 456, name: 'Counter 4', count: 48},
    ];

    const [counters, setCounters] = useState(InitialCountersState);

    function resetTotalCount() {
        const newCounters = counters.map(el => ({...el, count: 0}));
        setCounters(newCounters);
    }

    function decrementCounter(id) {
        console.log('DECR ' + id);
        const newCounters = counters.map(el => (el.id === id) ? {...el, count: el.count - 1} : el);
        setCounters(newCounters);

    }

    function incrementCounter(id) {
        const newCounters = counters.map(el => (el.id === id)? {...el, count: el.count + 1} : el);
        setCounters(newCounters);

    }

    function removeCounter(id) {
        const newCounters = counters.filter(el => el.id !== id);
        setCounters(newCounters);

    }

    function addCounter(name, count) {

        const newCounters = [...counters, {
            id: Math.random(),
            name,
            count: count
        }];
       setCounters(newCounters);

    }


    return (
        <div className="container">
            <h1>Counters</h1>
            Total {counters.reduce((acc, cur) => acc + cur.count, 0)}
            <button class="btn btn-primary" onClick={resetTotalCount}>Reset Total count</button>
            <hr/>

            {
                counters.map(el => <Counters
                key={el.id} id={el.id} name={el.name} count={el.count}
                increment={incrementCounter}
                decrement={decrementCounter}
                remove={removeCounter}


            />)
            }
            <hr/>

            <AddCounterForm onSubmit={addCounter}/>

        </div>
    );
}

export default App;
