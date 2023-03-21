import React from "react";
import DrawerUser from "./user/DrawerUser";
import UserContractList from "./user/UserContractList";
import UserContactCards from "./user/UserContactCards";

function User() {
  return (
    <div>
      <DrawerUser
        children={
          <div>
            <UserContractList />
            <UserContactCards />
          </div>
        }
      />
    </div>
  );
}

export default User;
