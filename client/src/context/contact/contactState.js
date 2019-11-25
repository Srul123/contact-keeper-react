import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Srul the first",
        email: "srul@gmail.com",
        phone: "0525-322167",
        type: "personal"
      },
      {
        id: 2,
        name: "Inbal the princes",
        email: "inbal@gmail.com",
        phone: "050-6803868",
        type: "personal"
      },
      {
        id: 3,
        name: "David the second",
        email: "david@gmail.com",
        phone: "054-6784321",
        type: "professional"
      }
    ]
  }; 

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set current Contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return ( 
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;