import { createStore } from 'vuex';
import CurrentCompetition from '../models/CurrentCompetition.js';

import axios from 'axios';

export default createStore({
    state: {
        currentStudent: null,
        currentCompetition: null,
        currentTask: null,
        availableCompetitions: [new CurrentCompetition("Katsetamine")],
    },
    getters: {
        getStudent: state => state.currentStudent,
        getCompetition: state => state.currentCompetition,
        getTask: state => state.currentTask,
        getAllCompetitions: state => state.availableCompetitions,

    },
    mutations: {
        setStudent: (state, currentStudent) => state.currentStudent = currentStudent,
        setCompetitions: (state, competitions) => state.availableCompetitions = competitions,
        setCompetition: (state, competition) => state.currentCompetition = competition
    },
    actions: {
        signinStudent({ commit }, currentStudent) {
            commit('setStudent', currentStudent)
        },
        setCompetition({ commit }, competition) {
            commit('setCompetition', competition)
        },
        async fetchCompetitons({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit('setCompetitions', response)
        }
    },
    modules: {}
})