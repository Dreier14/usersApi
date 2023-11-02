import React from "react";
import { DataStore } from "./DataStore";

export const store = Object.freeze({
    dataStore: new DataStore(),
});

export const storeContext = React.createContext(store);
export const StoreProvider = storeContext.Provider;
