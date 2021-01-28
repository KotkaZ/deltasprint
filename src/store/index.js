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
        setTask: (state, task) => state.currentTask = task,
    },
    actions: {
        async signinParticipant({ commit, dispatch }, participant) {
            const response = await axios.post(`${apiURL}/participants`, participant);
            localStorage.setItem('accessToken', response.data.accessToken);
            dispatch('fetchTask');
            commit('setParticipant', participant)
        },
        async fetchCompetitions({ commit }) {
            const response = await axios.get(`${apiURL}/competitions`);
            commit('setCompetitions', response.data);
        },
        async fetchTask({ commit, getters }) {
            const response = await axios.get(`${apiURL}/questions`, {
                headers: { 'accessToken': getters.getAccessToken }
            });
            commit('setTask', response.data[0])
        },
        async submitResult({ commit, getters }, formData) {
            await axios.post(`${apiURL}/answers`,
                formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accessToken': getters.getAccessToken
                    }
                }).then(function() {
                commit()
            }).catch(function() {})
        }
    },
    modules: {}
})