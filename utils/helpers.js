const { npsUrl, apiKey } = require('../config/connection');

module.exports = {

    get_by_StateCode: async (stateCode) => {
        const url = `${npsUrl}parks?stateCode=${stateCode}&api_key=${apiKey}`;
        const parksData = await fetch(url);
        return parksData.json();
    },

    //parkCode is array of the parkCodes for the fetch call
    get_by_ParkCode: async (parkCodes) => {
        const parkCodeStr = parkCodes.join('%20'); //apply a space in the url parameters
        const url = `${npsUrl}parks?q=${parkCodeStr}&limit=${parkCodes.length}&api_key=${apiKey}`;
        const parksData = await fetch(url);
        return parksData.json();
    },
};
