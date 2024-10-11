import { userRegister, userLogin, addCenter } from "../redux/features/auth/authActions"
import store from "../redux/store"

export const handleLogin = (e,email,password,role) =>{
    e.preventDefault()
    try {
        if (!role || !email || !password) {
            
            return alert("Please Privde All Feilds");
          }
          console.log(role + email + password)
          store.dispatch(userLogin({ email, password, role }));
        
        
    } catch (error) {
        
    }
}
export const handleRegister = (e,firstName,lastName,email,password,dateOfBirth,role,postalCode,phoneNumber) =>{
    e.preventDefault()
    try {
        store.dispatch(
            userRegister({
                firstName,
        lastName,
        role,
        email,
        password,
        dateOfBirth,
        postalCode,
        phoneNumber
            })
        )
        console.log("register", email)
    } catch (error) {

        console.log(error)
    }
}

export const handleAddCenter = (e,city,centerName,centerAddress) => {
    e.preventDefault();
    
    try {
        store.dispatch(addCenter({city,centerName,centerAddress}))
    } catch (error) {
        console.log(error)
    }
}