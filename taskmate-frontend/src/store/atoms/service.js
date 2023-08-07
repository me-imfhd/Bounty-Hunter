import {atom} from "recoil";

export const serviceState = atom({
    key: "serviceState",
    default:{
        isLoading: true,
        service: null
    }
})