
const MIN_COORD = -20;
const MAX_COORD = 20;
const DEPTH = 2;

import punten from './formats/catapult.json';
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
 const coords = flipped2.map(([x , y])  => [x / 8, y / 8, 0]);
 const randomFromInterval = (min, max) => {
    return Math.random() * (max - min) + min;
}



import aboutpunten from './formats/About.json';
    const aboutxCoords = aboutpunten.map(coord => coord[0]);
    const aboutyCoords = aboutpunten.map(coord => coord[1]);
    function aboutflipHorizontal(coordinates) {
        return coordinates.map(coord => [coord[0] * -1, coord[1]]);
    }
    function aboutflipVertical(coordinates) {
        return coordinates.map(coord => [coord[0], coord[1] * -1]);
    }
    const about_coords = aboutpunten.map(([x , y])  => [x / 8, y / 8, 0]);

// if the point coordinates are outside of the letter B, they will be placed randomly in the 3D space



const NUM_POINTS = 1500;


const pointsInner = coords.map((position, idx) => ({
    idx: idx + 1,
    position, 
    index: idx
}));
const aboutpointsInner = about_coords.map((position, idx) => ({
    idx: idx + 1,
    position, 
    index: idx
}));

export { pointsInner, aboutpointsInner };

