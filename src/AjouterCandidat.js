import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ListeCandidat from './ListeCandidat';
import ListGroup  from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function AjouterCandidat({ onAddCandidat, candidats }) {
    const [name, setName] = useState('');
    const [startedVoting, setStartedVoting] = useState(false);
    const [showAjouterCandidat, setShowAjouterCandidat] = useState(true);

    function startVoting() {
        setStartedVoting(true);
        setShowAjouterCandidat(false);
    }


    function handleClick(event) {
        setName('');
        onAddCandidat(name);
        event.preventDefault();

    }

    const renderAjouterCandidat = () => {
        if (showAjouterCandidat) {
            return (
                <div >
                <div  className="flex">
                    <Form >
                        <FormControl id='inputCandidat'
                            placeholder="Candidate's name"
                            value={name}
                            type="text"
                            onChange={event => setName(event.target.value)}
                        />
                    </Form>

                    <Button id='butonAdd' onClick={handleClick}>Add</Button>
                    </div>

                        <ListGroup>
                            {candidats.map(candidat => (
                                <ListGroup.Item key={candidat.id}>{candidat.name}
                                </ListGroup.Item>
                            ))}

                        </ListGroup >

                    <Button variant="success" size="lg" type="submit" value="ShowVoting" onClick={startVoting} >Start Vote!</Button>

                </div>
                )
        }
    }

    return (
        <>

            {renderAjouterCandidat()}
            {startedVoting ? <ListeCandidat candidats={candidats} /> : null}

        </>
    );

}
