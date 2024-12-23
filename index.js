const nigeriaData  = require('./nigeriaData');

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
    const selectedState = nigeriaData.states.find(s => s.name.toLowerCase() === state.toLowerCase());
    return selectedState ? selectedState.lgas : [];
};

// Get Towns of a Specific State
const getTowns = (state) => {
    const selectedState = nigeriaData.states.find(s => s.name.toLowerCase() === state.toLowerCase());
    return selectedState ? selectedState.towns : [];
};

// Get State Capital
const getCapital = (state) => {
    const selectedState = nigeriaData.states.find(s => s.name.toLowerCase() === state.toLowerCase());
    return selectedState ? selectedState.capital : '';
};
  
// Get Towns of a Specific LGA
const getLgaTowns = (state, lga) => {
    const selectedState = nigeriaData.states.find(s => s.name.toLowerCase() === state.toLowerCase());
    const selectedLga = selectedState.lgas.find(l => l.name.toLowerCase() === lga.toLowerCase());
    return selectedLga ? selectedLga.towns : [];
};

module.exports = {
    getStates,
    getStatesAndCapitals,
    getLgas,
    getTowns,
    getCapital,
    getLgaTowns
};