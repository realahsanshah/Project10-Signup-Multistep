import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "./UserInterface";

const INITIAL_STATE:UserInterface={
    firstname:'',
    lastname:'',
    age:18,
    email:'',
    phone:''
}

const UserSlice=createSlice({
    name:"user",
    initialState:INITIAL_STATE,
    reducers:{
        addFirstname:(state,action)=>{
            state.firstname=action.payload;
        },
        addLastname:(state,action)=>{
            state.lastname=action.payload
        },
        addAge:(state,action)=>{
            state.age=action.payload
        },
        addEmail:(state,action)=>{
            state.email=action.payload
        },
        addPhone:(state,action)=>{
            state.phone=action.payload
        },
        resetState:(state)=>{
            state={...INITIAL_STATE}
            console.log("state",state);
        }
    }
    
})

export const {addFirstname,addLastname,addAge,addEmail,addPhone,resetState}=UserSlice.actions;
export default UserSlice.reducer;