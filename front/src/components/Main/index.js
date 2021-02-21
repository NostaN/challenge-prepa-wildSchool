import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Import style
import './style.scss';

const Main = () => {

    // Utilisation du hook useState pour déclarer le tableau de argonautesList
    // setArgonautesList est la fonction qui nous permettra de modifier sa valeur
    // le paramètre de useState est la valeur par défaut que l'on souhaite donner
    const [argonautesList, setArgonautesList] = useState([]);

    // Utilisation d'un hook d'effet (équivalent de componentDidMount)
    // pour générer nos datas au chargement avec un appel à l'API par axios
    useEffect(() => {
        // lorsque j'appelle axios.get, je récupere une promesse
        const promise = axios.get('https://wildschool-challenge-argonaute.herokuapp.com/list');
        // sur cette promesse, je peux m'abonner avec then
        promise
            .then((response) => { // .then = tout s'est bien passé
            // je stocke les argonautes renvoyés dans mon state
            setArgonautesList(response.data);
            console.log(response.data);
            // TODO : Ajouter un loader si on commence à avoir trop d'argonautes ... ;)
            })
            .catch((error) => { // .catch = problème
                console.error(error);
            })
            // .finally(() => {} // Je pourrais utiliser finally pour mettre du code qui sera toujours éxécuter après la requête
    }, []);


    return(
    <main>

    <h2>Ajouter un(e) Argonaute</h2>
    <form className="new-member-form">
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input className="new-member-form-input" id="name" name="name" type="text" placeholder="Charalampos" />
        <button className="new-member-form-button" type="submit">Envoyer</button>
    </form>
    
    <h2>Membres de l'équipage</h2>
    <section className="member-list">
        {argonautesList.map((argonaute) => (
        <ul key={argonaute.id}>
            <li className="member-item">{argonaute.name}</li>
        </ul>
        ))}
    </section>
    </main>
    );
}

Main.propTypes = {
    argonautesList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
};

export default Main;