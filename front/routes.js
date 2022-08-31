
import Reports from "pages/Reports.js";
import Login from "pages/Login.js";
import Icons from "pages/Icons.js";
const dashboardRoutes = [
  {
    upgrade: true,
    path: "/reports",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Reports,
    layout: "/admin"
  },
  
  {
    path: "/login",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/Icons",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: Icons,
    layout: "/admin"
  },
 
 

];

export default dashboardRoutes;
