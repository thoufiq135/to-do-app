async function Useget(){
try{
    const response=await fetch("https://server-todo-list-170l.onrender.com/",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    if(response.ok){
        const result=await response.json()
        return result;
    }else{
        return response
    }
}catch(e){
    return e
}
}


export default Useget;