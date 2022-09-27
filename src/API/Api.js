import axios from "axios"
import { useDispatch } from "react-redux"
import { sampleAction, fillTextAction} from "../redux/slice"

export const getPet = (search) => {
    let status = "available,pending,sold"
    if (search?.available === true) {
        status = "available"
    } else if (search?.pending === true) {
        status = "pending"
    } else if (search?.sold === true) {
        status = "sold"
    }
    return (dispatch) => {
        axios.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`).then((res) => {        
            //storing response to reducer -action   
            dispatch(fillTextAction(res.data))
        })
    }
}
export const createPet =(reqData)=>{
    return(dispatch)=>{
        axios.post("https://petstore.swagger.io/v2/pet/",reqData).then((res)=>{
            dispatch(fillTextAction(res.data))
            console.log("res",res.data);
        })
    }
}
export const updatePetList=(form)=>{
    return (dispatch)=>{
        axios.put('https://petstore.swagger.io/v2/pet',form).then((res)=>{
            dispatch(fillTextAction(res.data))
        })
    }
}
export const deleteList = (id) => {
    return(dispatch)=>{
        axios.delete(`https://petstore.swagger.io/v2/pet/${id}`).then((res)=>{
            dispatch(fillTextAction(res.data))
            console.log(res,"res")
        })
    }

}