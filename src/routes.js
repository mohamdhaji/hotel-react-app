import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/hoc/layout";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import ContactUs from "./pages/ContactUs";

export default function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/contact" component={ContactUs} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/facilities" component={Facilities} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}
