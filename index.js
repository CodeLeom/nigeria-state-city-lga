const nigeriaData  = require('./data/nigeria.json');

// internal: normalize and find state by name (case-insensitive, trimmed)
const findState = (stateName) => {
    if (typeof stateName !== 'string') return undefined;
    const normalized = stateName.trim().toLowerCase();
    if (!normalized) return undefined;
    return nigeriaData.states.find(s => String(s.name).toLowerCase() === normalized);
};

// Get All States
const getStates = () => {
    return nigeriaData.states.map(state => state.name);
};
  
// Get All States and Capitals
const getStatesAndCapitals = () => {
    return nigeriaData.states.map(state => {
        return {
            state: state.name,
            capital: state.capital
        };
    });
};

// Get LGAs of a Specific State
const getLgas = (state) => {
    const selectedState = findState(state);
    return selectedState ? selectedState.lgas : [];
};

// Get Towns of a Specific State
const getTowns = (state) => {
    const selectedState = findState(state);
    return selectedState ? selectedState.towns : [];
};

// Get State Capital
const getCapital = (state) => {
    const selectedState = findState(state);
    return selectedState ? selectedState.capital : '';
};
  
// Get a full state record
const getState = (state) => {
    const selectedState = findState(state);
    return selectedState ? { ...selectedState } : null;
};

// Get all states data
const getStatesData = () => {
    return nigeriaData.states.map(s => ({ ...s }));
};

module.exports = {
    getStates,
    getStatesAndCapitals,
    getLgas,
    getTowns,
    getCapital,
    getState,
    getStatesData
};