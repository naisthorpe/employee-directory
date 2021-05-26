import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Search from "./components/Search";
import EmployeeListTable from "./components/EmployeeListTable";
import EmployeeListItem from "./components/EmployeeListItem";
import './App.css';

function App() {
  return (
    <Wrapper>
      <Header />
      <Search />
      <EmployeeListTable />
      <EmployeeListItem />
    </Wrapper>
  );
}

export default App;
