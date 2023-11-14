import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PhoneBookInputContainer,
  PhoneBookInputLabel,
  PhoneBookInput,
} from '../phoneBookStyled';
import { selectFilter } from 'Redux/phoneBook/selectors';
import { setFilter } from 'Redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <PhoneBookInputContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.7 }}
    >
      <PhoneBookInputLabel>You can filter contacts here: </PhoneBookInputLabel>
      <PhoneBookInput
        value={filter}
        placeholder="Feel free to filter contacts..."
        onChange={handleFilterInput}
        name="filter"
        title="Filtering contact list by name or number."
      />
    </PhoneBookInputContainer>
  );
};

export default Filter;
