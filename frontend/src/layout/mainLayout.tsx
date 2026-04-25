import React from "react";
import { MainLayoutProps } from "../types/main.layout.types";
import {Header} from "../components/Header";
export const MainLayout:React.FC<MainLayoutProps>=({children})=>{
    return(
        <div>
            <Header />
            {children}
        </div>
    );
}