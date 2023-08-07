import { selector } from "recoil";
import { userState } from "../../atoms/user";

export const usersName = selector({
    key: "usersName",
    get: ({get})=>{
        const user = get(userState);
        return user.name;
    }
})