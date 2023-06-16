import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FormSection from "../../components/formSection/FormSection";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/rightHeaderSection/Header";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col bg-neutral-300 h-[2308px]">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Header></Header>
      <div>
        <FormSection></FormSection>
      </div>
    </div>
  );
};

export default Dashboard;
