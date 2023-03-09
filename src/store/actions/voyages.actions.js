import { createAction } from "@reduxjs/toolkit";

// export const addVoyages = createAction("voyages/addVoyages", (data) => {
//   payload: {
//     //...
//   }
// });

export const deleteVoyage = createAction("voyages/deleteVoyage");

export const saveVoyage = createAction("voyages/saveVoyage");
