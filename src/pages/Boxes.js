import { useState } from "react";
import boxes from "../data/boxes";
import Box from '../components/Box';
import React from 'react';

function Boxes() {
    const [squares, setSquares] = useState(boxes);

    const toggleStyle = ({ currentTarget: { id } }) => (
        setSquares(prevState => prevState.map(square => {
            // eslint-disable-next-line eqeqeq
            return (square.id == id) ? { ...square, on: !square.on } : square;
        }))
    );

    const squareElements = squares.map(square => {
        return <Box
            key={square.id}
            id={square.id}
            isLightOn={square.on}
            toggle={toggleStyle}
        />;
    });
    return (
        <div className='box-container'>
            {squareElements}
        </div>
    );
}

export default Boxes;