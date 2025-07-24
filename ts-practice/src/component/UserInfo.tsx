import type { Info } from '../Type'

type UserInfoData = {
    userData: Info
}

const UserInfo: React.FC<UserInfoData> = ({ userData }) => {
  return (
    <div>
      <p>{userData.id}</p>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
    </div>
  )
}

export default UserInfo