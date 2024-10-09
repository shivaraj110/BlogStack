import axios from "axios"
import { useEffect, useState } from "react"
import { backnedUrl } from "../config/url"

export const useUsername = () => {
    const [userName,setUserName] = useState("n")
    useEffect(()=>{
        axios.get(`${backnedUrl}/api/v1/user/details`,
            {
                headers : {
                    Authorization :  "Bearer " + localStorage.getItem("token"),
                    "Content-Type" : "application/json"
                }
            }
        ).then(res => setUserName(res.data.details.name))
    })
    return userName
}