import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      //store token
      
      if (data.success) {
        
        console.log(data.user)
        localStorage.setItem("token", data.token);
        localStorage.setItem("user",JSON.stringify(data.user))

        window.location.assign("/dashboard");
        
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
//register
export const userRegister = createAsyncThunk(
    "auth/register",
    async (
      {
        firstName,
        lastName,
        role,
        email,
        password,
        dateOfBirth ,
        postalCode,
            phoneNumber
        
      },
      { rejectWithValue }
    ) => {
      try {
        const { data } = await API.post("/auth/register", {
            firstName,
            lastName,
            role,
            email,
            password,
            dateOfBirth,
            postalCode,
            phoneNumber
        });
        if (data?.success) {
          window.location.replace("/login")
         // toast.success("User Registerd Successfully");
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );

  export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async({rejectWithValue}) => {
      try {
        const res = await API.get('/auth/current-user')
        if(res?.data){
          return res?.data;
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  )

  export const addCenter = createAsyncThunk(
    'auth/addCenter',
    async({city,centerName,centerAddress},{rejectWithValue}) =>{
      try {
        const {data} = await API.post('/auth/addCenter',{city,centerName,centerAddress})
        if(data?.success){
          alert(data.message)
          window.location.replace("/add-donor-centers")
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  )