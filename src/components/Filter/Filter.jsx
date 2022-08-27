import React from 'react';
// import PropTypes from 'prop-types';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/contactsSlice';
export { Label, Input } from '../ContactForm/ContactForm.styled';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.Filter);
  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div>
      <Label htmlFor="filter">Find contacts by name </Label>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
