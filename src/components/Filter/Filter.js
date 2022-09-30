import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';
import { Label, FilterInput } from './Filter.styles';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(addFilter(e.target.value));

  return (
    <Label>
      Find contacts by name
      <FilterInput value={filter} onChange={onChange} />
    </Label>
  );
}
