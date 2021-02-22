import React from 'react';
import axios from 'axios';

// Import style
import './style.scss';

const PopUp = ({
    displayPopUp, getAllArgonautes,
    argonauteSelectedName, argonautesList, setPopUp
 }) => {

    // Déclaration de ma requête pour supprimer un argonaute de la liste
    const deleteNameToArgonautesList = () => {
        // une fonction qui nous renvoie l'id de l'argonaute sélectionné
        const argonauteSelected = (argonautesList.find(argonaute => argonaute.name === argonauteSelectedName));
        console.log(argonauteSelected);
        // Je récupère l'id de l'argonaute sélectionné pour l'utiliser dans ma requête
        const argonauteSelectedId=argonauteSelected.id;

        const config = {
            method: 'delete',
            url: `https://wildschool-challenge-argonaute.herokuapp.com/list/${argonauteSelectedId}`,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          };
    axios(config)
     .then((response) => {
      console.log(response.data);
      setPopUp(false);
      getAllArgonautes();
    })
    .catch((error) => {
      console.log('error', error);
    });
};

    return (
        <>
        <div className="popup-background" />
        <div className="popup">
            <p className="popup__message">Voulez vous supprimer ou conserver cette argonaute dans l'équipage ?</p>
            <div className="popup__buttonsContainer" >
                <button
                    className="popup__buttonsContainer__button"
                    type="button"
                    onClick={displayPopUp}
                >
                mmmmh allez, on le garde !
                </button>
                <button
                    className="popup__buttonsContainer__button"
                    type="button"
                    onClick={() => deleteNameToArgonautesList()}
                >
                Retirer cette participation ...
                </button>
            </div>
        </div>
        </>
    );
}

export default PopUp;