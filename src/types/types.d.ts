import { ExecOptionsWithStringEncoding } from "child_process";
import { IconType } from "react-icons";

export interface SideBarMenuItem{
    id:string;
    label: string;
    icon: IconType;
    url:string;
}

export interface SideBarMenuCard{
    id: string;
    displayName: string;
    photo: string;
    title: string;
    url: string;
}