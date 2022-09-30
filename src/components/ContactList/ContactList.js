import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import ContactItem from 'components/ContactItem';
import { Container } from './ContactList.styles';

export default function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <Container>
      {visibleContacts.map(({ id, name, number }, index) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            index={index}
            deleteContact={() => handleDeleteContact(id)}
          />
        );
      })}
    </Container>
  );
}
