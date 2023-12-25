import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { AddButton, Title, TitleGroup, Wrapper } from './ContactsPage.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Filter />
      <TitleGroup>
        <Title>Contacts</Title>
        <AddButton
          type="button"
          aria-label="Add Contact"
          onClick={handleOpenModal}
        >
          Add contact
        </AddButton>
      </TitleGroup>
      <ContactList />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </Wrapper>
  );
};

export default ContactsPage;
