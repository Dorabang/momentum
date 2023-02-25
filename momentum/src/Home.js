import React from "react";
import PropTypes from "prop-types";
import Clock from "component/Clock";
import Quotes from "component/Quotes";
import Weather from "component/Weather";
import Todo from "component/Todo";
import { Greeting } from "style/style";

const Home = ({ savedUsername }) => {
  return (
    <>
      <Greeting>Hello, {savedUsername}!</Greeting>
      <Clock />
      <Quotes />
      <Weather />
      <Todo />
    </>
  );
};

Home.propTypes = {
  savedUsername: PropTypes.node.isRequired,
};

export default Home;
