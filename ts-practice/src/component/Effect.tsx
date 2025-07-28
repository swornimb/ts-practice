import { useEffect, useState } from "react"
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

function Effect() {

  const [data, setData] = useState<Product|null>(null)

  useEffect(()=>{
    const fetchData = async ()=>{
        try{
           const response = await fetch("https://dummyjson.com/product/1");
           const result:Product = await response.json();
           setData(result)

        }catch(error){
            console.log(error)
        }
    }
    fetchData()

  },[])
  return (
    <div>
        {data?(<div>
        <p>{data.id}</p>
        <p>{data.description}</p>
            </div>):("loading")}
    </div>
  )
}

export default Effect