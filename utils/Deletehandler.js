export function deleteFolder({ folder, id }) {
    const newArray = folder.filter(value => value.id !== id);
    return newArray;
}

export function deleteNotes({notes , id}){
    const newArray = notes.filter(value => value.id !== id);
    return newArray;
}
