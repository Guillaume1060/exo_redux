import { createReducer } from "@reduxjs/toolkit";
import { deleteVoyage, saveVoyage } from "../actions/voyages.actions";
import countries from "../../data/data";

const initialState = {
  data: countries,
};

const voyageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteVoyage, (state, action) => {
      // Ajouter new voyage (push)
    })
    .addCase(saveVoyage, (state) => {
      state.voyages.selected = !state.voyages.selected;
    });
});

export default voyageReducer;
