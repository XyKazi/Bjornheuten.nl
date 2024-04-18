
const MIN_COORD = -20;
const MAX_COORD = 20;
const DEPTH = 2;

import punten from './formats/letterB.json';
import Jpunten from './formats/letterJ.json';
import Opunten from './formats/letterO.json';
import Rpunten from './formats/letterR.json';
import Npunten from './formats/letterN.json';

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
 const coords = flipped2.map(([x , y])  => [x / 10, y / 10, 0]);



const JxCoords = Jpunten.map(coord => coord[0]);
const JyCoords = Jpunten.map(coord => coord[1]);
const JcurrentCenterX = JxCoords.reduce((sum, val) => sum + val, 0) / JxCoords.length;
const JcurrentCenterY = JyCoords.reduce((sum, val) => sum + val, 0) / JyCoords.length;

const JshiftedCoordinates = Jpunten.map(coord => [coord[0] - JcurrentCenterX, coord[1] - JcurrentCenterY]);
const Jflipped2 = flipVertical(JshiftedCoordinates);
const Jcoords = Jflipped2.map(([x , y])  => [x / 15, y / 15, 0]);

const OxCoords = Opunten.map(coord => coord[0]);
const OyCoords = Opunten.map(coord => coord[1]);
const OcurrentCenterX = OxCoords.reduce((sum, val) => sum + val, 0) / OxCoords.length;
const OcurrentCenterY = OyCoords.reduce((sum, val) => sum + val, 0) / OyCoords.length;

const OshiftedCoordinates = Opunten.map(coord => [coord[0] - OcurrentCenterX, coord[1] - OcurrentCenterY]);
const Oflipped2 = flipVertical(OshiftedCoordinates);
const Ocoords = Oflipped2.map(([x , y])  => [x / 15, y / 15, 0]);

const RxCoords = Rpunten.map(coord => coord[0]);
const RyCoords = Rpunten.map(coord => coord[1]);
const RcurrentCenterX = RxCoords.reduce((sum, val) => sum + val, 0) / RxCoords.length;
const RcurrentCenterY = RyCoords.reduce((sum, val) => sum + val, 0) / RyCoords.length;

const RshiftedCoordinates = Rpunten.map(coord => [coord[0] - RcurrentCenterX, coord[1] - RcurrentCenterY]);
const Rflipped2 = flipVertical(RshiftedCoordinates);
const Rcoords = Rflipped2.map(([x , y])  => [x / 15, y / 15, 0]);

const NxCoords = Npunten.map(coord => coord[0]);
const NyCoords = Npunten.map(coord => coord[1]);
const NcurrentCenterX = NxCoords.reduce((sum, val) => sum + val, 0) / NxCoords.length;
const NcurrentCenterY = NyCoords.reduce((sum, val) => sum + val, 0) / NyCoords.length;

const NshiftedCoordinates = Npunten.map(coord => [coord[0] - NcurrentCenterX, coord[1] - NcurrentCenterY]);
const Nflipped2 = flipVertical(NshiftedCoordinates);
const Ncoords = Nflipped2.map(([x , y])  => [x / 15, y / 15, 0]);


// if the point coordinates are outside of the letter B, they will be placed randomly in the 3D space



const NUM_POINTS = 1500;


const pointsInner = coords.map((position, idx) => ({
    idx: idx + 1,
    position, 
}));

const JpointsInner = Jcoords.map((position, idx) => ({
    idx: idx + 1,
    position, 
}));

const OpointsInner = Ocoords.map((position, idx) => ({
    idx: idx + 1,
    position, 
}));
const RpointsInner = Rcoords.map((position, idx) => ({
    idx: idx + 1,
    position, 
}));

const NpointsInner = Ncoords.map((position, idx) => ({
    idx: idx + 1,
    position,
}));


export { pointsInner , JpointsInner, OpointsInner, RpointsInner, NpointsInner};

