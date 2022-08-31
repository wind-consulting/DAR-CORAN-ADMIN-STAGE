import React  from "react";
import { Route, Switch } from "react-router-dom";
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar';
import routes from 'routes.js';

function Admin() {
    const mainPanel = React.useRef(null);
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
          if (prop.layout === "/admin") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={(props) => <prop.component {...props} />}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      };
    return (
    
          <div className="wrapper">
       
            <div className="main-panel" ref={mainPanel}>
              <Sidebar  />
              <div className="content">
                <Switch>{getRoutes(routes)}</Switch>
              </div>
              <Footer />
            </div>
          </div>
          );
}

export default Admin;
