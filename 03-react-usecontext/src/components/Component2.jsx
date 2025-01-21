import PropTypes from "prop-types";
import Component3 from "./Component3.jsx";
const Component2 = ({ user }) => {
  return (
    <>
      <div>Component2</div>
      <Component3 user={user} />
    </>
  );
};

Component2.propTypes = {
  user: PropTypes.string,
};

export default Component2;
