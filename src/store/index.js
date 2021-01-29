import { createStore } from 'vuex';

import axios from 'axios';
const apiURL = "http://localhost:3000";

export default createStore({
    state: {
        accessToken: localStorage.getItem('token') || '',
        availableCompetitions: null,
        participant: null,
        question: null,
    },
    getters: {
        getAccessToken: state => state.accessToken,
        getCompetitions: state => state.availableCompetitions,
        getParticipant: state => state.participant,
        getQuestion: state => state.question,
        getStatus: state => state.status
    },
    mutations: {
        setAccessToken: (state, accessToken) => state.accessToken = accessToken,
        setCompetitions: (state, competitions) => state.availableCompetitions = competitions,
        setParticipant: (state, participant) => state.participant = participant,
        setQuestion: (state, question) => state.question = question,
    },
    actions: {
        async signinParticipant({ commit }, participant) {
            try {
                const response = await axios.post(`${apiURL}/participants`, participant)

                const accessToken = response.data.accessToken;
                const participantInfo = response.data.participant;

                localStorage.setItem('accessToken', accessToken);
                axios.defaults.headers.common['accessToken'] = accessToken;

                commit('setAccessToken', accessToken);
                commit('setParticipant', participantInfo);
            } catch (error) {
                localStorage.removeItem('accessToken');
                delete axios.defaults.headers.common['accessToken'];
                throw error;
            }
        },
        async fetchCompetitions({ commit }) {
            try {
                const response = await axios.get(`${apiURL}/competitions`);
                commit('setCompetitions', response.data);
            } catch (error) {
                console.log(error);
            }

        },
        async fetchTask({ commit }) {
            try {
                const response = await axios.get(`${apiURL}/questions`);
                commit('setTask', response.data[0]);
            } catch (error) {
                console.log(error);
            }

        },
        async fetchParticipant({ commit }) {
            try {
                const response = await axios.get(`${apiURL}/participants`);
                commit('setParticipant', response.data[0]);
            } catch (error) {
                console.log(error);
            }

        },
        async submitResult(formData) {
            try {
                await axios.post(`${apiURL}/answers`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data', }
                });

            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
})