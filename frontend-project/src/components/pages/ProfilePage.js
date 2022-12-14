import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {

  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const editProfile = () => {
    navigate("/editprofileuser")
  }

  const deleteUser = () => {
    fetch(`/users/${user._id}`,{method:"DELETE", headers:{
      token:localStorage.getItem("token")
    }})
    .then(res=>res.json())
    .then(result=>{
      if(result.success){
        setUser(null)
        localStorage.removeItem("token")
        navigate("/signup")
      }
    })
  }

const deleteOrder = (id) => {
  fetch(`/order/${id}`,{
    method:"DELETE", 
    headers:{token: localStorage.getItem("token")},
  })
  .then(res => res.json())
  .then(result => {
    if(result.success){
      setUser(result.data)
    }
  })
};

  return (
    <div>
    <h1>Profile</h1>
    {user && <> 
    <h2>{user.fullName}</h2>
    <h3>{user.email}</h3>
     <p>{user.firstName}</p>
      <img src={user.profileImage} width="300" alt="profileImage" />
    <h2>User Orders </h2>
    <ul>
      {user.orders.map((order) => {
        return (
          <div key={order._id}>
            <h3>{order._id}</h3>
            <h4>$ {order.totalPrice}</h4>
            <button onClick={()=>deleteOrder(order._id)}>delete order</button>
          </div>
        );
      })}
    </ul>

    <button onClick={editProfile}>Update Profile</button>
    <button onClick={logout}>Logout</button>
    <button onClick={deleteUser}>Delete User</button>
    </>}
</div>  
  );
}
