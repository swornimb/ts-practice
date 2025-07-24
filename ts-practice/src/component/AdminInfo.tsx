import type React from "react";
import type { Admin } from "../Type";

type AdminInfoData={
    userData: Admin
}

const AdminInfo: React.FC<AdminInfoData> = ({userData})=>{
  return (
    <div>
        <p>{userData.id}</p>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p>{userData.role}</p>
        <p>{userData.lastLogin.toDateString()}</p>
    </div>
  )
}

export default AdminInfo