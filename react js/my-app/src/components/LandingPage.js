import { useEffect, useState } from "react";
import Axios from "axios";

function LandingPage()
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])

    const ListNames = () =>{
        return data.map((val)=>{
            return( 
            <table>
              
                    <tbody>
                       <td>
                        {val.id}
                    </td>
                    <td>
                        {val.name}
                    </td>
             
                    </tbody>
                    </table>
              
        )
          
                
            
        })
    }
    return(
        <div>
           <h1>Landing Page</h1>
             {ListNames()}
           
        </div>
    )
}
export default LandingPage;
