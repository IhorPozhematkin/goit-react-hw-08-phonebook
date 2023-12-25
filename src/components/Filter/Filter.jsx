import { FilterField, Wrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterAction } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import { Title } from 'pages/ContactsPage/ContactsPage.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(updateFilterAction(e.target.value));
  };

  return (
    <Wrapper>
      <Title>Find contacts by name</Title>
      <FilterField type="text" value={filter} onChange={handleFilter} />
    </Wrapper>
  );
};
