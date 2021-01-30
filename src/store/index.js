import { createStore } from 'vuex';
import axios from '../plugins/axios';

export default createStore({
    state: {
        accessToken: localStorage.getItem('accessToken') || '',
        availableCompetitions: [],
        participant: {},
        progress: 0,
        question: {}
    },
    getters: {
        getAccessToken: state => state.accessToken,
        getCompetitions: state => state.availableCompetitions,
        getParticipant: state => state.participant,
        getProgress: state => state.progress,
        getQuestion: state => state.question,
    },
    mutations: {
        setAccessToken: (state, accessToken) => state.accessToken = accessToken,
        setCompetitions: (state, competitions) => state.availableCompetitions = competitions,
        setParticipant: (state, participant) => state.participant = participant,
        setProgress: (state, progress) => state.progress = progress,
        setQuestion: (state, question) => state.question = question,
    },
    actions: {
        async signinParticipant({ commit, dispatch }, participant) {
            try {
                const response = await axios.post('participants', participant)

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
                const response = await axios.get('competitions');
                commit('setCompetitions', response.data);
            } catch (error) {
                console.log(error);
            }

        },
        async fetchQuestion({ commit }) {
            try {
                const response = await axios.get('questions');
                commit('setQuestion', response.data[0]);
            } catch (error) {
                console.log(error);
            }

        },
        async fetchProgress({ commit }) {
            try {
                const response = await axios.get('answers');
                commit('setProgress', Number(response.data[0].value));
            } catch (error) {
                console.log(error);
            }

        },
        async fetchParticipant({ commit }) {
            try {
                const response = await axios.get('participants');
                commit('setParticipant', response.data[0]);
            } catch (error) {
                console.log(error);
            }

        },
        async submitResult({ dispatch }, formData) {
            try {
                await axios.post('answers', formData);
                dispatch('fetchQuestion');

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