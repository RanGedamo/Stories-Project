import jwtInterceptor from "../BaseURL/baseURL";



export const getUsers = async () => {
  const response = await jwtInterceptor.get("/users")

  const user = await response.data;
  return user;
};
export const registerUser= async (data) => {
  const response = await jwtInterceptor.post("/users/register",data);
  const newLawyer = await response.data;
  console.log(newLawyer);
  return newLawyer;
};
// export const updateUser = async (data,email) => {
//     const response = await jwtInterceptor.put(`/user/${email}`,);
    
//       const newUser = await response.data;
//       return newUser;
//   };

export const loginUser = async (data) => {
    const response = await jwtInterceptor.post("/users/login",data)
    const loginUser = await response.data;
    return loginUser;
  };

  export const getUserByEmail = async (email) => {
    const response = await jwtInterceptor.get(`/users/${email}`);
  
    const user = await response.data;
    return user;
  };

  export const deleteUser = async (email) => {
    const response = await jwtInterceptor.delete(`/users/${email}`);
    const user = await response.data;
    return user;
  };

  
