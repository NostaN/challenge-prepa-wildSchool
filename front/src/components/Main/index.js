import React from 'react';
import PropTypes from 'prop-types';

// Import style
import './style.scss';

const Main = ({argonautesList}) => (
    <main>

    <h2>Ajouter un(e) Argonaute</h2>
    <form className="new-member-form">
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input id="name" name="name" type="text" placeholder="Charalampos" />
        <button type="submit">Envoyer</button>
    </form>
    
    <h2>Membres de l'équipage</h2>
    <section className="member-list">
        {argonautesList.map((argonaute) => (
        <ul>
            <li key={argonaute.id} className="member-item">{argonaute.name}</li>
        </ul>
        ))}
    </section>
    </main>
);

Main.propTypes = {
    argonautesList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Main;