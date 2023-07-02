import css from './Phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contactsStore = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {contactsStore.map(({ id, name, number }) => (
          <li key={id}>
            {name}: <span>{number}</span>
            <button
              onClick={() => dispatch(deleteContact(id))}
              className={css.delete}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
