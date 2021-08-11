import React from "react";
import CardPlans from "../../Components/CardPlans/CardPlans";
import Starter from "../../assets/starter.svg";
import Premium from "../../assets/premium.svg";
import Proffessional from "../../assets/proffessional.svg";

import { ContainerPlans, CardsPlan } from "./Plans.elements";

const Plans = (props) => {
  return (
    <ContainerPlans>
      <CardsPlan>
        <CardPlans
          imagem={Starter}
          titulo="Starter Business"
          preco="$23"
          item1="Create a free website Connect Domain"
          item2="Connect Domain"
          item3="Business and ecommerce"
          item4="dea for smaller professional websites"
          item5="Web space"
        />
        <CardPlans
          imagem={Proffessional}
          titulo="Proffessional"
          preco="$23"
          item1="Create a free website Connect Domain"
          item2="Connect Domain"
          item3="Business and ecommerce"
          item4="dea for smaller professional websites"
          item5="Web space"
        />
        <CardPlans
          imagem={Premium}
          titulo="Premium"
          preco="$23"
          item1="Create a free website Connect Domain"
          item2="Connect Domain"
          item3="Business and ecommerce"
          item4="dea for smaller professional websites"
          item5="Web space"
        />
      </CardsPlan>
    </ContainerPlans>
  );
};

export default Plans;
