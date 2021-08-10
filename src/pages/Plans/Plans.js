import React from "react";
import CardPlans from "../../Components/CardPlans/CardPlans";
import Starter from '../../assets/starter.svg'
import {
    ContainerPlans
  
  } from "./Plans.elements";

const Plans = (props) => {
    return (
        <ContainerPlans>
            <CardPlans imagem={Starter} titulo="Starter Business" preco="$23" item1="Create a free website Connect Domain" item2="Connect Domain" item3="Business and ecommerce" item4="dea for smaller professional websites" item5="Web space"   />
        </ContainerPlans>
        
    )
}

export default Plans