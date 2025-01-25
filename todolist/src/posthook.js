async function Usepost(da){
    try{
        const response=await fetch("https://server-todo-list-170l.onrender.com/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name:da})
        }) ;
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);}
            console.log("response=",response)
            const result = await response.json();
            return result;
        
        
    } catch (e){
        return e.message;
    }
}
export default Usepost;