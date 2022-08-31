import React from "react";
import { useEffect,useState } from "react";
import{Link,useLocation}from"react-router-dom";
import './Header.css'


const Header =()=>{
    const [activeTab,setActiveTab]=useState("Teacher");

    const location =useLocation();
    useEffect(()=>{
        if (location.pathname==="/add")
        {
            setActiveTab("AddTeacher");

        }else if (location.pathname==="/addStudent"){
        setActiveTab ("AddStudent");

        }else if (location.pathname==="/addResultat"){
            setActiveTab ("AddResultat");
        
        }else if (location.pathname==="/addClasse"){
        setActiveTab ("AddClasse");
        }else if (location.pathname==="/addCour"){
            setActiveTab ("AddCours");
        }

},[location]);
  
    return(
    <div className ="header">

    <p className="logo">Teacher</p>
    <div className="header-right"></div>
    <Link to ="/add">

<p className={`${activeTab==="AddTeacher"? "active":""}`}onClick={()=>setActiveTab("AddTeacher")}>Home</p>
</Link>

    <Link to ="/addStudent">

<p className={`${activeTab==="AddStudent"? "active":""}`}onClick={()=>setActiveTab("AddStudent")}>Student</p>
</Link>
<Link to ="/addResultat">

<p className={`${activeTab==="AddResultat"? "active":""}`}onClick={()=>setActiveTab("AddResultat")}>Resultat</p>
</Link>

    <Link to ="/addNiveau">

<p className={`${activeTab==="AddNiveau"? "active":""}`}onClick={()=>setActiveTab("AddNiveau")}>Niveau</p>
</Link>
<Link to ="/addClasse">

<p className={`${activeTab==="AddClasse"? "active":""}`}onClick={()=>setActiveTab("AddClasse")}>Classe</p>
</Link>

    <Link to ="/addCour">

<p className={`${activeTab==="AddCour"? "active":""}`}onClick={()=>setActiveTab("AddCour")}>Cours</p>
</Link>
</div>
);
};

export default Header;