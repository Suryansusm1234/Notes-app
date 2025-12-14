import dayjs from 'dayjs';
export function deleteFolder({ folder, id }) {
  let removedItem = null;

  const newArray = folder.filter(item => {
    if (item.id === id) {
      removedItem = {...item,
        type : "folder",
       date:dayjs().format('DD/MM/YYYY'),
       time:dayjs().format('HH:mm:ss dddd')
      };   
      return false;        
    }
    return true;
  });

  return {
    newArray,
    removedItem,
  };
}


export function deleteNotes({notes , id}){
    let removedItem = null
    const newArray = notes.filter(value => {
        if(value.id === id){
            value.date = dayjs().format('DD/MM/YYYY');
            value.time = dayjs().format('HH:mm:ss dddd')
            removedItem = {...value,
                type : "note"
            }
        }
    });
    return {newArray,removedItem};
}
