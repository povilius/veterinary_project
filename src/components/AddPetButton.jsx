import PropTypes from "prop-types";
import styled from 'styled-components'

const AddPetButton = (props) => {
  return (
    <StyledButton className="button" {...props}>
      {props.children}
    </StyledButton>
  );
};

AddPetButton.propTypes = {
  children: PropTypes.node,
};

export default AddPetButton


const StyledButton = styled.button`
  color: white;
  background-color: #fc8119;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 5px;
  transition: 300ms;
  border: none;
  width: 104%;

  &:hover {
    background-color: #c4691e;
    cursor: pointer;
  }
`