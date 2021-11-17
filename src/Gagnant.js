import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gagnant({ candidats, showResults }) {
    const [gagnant, setGagnant] = useState('');


    function calculerGagnant() {
        let idGagnant;
        let maxCount = 0;
        candidats.map(candidat => {
            if (candidat.count > maxCount) {
                maxCount = candidat.count;
                idGagnant = candidat.id;
            }
        })
        candidats.map(candidat => {
            if (idGagnant === candidat.id) {
                /*  return candidat; */
                setGagnant(candidat);

            }
        })


    }

    return (
        <div>
            <div>
                <Button variant="success" size="lg" onClick={calculerGagnant} >Show the winner</Button>
            </div>
            {gagnant.name} <br />

        </div>
    );
}