import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"

const Cart = () => {
    const {state,setState} = useContext(UserContext)
    const [total,setTotal] = useState(0)
    const handlePlus=(id)=>{
      const newState =   state.map((x)=>
        {
            if(x.id === id){
                return  {...x, qty:x.qty+1}
            }
            else{
                return x
            }
        }
        
            );
            
            setState(newState)
    }
    const handleMinus=(id)=>{
        
        const newState = state.map((x)=>
            {
                if(x.id===id) {
                   
                return  {...x, qty:x.qty-1}
                }else{
                    return x
                }
            }    
            )
        setState(newState)
    }
    const handleRemove = (id)=>{
       const newState =  state.filter(item=>item.id !==id)
       setState(newState)
    }
    const Totalprice = ()=>{
        setTotal(0)
        state.map((item)=>{
            console.log(state);
            setTotal(prev=>prev+item.price*item.qty)
        })
    }
    useEffect(()=>{
        Totalprice()
    },[state])
 
  return (
    <div className="container">
        <div className="row  bg-light justify-content-center align-items-center p-5">

            {state.length === 0  ? <h1>Your Cart is Empty</h1> : ""}
            
            {state.map((item)=>{
                    
               return(
                    <>
                     <div className="col-md-6  text-white mt-3 mb-3"><img src={item.image} alt={item.title} height='300px' width='300px' /></div>
                    <div className="col-md-6 text-white">
                    <p className="lead fw-bold fs-2 text-dark">{item.title}</p>
                    <p className="lead fw-bold fs-3 text-dark">{item.qty} x ${item.price} = ${item.qty*item.price}</p> 
                    
                        <div className="d-flex lead">
                            <button className="btn btn-outline-dark fw-bold fs-4" onClick={()=>{
                                if(item.qty >1){
                                    handleMinus(item.id)
                                    
                                }
                                else{
                                    handleRemove(item.id)
                                }
                                
                            }}><i className="fa fa-minus"></i></button>
                            <button className="btn btn-outline-dark fw-bold fs-4 ms-2" onClick={()=>{
                                handlePlus(item.id)
                            }}><i className="fa fa-plus" ></i></button>
                        </div>
                    </div>
                    <hr />
                    </>
                )
            })}
           <div className="row">
            <div className="col-md-6"><p className="fs-3 fw-bold m-2">Total:  $ {total}</p></div>
            <div className="col-md-6"><button className="btn btn-dark p-3">Buy products</button></div>
            {/* <p className="fs-3 fw-bold">Total:  $ {total}</p>
            <button className="btn btn-dark">Buy products</button> */}
           </div>
        </div>
    </div>
  )
}

export default Cart