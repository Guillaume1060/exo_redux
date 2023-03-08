import { createReducer } from "@reduxjs/toolkit";
import { deleteVoyage } from "../actions/voyages.actions";
import countries from "../../data/data";

const initialState = {
  data: countries,
};

const voyageReducer = createReducer(initialState, (builder) => {
  builder.addCase(deleteVoyage, (state, action) => {
    // Ajouter new voyage (push)
  });
});

export default voyageReducer;
