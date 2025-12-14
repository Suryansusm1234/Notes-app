const colourarray = [
    {
        tailwind: "bg-green-400",
        folderColor: "#05df72",
        accentColor: "#008236",
    },
    {
        tailwind: "bg-red-400",
        folderColor: "#ff6467",
        accentColor: "#c10007",
    },
    {
        tailwind: "bg-yellow-200",
        folderColor: "#fee685",
        accentColor: "#d4aa00",
    },
    {
        tailwind: "bg-pink-400",
        folderColor: "#fda5d5",
        accentColor: "#e60076",
    }
]

const hexgen = (prop)=>{ 
    const index = colourarray.findIndex(item => item.tailwind === prop)
    if (index === -1) {
        console.error(`Color class ${prop} not found in colourarray.`);
        return { folderColor: '#FFFFFF', accentColor: '#CCCCCC' }; 
    }
    const data = {
        folderColor: colourarray[index].folderColor,
        accentColor: colourarray[index].accentColor,
    }
    return data
}
export default hexgen