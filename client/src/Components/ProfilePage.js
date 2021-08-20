import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

function ProfilePage() {
  const [userData, setUserData] = useState([]);
  const history = useHistory();
  const user_id = localStorage.getItem("id");
  console.log(user_id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${user_id}`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong.");
        return history.push("/");
      });
  }, []);

  return (
    <div className="section profile-content">
      <p>{userData}</p>
    </div>
  );
}

export default ProfilePage;
