import jwt_decode from "jwt-decode";

const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  try {
    const user = jwt_decode(token);
    return user;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
