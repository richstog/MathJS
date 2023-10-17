// WIDTH = ширина
// HEIGHT = высота


// BASE CONSTANTS
const BLOCK_WIDTH = 20
const BLOCK_HEIGHT = 20

// BASE FUNCTIONS
function createClearMap(width, height) {
    let map = []
    for (let i=0; i < height; i++) {
        map.push([])
        for (let j=0; j < width; j++) {
            map[i].push('-')
        }
    }
    return map
}



let map_matrix = createClearMap(15, 15)

console.log(map_matrix)



