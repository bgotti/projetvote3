import { useState } from 'react';
import Gagnant from './Gagnant';
import ListGroup  from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function ListeCandidat({ candidats }) {
    const [showResults, setShowResults] = useState(false)
    const [hideCandidatVote, setHideCandidatVote] = useState(true);

    function endVoting() {
        setShowResults(true);
        setHideCandidatVote(false);
    }

    const renderHideVoting = () => {

        if (hideCandidatVote) {
            return (
                <div>
                    <ListGroup>
                        {candidats.map(candidat => (
                            <ListGroup.Item key={candidat.id}>
                                {candidat.name}
                                {' '}
                                <Button onClick={() => {
                                    { candidat.count++ };
                                }}>
                                    Vote
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button variant="danger" size="lg" onClick={endVoting} >End Vote</Button>
                </div>)
        }
    }

    const renderShowScore = () => {

        if (showResults) {
            return (
                <div>
                    <ListGroup>
                {candidats.map(candidat => (
                    <ListGroup.Item key={candidat.id}>
                        {candidat.name}
                        {' '}
                        <div><strong>{candidat.count}</strong></div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
                </div>)
        }
    }

   return (
        <div>
            {renderHideVoting()}
            {renderShowScore()}

            <div>
                {showResults ? <Gagnant candidats={candidats} /> : null}

            </div>

        </div>
    );
}