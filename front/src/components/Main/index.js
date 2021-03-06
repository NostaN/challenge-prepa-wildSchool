import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Import components
import Form from './Form';
import PopUp from './PopUp';

// Import Utils
// import getArgonauteSelected from '../../utils/getArgonauteSelected';

// Import style
import './style.scss';

const Main = () => {

    // Utilisation du hook useState pour déclarer le tableau de argonautesList
    // setArgonautesList est la fonction qui nous permettra de modifier sa valeur
    // le paramètre de useState est la valeur par défaut que l'on souhaite donner
    const [argonautesList, setArgonautesList] = useState([]);
    // Déclaration d'un booleen pour montrer une popup de confirmation
    // si l'utilisateur clique sur un nom, afin de le rétirer de la liste
    const [popUp, setPopUp] = useState(false);
    const displayPopUp = (argonauteSelectedName) => {
        setPopUp(!popUp);
        setArgonauteSelectedName(argonauteSelectedName)
    };

    // j'utilise useState pour récupérer le name l'argonaute au click
    const [argonauteSelectedName, setArgonauteSelectedName] = useState([]);


    // Déclaration de ma requête pour récupérer la liste des Argonautes
    const getAllArgonautes = (() => {
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
    })

    // Utilisation d'un hook d'effet (équivalent de componentDidMount)
    // pour générer nos datas au chargement avec un appel à l'API par axios
    useEffect(() => {
        getAllArgonautes();
    }, []);

    return(
    <main>
    <h2>Ajouter un(e) Argonaute</h2>
        <Form
        setArgonautesList={setArgonautesList}
        argonautesList={argonautesList}
        getAllArgonautes={getAllArgonautes}
        />
    <h2>Membres de l'équipage</h2>

    <section className="member-list">
        {argonautesList.map((argonaute) => (
        <ul key={argonaute.id}>
            <li
            type="button"
            onClick={(event) => displayPopUp(event.target.textContent)}
            // ici j'ouvre la popUp et je récupère le nom de l'argonaute au click
            className="member-item"
            >
            {argonaute.name}
            </li>
        </ul>
        ))}
    </section>
    {popUp === true
        && <PopUp
        // argonauteSelectedId={argonauteSelected.id}
        popUp={popUp}
        setPopUp={setPopUp}
        displayPopUp={displayPopUp}
        getAllArgonautes={getAllArgonautes}
        setArgonautesList={setArgonautesList}
        argonauteSelectedName={argonauteSelectedName}
        argonautesList={argonautesList}
        />}
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