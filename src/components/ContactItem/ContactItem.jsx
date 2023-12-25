import { useDispatch } from 'react-redux';
import { ButtonDelete, Item, ContactText } from './ContactItem.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <Item>
      <ContactText>
        {contact.name}: {contact.number}
      </ContactText>
      <ButtonDelete type="button" onClick={onDeleteContact}>
        Delete
      </ButtonDelete>
    </Item>
  );
};
