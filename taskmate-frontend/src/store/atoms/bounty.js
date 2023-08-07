import {atom} from "recoil";

export const bountyState = atom({
    key: "bountyState",
    default:{
        isLoading: true,
        bounty: null
    }
})

