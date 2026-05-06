import { useState, useEffect } from "react";

export function useMeals() {
    const [meals , setMeals] = useState([])
    const[loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(()=>{
        async function fetchData() {
            try {
                setLoading(true)
                setError(null)
                const url = "https://api.freeapi.app/api/v1/public/meals"
                const options = {
                    method : "GET",
                    headers : {accept : "application/json"}
                }
                const response = await fetch(url, options)
                if(!response.ok){
                    throw new Error(`API Error : ${response.status}`)
                }  
                const data = await response.json()
                setMeals(data.data.data)
                
            } catch (err) {
                setError(err.message || "Failed to fetch data")
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    return {meals , loading , error }

}