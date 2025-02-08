# World Map Visualization Project

## Overview

This project aims to create a **graph-like map** of the world, where **continents** and **oceans** are represented as **nodes** and their **connections** are represented as **edges**. The continents and oceans will be scaled by their **surface area**. 

The key feature of this map is that continents are connected only to other continents that can be accessed by **land**, and all islands and landmasses connecting to bodies of water will connect to nodes representing those oceans.

## Goals

1. **Node Representation**: 
   - **Continents** will be represented as **grey nodes**, sized based on their landmass.
   - **Oceans** will be represented as **cyan nodes**, sized based on their surface area.
   
2. **Edge Representation**: 
   - **Continents** will be connected by edges if they share a land border.
   - **Continents** and **oceans** will be connected if the continent is connected to that specific ocean or if an island is inside of that ocean).
   
3. **Data Structure**:
   - The data consists of nodes (representing continents and oceans) and links (representing connections between them).
   
4. **Force-Directed Layout**:
   - The nodes will be positioned using a force-directed graph layout, where continents and oceans are placed based on their connections.
   - The graph will use a **wrap-around feature** to simulate a "torus" where nodes can appear on the opposite edge of the canvas when they move offscreen.

## Current Work

- **Nodes**:
  - We currently have 7 continents and 5 major oceans as nodes.
  - Each node's size is not yet proportional to it´s surface area (working with provisional data).
  
- **Links**:
  - Oceans are connected to the continents or islands that border or are located in that body of water.
  - Continent-to-continent connections are based on shared land borders.

## Future Goals

- **Expand the map**: 
   - Add more continents, territories, and smaller bodies of water (like the Mediterranean Sea, Baltic Sea, etc.).
   
- **Interactive Features**: 
   - Make the graph interactive, allowing users to zoom, pan, and hover over nodes to see detailed information about continents and oceans.

- **Refining the Data**: 
   - Adjust the surface areas of oceans (especially with the addition of the Southern Ocean) to maintain a fixed total surface area.
   
- **Styling and UI**: 
   - Refine the appearance of the graph, adding more visual details like continent labels, edges with different styles, and interactivity.

## Technologies Used

- **D3.js**: Used for creating the force-directed graph and handling the visualization of nodes and links.
- **JavaScript/HTML**: Core technologies for handling the project structure and rendering the visualization.

## How to View the Project  

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2. Open the `index.html` file in a web browser.

3. Modify the project as desired locally.

## License

This project is open-source and available under the [MIT License](LICENSE).
