import { createStore } from 'vuex';

import axios from 'axios';
const apiURL = "http://localhost:3000";

export default createStore({
    state: {
        currentParticipant: null,
        currentCompetition: null,
        currentTask: null,
        availableCompetitions: null,
    },
    getters: {
        getParticipant: state => state.currentParticipant,
        getCompetition: state => state.currentCompetition,
        getTask: state => state.currentTask,
        getCompetitions: state => state.availableCompetitions,
        getAccessToken: () => localStorage.getItem('accessToken')

    },
    mutations: {
        setParticipant: (state, currentParticipant) => state.currentParticipant = currentParticipant,
        setCompetitions: (state, competitions) => state.availableCompetitions = competitions,
        setCompetition: (state, competition) => state.currentCompetition = competition,
        setTask: (state, task) => state.currentTask = task,
        setAccessToken: (accessToken) => localStorage.setItem('accessToken', accessToken)
    },
    actions: {
        async signinParticipant({ commit }, currentParticipant) {
            const response = await axios.post(`${apiURL}/participants`, currentParticipant);
            commit('setAccessToken', response.data);
        },
        setCompetition({ commit }, competition) {
            commit('setCompetition', competition)
        },
        async fetchCompetitions({ commit }) {
            const response = await axios.get(`${apiURL}/competitions`);
            commit('setCompetitions', response.data);
        },
        async fetchTask({ commit }) {
            const response = await axios.get(`${apiURL}/answers`, {
                headers: {
                    'accessToken': this.getAccessToken
                }
            });
            commit('setTask', response.data)
        },
        async submitResult({ commit }, formData) {
            await axios.post(`${apiURL}/answers`,
                formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accessToken': this.getAccessToken
                    }
                }).then(function() {
                commit()
            }).catch(function() {})
        }
    },
    modules: {}
})