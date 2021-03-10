import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ onRemoveContact, filteredContacts }) => {
  return (
    <ul className={styles.TaskList}>
      {filteredContacts.map((newContact) => (
        <li className={styles.TaskList_item} key={newContact.id}>
          {newContact.name + ": " + newContact.number}
          {
            <button
              className={styles.TaskList_button}
              type="button"
              name="delte"
              onClick={() => onRemoveContact(newContact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
