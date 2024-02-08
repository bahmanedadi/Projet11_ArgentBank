import React from 'react';
import { NavLink } from "react-router-dom";
import argentBankLogo from "../../assets/image/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { disconnectUser } from "../../store/store";
import { useNavigate } from "react-router";

function Header() {
    // Initialisation des hooks Redux et de navigation
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Récupération du statut de connexion depuis Redux
    const selectorLogged = useSelector((state) => state.user.isLogged);
    
    // Vérification du statut de connexion basée sur Redux et le stockage local
    let isLogged;
    localStorage.getItem("userToken") ? isLogged = true : isLogged = selectorLogged;
    
    // Mise à jour du prénom de l'utilisateur dans la barre de navigation après un court délai
    setTimeout(() => {
        if (localStorage.getItem("userFirstname")) {
            document.getElementById("nav-user-firstname").textContent = localStorage.getItem("userFirstname");
        }
    }, 100);

    // Rendu de l'en-tête de navigation
    return (
        <nav className="main-nav">
            {/* Logo Argent Bank avec lien vers la page d'accueil */}
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {/* Rendu conditionnel en fonction de l'état de connexion de l'utilisateur */}
            {isLogged
                ? <div>
                    {/* Lien vers le profil de l'utilisateur avec son prénom */}
                    <NavLink to="/profile" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        <span id="nav-user-firstname">Tony</span>
                    </NavLink>
                    {/***  Lien de déconnexion ***/}
                    <NavLink to="/" className="main-nav-item" onClick={() => localStorage.getItem("Token") ? disconnect(navigate) : dispatch(disconnectUser())}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </div>
                : <div>
                    {/* Lien de connexion pour les utilisateurs non connectés */}
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            }
        </nav>
    )
}

/***  Fonction de déconnexion ***/
function disconnect(navigate) {
    /*** Effacement des données de stockage local, navigation vers la page d'accueil,
     et rechargement de la fenêtre **/
    localStorage.clear();
    navigate("/");
    window.location.reload();
}

export default Header;
