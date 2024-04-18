
const MIN_COORD = -20;
const MAX_COORD = 20;
const DEPTH = 2;

import punten from './formats/Skills.json';
    const xCoords = punten.map(coord => coord[0]);
    const yCoords = punten.map(coord => coord[1]);
    function flipHorizontal(coordinates) {
        return coordinates.map(coord => [coord[0] * -1, coord[1]]);
    }
    function flipVertical(coordinates) {
        return coordinates.map(coord => [coord[0], coord[1] * -1]);
    }


    const currentCenterX = xCoords.reduce((sum, val) => sum + val, 0) / xCoords.length;
    const currentCenterY = yCoords.reduce((sum, val) => sum + val, 0) / yCoords.length;
    
 const shiftedCoordinates = punten.map(coord => [coord[0] - currentCenterX, coord[1] - currentCenterY]);
 const flipped = flipHorizontal(shiftedCoordinates);
 const flipped2 = flipVertical(shiftedCoordinates);
 const coords = flipped2.map(([x , y])  => [x / 12, y / 12, 0]);
 const randomFromInterval = (min, max) => {
    return Math.random() * (max - min) + min;
}

// if the point coordinates are outside of the letter B, they will be placed randomly in the 3D space



const NUM_POINTS = 1500;


const pointsInner = coords.map((position, idx) => ({
    idx: idx + 1,
    position, 
}));


export { pointsInner };

