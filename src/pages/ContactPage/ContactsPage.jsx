import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Error } from 'components/Error/Error';
import { Layout } from 'components/Layout/Layout';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { PatchContact } from 'components/PatchContact/PatchContact';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operationsAPI';
import { deleteContact, updateContact } from 'redux/contacts/operationsAPI';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const inProgress = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const inError = useSelector(getError);
  const [editedContact, setEditedContact] = useState({});
  const [blockLayout, setBlockLayout] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = ({ id, name, number }) => {
    setEditedContact({ id, name, number });
    setBlockLayout(true);
  };

  const hidePatchContact = () => {
    if (!inProgress) {
      setBlockLayout(false);
    }
  };

  const onUpdateContact = updatedContact => {
    dispatch(updateContact(updatedContact));
    if (!inProgress) {
      setBlockLayout(false);
    }
  };

  const filteredContactsUser =
    filter.length > 0
      ? contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter)
        )
      : null;

  const contactsList = filter.length > 0 ? filteredContactsUser : contacts;

  return (
    <div className={css.container}>
      {inError && <Error message={inError} />}
      <Layout title="Add contact" blockLayoutValue={blockLayout}>
        <ContactForm />
      </Layout>

      {blockLayout ? (
        <>
          <Layout title="Edit contact">
            <PatchContact
              contact={editedContact}
              hidePatchContact={hidePatchContact}
              updateContactFunc={onUpdateContact}
            />
          </Layout>
        </>
      ) : null}

      <Layout title="All contacts" blockLayoutValue={blockLayout}>
        <Filter />

        <ContactList
          contacts={contactsList}
          editContactFunc={handleEditContact}
          deleteContactFunc={handleDeleteContact}
        />
      </Layout>
    </div>
  );
};
