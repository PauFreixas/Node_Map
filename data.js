// data.js
const nodes = [
    {id: "Africa", type: "continent", landmass: 30},
    {id: "Antarctica", type: "continent", landmass: 14},
    {id: "Asia", type: "continent", landmass: 44},
    {id: "Europe", type: "continent", landmass: 10},
    {id: "North America", type: "continent", landmass: 24},
    {id: "South America", type: "continent", landmass: 18},
    {id: "Australia (Oceania)", type: "continent", landmass: 8},
    {id: "Atlantic Ocean", type: "ocean", surface_area: 85},
    {id: "Pacific Ocean", type: "ocean", surface_area: 168},
    {id: "Indian Ocean", type: "ocean", surface_area: 70},
    {id: "Arctic Ocean", type: "ocean", surface_area: 15}
];

const links = [
    {source: "Africa", target: "Atlantic Ocean"},
    {source: "Africa", target: "Indian Ocean"},
    {source: "Asia", target: "Indian Ocean"},
    {source: "Asia", target: "Pacific Ocean"},
    {source: "North America", target: "Atlantic Ocean"},
    {source: "North America", target: "Pacific Ocean"},
    {source: "South America", target: "Atlantic Ocean"},
    {source: "South America", target: "Pacific Ocean"},
    {source: "Australia (Oceania)", target: "Indian Ocean"},
    {source: "Europe", target: "Atlantic Ocean"}
];
