import { Meta } from "@storybook/react";
import React from "react";
import {CardLayout }from '../../Components/Card/Card'
interface Props{

}
export const Card:React.FC<Props> = () => {   
    return(<>{[1,2,3].map(()=><CardLayout/>)}</>)
}
export default {    component: Card,    title: 'Components/Card',} as Meta;