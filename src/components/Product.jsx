import { useContext, useEffect, useReducer, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { UserContext } from "../context/userContext"

const Product = () => {
    const {id} = useParams()
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const {state,setState} = useContext(UserContext)
   const  handleCart = ()=>{
        // setState([...state,{...product}])
        const exist = state.find((x)=>x.id === product.id)
        if(exist){
        state.map((x)=>
                x.id === product.id ? {...x, qty:x.qty++} : x
            );
            console.log(state);
        }
        else{
            setState([...state,{...product,qty:1}])
            console.log(state);
        }
        
    } 
    console.log(state);
    useEffect(()=>{
        const getProduct = async()=>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    },[])
    
    const Loading = ()=>{
        return(
            <>
                 <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <div className="row">
                        <div className="col-md-2">
                        <Skeleton height={50} width={100} />
                        </div>
                        <div className="col-md-2">
                        <Skeleton height={50} width={100} style={{marginLeft:6}} />
                        </div>
                    </div>
                   
                </div>
                
            </>
        )
    }
    const ShowProduct=()=>{
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height='400px' width='400px' />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating   {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                       $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={handleCart}>Add to Cart</button>
                    <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2" onClick={()=>navigate('/cart')}>Go to Cart</Link>
                </div>
                
            </>
        )
    }
  return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product