import { React, useState } from "react";
import styled from "styled-components";
import Loader from "./loader";
import Card from "./card";

import { useDispatch, useSelector } from "react-redux";
import { getusersData } from "../redux/actionCreator";

const NavBar = styled.div`
  border-bottom: 1px solid black;
  color: white;
  height: 90px;
  display: flex;
`;
const Logo = styled.img`
  height: 60px;
  margin: 10px;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: auto;
  height: 50px;
  padding: 10px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Wrapper = styled.div``;
const Pagination = styled.div`
  display: flex;
  margin-left: 42%;
`;
const Navigation = styled.button`
  padding: 5px;
  border: 2px solid palevioletred;
  margin: 10px;
  border-radius: 3px;
  color: palevioletred;
`;
function Navbar() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const usersData = useSelector((state) => state.usersRecords);
  const isLoading = useSelector((state) => state.isLoading);
  const isSuccess = useSelector((state) => state.isSuccess);
  const pagination = useSelector((state) => state.pagination);
  const next = useSelector((state) => state.usersNext);

  const handleData = () => {
    setTimeout(() => {
      dispatch(getusersData(page));
    }, 1000);
  };

  const pageUp = () => {
    if (page <= next.page) {
      setPage(page + 1);
      handleData();
    }
  };
  const pagedown = () => {
    if (page !== 1) {
      setPage(page - 1);

      handleData();
    }
  };

  return (
    <>
      <NavBar>
        <Logo src="https://www.stylex.in/img/logo.png" />
        <Button onClick={handleData}>Get Users Data</Button>
      </NavBar>
      <Wrapper>
        {isLoading ? <Loader /> : null}
        {pagination ? (
          <Pagination>
            <Navigation onClick={pagedown}>PREV</Navigation>
            <Navigation onClick={pageUp}>NEXT</Navigation>
          </Pagination>
        ) : null}
        {isSuccess ? <Card data={usersData} /> : null}
      </Wrapper>
    </>
  );
}

export default Navbar;
