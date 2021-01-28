import { createStore } from 'vuex';

import axios from 'axios';
const apiURL = "http://localhost:3000";

export default createStore({
    state: {
        currentParticipant: null,
        currentCompetition: null,
        currentTask: null,
        availableCompetitions: null,
        accessToken: null
    },
    getters: {
        getParticipant: state => state.currentParticipant,
        getCompetition: state => state.currentCompetition,
        getTask: state => state.currentTask,
        getCompetitions: state => state.availableCompetitions,
        getAccessToken: state => state.accessToken

    },
    mutations: {
        setParticipant: (state, currentParticipant) => state.currentParticipant = currentParticipant,
        setCompetitions: (state, competitions) => state.availableCompetitions = competitions,
        setCompetition: (state, competition) => state.currentCompetition = competition,
        setTask: (state, task) => state.currentTask = task,
        setAccessToken: (state, accessToken) => state.accessToken = accessToken
    },
    actions: {
        async signinParticipant({ commit }, currentParticipant) {
            const response = await axios.post(`${apiURL}/participants`, currentParticipant);
            localStorage.setItem('accessToken', response.data);
            commit('setStudent', response.data);
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
                    'participant_id': this.getStudent.id,
                    'competition_id': this.competition.id
                }
            });
            commit('setTask', response.data)
        },
        async submitResult({ commit }, formData) {
            await axios.post(`${apiURL}/answers`,
                formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'participant_id': this.getStudent.id,
                        'competition_id': this.competition.id
                    }
                }).then(function() {
                commit()
            }).catch(function() {})
        }
    },
    modules: {}
})