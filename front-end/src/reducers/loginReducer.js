// Importation de la fonction createReducer de Redux Toolkit et des actions associées
import { createReducer } from '@reduxjs/toolkit';
import { loadApiToken, loadApiTokenError, loadApiTokenSuccess } from "../actions/loginAction";

// État initial du reducer
const initialStateToken = {
    isLoading: false,
    token: '',
    tokenExist: '',
    error: '',
};

// Reducer
export const tokenReducer = createReducer(initialStateToken, (builder) => {
    return builder
        // Gestion de l'action loadApiToken
        .addCase(loadApiToken, (draft) => {
            // Lorsque loadApiToken est déclenchée, mettre isLoading à true et réinitialiser les autres propriétés
            draft.isLoading = true;
            draft.token = '';
            draft.tokenExist = '';
            draft.error =  '';
            return;
        })
        // Gestion de l'action loadApiTokenSuccess
        .addCase(loadApiTokenSuccess, (draft, action) => {
            /***  Lorsque loadApiTokenSuccess est déclenchée, mettre isLoading à false, mettre à jour token avec la valeur de l'action, marquer que le token existe (tokenExist à true), et réinitialiser les erreurs ***/
            draft.isLoading = false;
            draft.token = action.payload;
            draft.tokenExist = true;
            draft.error =  '';
            return;
        })
        // Gestion de l'action loadApiTokenError
        .addCase(loadApiTokenError, (draft, action) => {
            /***  Lorsque loadApiTokenError est déclenchée, mettre isLoading à false, réinitialiser token, marquer que le token n'existe pas (tokenExist à false), et stocker l'erreur dans error ***/
            draft.isLoading = false;
            draft.token = '';
            draft.tokenExist = false;
            draft.error = action.payload;
            return;
        });
});
