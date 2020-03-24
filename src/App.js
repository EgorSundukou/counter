import React, {useState} from 'react';
import './App.css';
import Counters from "./Counters";
import AddCounterForm from "./AddCounterForm";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ConfirmationDelete from "./ConfirmationDelete";

function App() {

    const InitialCountersState = [
        {id: 123, name: '1', count: 2},
        {id: 234, name: '2', count: 5},
        {id: 345, name: '3', count: 8},
        {id: 456, name: '4', count: 48},
    ];

    const [counters, setCounters] = useState(InitialCountersState);
    const [confirmCounter, setConfirmCounter] = useState({});

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

    function removeConfirmed() {
        const newCounters = counters.filter(el => el.id !== confirmCounter.id);
        setCounters(newCounters);
        setConfirmCounter({})

    }

    function confirmRemoveCounter(counter) {
        setConfirmCounter(counter);

    }

    function confirmDeleteCancel(counter) {
        setConfirmCounter({});
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
                key={el.id}
                counter={el}
                increment={incrementCounter}
                decrement={decrementCounter}
                remove={confirmRemoveCounter}


            />)
            }
            <hr/>

            <AddCounterForm onSubmit={addCounter}/>

            <Button color="primary">primary</Button>{' '}


            <ConfirmationDelete
                name={confirmCounter.name}
                onSuccess={removeConfirmed}
                onCancel={confirmDeleteCancel}
            />

        </div>

    );
}

export default App;
