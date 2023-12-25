import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone-lite';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import {
  Border,
  Button,
  ErrorMessageStyled,
  FormStyled,
  Input,
  InputBox,
  Label,
} from 'components/Form.styled';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().min(2).max(30).required('A name is required'),
  number: yup
    .string()
    .phone('UA', true, 'Invalid Ukrainian phone number')
    .required('A phone number is required'),
});

export const ContactForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addNewContact = newContact => {
    const isExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleSubmit = values => {
    addNewContact(values);
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormStyled>
        <InputBox>
          <Input type="text" name="name" required />
          <Label htmlFor="name">Name</Label>
          <Border></Border>
        </InputBox>

        <InputBox>
          <Input type="tel" name="number" required />
          <Label htmlFor="number">Phone number</Label>
          <Border></Border>
        </InputBox>

        <Button type="submit" aria-label="add contact">
          Add contact
        </Button>

        <ErrorMessageStyled name="name" component="div" />
        <ErrorMessageStyled name="number" component="div" />
      </FormStyled>
    </Formik>
  );
};
