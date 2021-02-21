import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import PropTypes from 'prop-types';

// Import style
import './style.scss';

const Form = ({ getAllArgonautes }) => {
    const handleSubmit = (event) => {
        // on empêche le rechargement de la page
        event.preventDefault();
        // handleSubmit va nous permettre de déclencher notre requête post avec axios
        addNameToArgonautesList(name);
        // J'en profite pour vider le champ de l'input
        setName('');
    }

    const addNameToArgonautesList = (name) => {
        // On se sert du package qs pour mettre les datas du body de notre requête
        // dans la forme désirée
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
      console.log(response.data);
      getAllArgonautes();
    })
    .catch((error) => {
      console.log('error', error);
    });
};

    // Utilisation du hook useState pour déclarer la valeur saisie par l'utilisateur
    // = le name d'argonaute à ajouter à la liste
    const [name, setName] = useState('');

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