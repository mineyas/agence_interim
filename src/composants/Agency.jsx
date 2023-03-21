import React from "react";

import AgencyList from "./admin/AgencyList";
import CreateContractCard from "./agency/CreateContractCard";
import DrawerAgency from "./agency/DrawerAgency";

export default function Agency() {
  return (
    <div>
      <DrawerAgency
        children={
          <div>
            <AgencyList />
            <CreateContractCard/>
          </div>
        }
      />
    </div>
  );
}
