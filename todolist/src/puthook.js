async function Useput(data){
    const{original,updated}=data
    try{
        const response=await fetch(`https://server-todo-list-170l.onrender.com/${original}`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({name:updated})
        }
    )
    if(response.ok){
        const result=await response.json()
        return result
    }else{
        console.log("error=",response)
        return response
    }
    }catch(e){
        console.log(e.message)
    }
}
export default Useput;