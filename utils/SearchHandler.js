export function Searchfunction({notes , search}){
   console.log(search);
    const query = search.toLowerCase()
    if(query === "") return
    const result = notes.filter((note)=>{
        const value = note.title.toLowerCase()
        if(value.includes(query)){
            return true
        }else{
            return false
        }
    })
    console.log(result);
    
    return result
}