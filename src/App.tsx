import React from 'react';
import {SideBarMenu} from "./components/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import {FcTwoSmartphones, FcBriefcase, FcServices  } from "react-icons/fc";
import profileImage from './93792446_10158273533988631_8999942237479501824_n.jpeg';

function App() {
  const items: SideBarMenuItem[] = [
     {
       id:'1',
       label:'Servicios',
       icon: FcServices,
       url:"/",
     },
     {
      id:'2',
      label:'Proyectos',
      icon: FcBriefcase,
      url:"/",
    },
    {
      id:'3',
      label:'Contacto',
      icon: FcTwoSmartphones,
      url:"/",
    },
  ];
  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: 'Iván Serrano',
    title: 'Enginner',
    photo: profileImage,
    url:"/",
  };
  return (
    <div>
      <SideBarMenu items={items} card={card}/>
    </div>
  );
}

export default App;
