import { createContext,useState ,useEffect} from "react";
import Usedelete from "./deletehook";
import Usepost from "./posthook";
import Useput from "./puthook";
import Useget from "./getdatahook";



let Context=createContext()
let Contextprovider=({children})=>{
  

    const [get,setget]=useState(null)
    const [post,setpost]=useState(null)
    const [put,setput]=useState(null)
    const [delet,setdelete]=useState(0)
    const[loading,setloading ]=useState(false)
    const [datafinal,setdatafinal]=useState([])
    const [datadel,setdelefinal]=useState([])
    const [datasend,setdatasend]=useState([])
    const[datastore,setdatastore]=useState([])
    
    console.log("put",put)
    
    
    // ------------------------------------------------put------------------------------
    useEffect(()=>{
        async function putopt(edit){
            try{
                setloading(true)
                const{original,updated}=edit                
            const edited=await Useput({original,updated})
            setdelefinal(edited) 
            }catch(e){
                console.log(e.message)
            }finally{
                setloading(false)
            }
        } 
        if(put){
            putopt(put)
        }
    },[put])
    // --------------------------------------------delete--------------------------------------------
    // console.log(delet)
    useEffect(()=>{
        const dele=async (data)=>{
            // console.log("data",data)
            setloading(true)
            try{
                let deletop=await Usedelete(data)
                setdatastore((prevDatastore) => prevDatastore.filter(item => item !== data));          
            }catch(e){
                console.log(e)
            }finally{
                setloading(false)
            }
        }
        if(delet){
            dele(delet)
        }
    },[delet])
    
// ----------------------------------------------------post-------------------------------------
    
useEffect(()=>{
    const posts=async (data)=>{
    setloading(true)  
    // console.log("data=",data)
    try{
        const postop= await Usepost(data)
        // console.log("sended",postop)
    
    console.log("postop=",postop)
    setloading(false)
   if(postop){
    setdatafinal((p)=>[postop])
   }   
    }catch(e){
        // console.log("error",e)
        return e.message
    }
}
    posts(post)
},[post])
// ---------------------------------------------------get--------------------------------------------
useEffect(()=>{
    async function getdata(){
        setloading(true)
       try{    
            const finaldata=await Useget()
            if(finaldata){
               
               
                const product=finaldata.map((d,i,e)=>{
                   
                    return d.name
                })

            
                setdatastore(product)
            }

        
       }catch(e){
        console.log("error=",e.message)

       }finally{
        setloading(false)
       }
    }
    
        getdata();
    
},[datafinal,datadel])
useEffect(()=>{
   if(datastore){
    setdatasend(datastore)
   }
},[datastore,datadel])
    return(
        <Context.Provider value={{get,setget,post,setpost,put,setput,delet,setdelete,loading,datasend}}>
            {children}
        </Context.Provider>
    )
}

export{Context,Contextprovider }