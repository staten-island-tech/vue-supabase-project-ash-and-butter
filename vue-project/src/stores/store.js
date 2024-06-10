import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => ({
    loggedInUser: null,
    setLoggedInUser(user) {
        this.loggedInUser = user;
    }
}));
