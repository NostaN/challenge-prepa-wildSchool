import React, { useState } from 'react';
import axios from 'axios';
// import FormData from 'form-data';
import qs from 'qs';
import PropTypes from 'prop-types';

// Import style
import './style.scss';

const Form = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        // on empêche le rechargement de la page
        event.preventDefault();
        // on appel la prop onSubmit
        // handleSubmit va nous permettre de déclencher notre requête post avec axios
        addNameToArgonautesList(name);
    }

    const [argonautesList, setArgonautesList] = useState([]);

    const addNameToArgonautesList = (name) => {
        // const form = new FormData();
        // form.append('name', name);
        const data = qs.stringify({ 'name': name })
        const config = {
            method: 'post',
            url: 'https://wildschool-challenge-argonaute.herokuapp.com/list',
            data : data,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          };
    console.log(config);
    axios(config)
     .then((response) => {
    // response = réponse HTTP complete (config, options, header,...)
    // response.data = le corps (JSON) de notre réponse
    // response.data.items = le tableau items que l'on veut (les repos quoi)
    // setRepos : on modifie la case repos dans notre state.
      //setRepos(response.data.items);
      console.log(response.data);
      setArgonautesList(response.data.push(argonautesList));
    })
    .catch((error) => {
      console.log('error', error);
    });
};

    const [name, setName] = useState('');
    console.log('name :', name)



    return (
    <form
        className="new-member-form"
        onSubmit={handleSubmit}
    >
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input
            className="new-member-form-input"
            id="name"
            name="name"
            type="text"
            placeholder="Charalampos"
            value={name}
            onChange={(event) => {
                // event.target.value = la saisie de l'utilisateur
                setName(event.target.value);
                console.log(event.target.value);
            }}
        />
        <button className="new-member-form-button" type="submit">Envoyer</button>
    </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func,
}

export default Form;