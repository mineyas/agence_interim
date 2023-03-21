import React from "react";

import AgencyList from "./admin/AgencyList";
import DrawerAdmin from "./admin/DrawerAdmin";


export default function Admin() {

  return (
    <div>
      <DrawerAdmin
        children={
          <div>
            <AgencyList />
          </div>
        }
      />
    </div>
  );
}
