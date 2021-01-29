import { createStore } from 'vuex';

import axios from 'axios';
const apiURL = "http://localhost:3000";

export default createStore({
    state: {
        accessToken: localStorage.getItem('accessToken') || '',
        availableCompetitions: [],
        participant: {},
        question: {}
    },
    getters: {
        getAccessToken: state => state.accessToken,
        getCompetitions: state => state.availableCompetitions,
        getParticipant: state => state.participant,
        getQuestion: state => state.question,
    },
    mutations: {
        setAccessToken: (state, accessToken) => state.accessToken = accessToken,
        setCompetitions: (state, competitions) => state.availableCompetitions = competitions,
        setParticipant: (state, participant) => state.participant = participant,
        setQuestion: (state, question) => state.question = question,
    },
    actions: {
        async signinParticipant({ commit, dispatch }, participant) {
            try {
                const response = await axios.post(`${apiURL}/participants`, participant)

                const accessToken = response.data.accessToken;
                localStorage.setItem('accessToken', accessToken);
                commit('setAccessToken', accessToken);

                dispatch('setupHeaders');

            } catch (error) {
                dispatch('removeHeaders');
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
        async fetchQuestion({ commit }) {
            try {
                const response = await axios.get(`${apiURL}/questions`);
                commit('setQuestion', response.data[0]);
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
        },
        setupHeaders({ getters }) {
            axios.defaults.headers.common['accessToken'] = getters.getAccessToken;
        },
        removeHeaders({ commit }) {
            commit('setAccessToken', '');
            localStorage.removeItem('accessToken');
            delete axios.defaults.headers.common['accessToken'];
        }
    },
    modules: {}
})