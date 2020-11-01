import { createSlice } from "@reduxjs/toolkit";
// import { UserInterface } from "./UserInterface";

// const INITIAL_STATE:UserInterface={
//     firstname:'',
//     lastname:'',
//     age:18,
//     email:'',
//     phone:''
// }

const UserSlice=createSlice({
    name:"user",
    initialState:{
        firstname:'',
        lastname:'',
        age:18,
        email:'',
        phone:''
    },
    reducers:{
        addFirstname:(state,action)=>{
            state.firstname=action.payload;
        },
        addLastname:(state,action)=>state.lastname=action.payload,
        addAge:(state,action)=>state.age=action.payload,
        addEmail:(state,action)=>state.email=action.payload,
        addPhone:(state,action)=>state.phone=action.payload,
    }
    
})

export const {addFirstname,addLastname,addAge,addEmail,addPhone}=UserSlice.actions;
export default UserSlice.reducer;