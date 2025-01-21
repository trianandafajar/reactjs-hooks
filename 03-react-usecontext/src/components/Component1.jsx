import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Component2 from "./Component2.jsx";
const Component1 = ({ usr }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(usr);
  }, [usr]);
  return (
    <>
      <div>Component1</div>
      <Component2 user={user} />
    </>
  );
};

Component1.propTypes = {
  usr: PropTypes.string,
};

export default Component1;
