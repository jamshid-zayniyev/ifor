import { useContext } from "react"
import { UserContext } from "../context/userContext"

const Cart = () => {
    const {state,setState} = useContext(UserContext)
    const handlePlus=(id)=>{
        console.log("sa");
        state.map((x)=>
        x.id === id ? {...x, qty:x.qty++} : x
    );
    
    
    }
  return (
    <div className="container">
        <div className="row  bg-light justify-content-center align-items-center p-5">
            {state.map((item)=>{
                return(
                    <>
                     <div className="col-md-6  text-white mt-3 mb-3"><img src={item.image} alt={item.title} height='300px' width='300px' /></div>
                    <div className="col-md-6 text-white">
                    <p className="lead fw-bold fs-2 text-dark">{item.title}</p>
                    <p className="lead fw-bold fs-3 text-dark">{item.qty} x ${item.price} = ${item.qty*item.price}</p> 
                        <div className="d-flex lead">
                        
                            <button className="btn btn-outline-dark fw-bold fs-4 m-3"><i className="fa fa-minus"></i></button>
                            <button className="btn btn-outline-dark fw-bold fs-4 m-3"><i className="fa fa-plus" onClick={()=>handlePlus(item.id)}></i></button>
                        </div>
                    </div>
                    <hr />
                    </>
                )
            })}
           
        </div>
    </div>
  )
}

export default Cart