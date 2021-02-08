import { createStore } from 'vuex';
import axios from '../plugins/axios';

export default createStore({
    state: {
        accessToken: localStorage.getItem('accessToken') || '',
        availableCompetitions: [],
        participant: {},
        progress: 0,
        results: [],
        question: {},
        uploadPercentage: 0,
    },
    getters: {
        getAccessToken: state => state.accessToken,
        getCompetitions: state => state.availableCompetitions,
        getParticipant: state => state.participant,
        getProgress: state => state.progress,
        getResults: state => state.results,
        getQuestion: state => state.question,
        getUploadPercentage: state => state.uploadPercentage,
    },
    mutations: {
        setAccessToken: (state, accessToken) => state.accessToken = accessToken,
        setCompetitions: (state, competitions) => state.availableCompetitions = competitions,
        setParticipant: (state, participant) => state.participant = participant,
        setProgress: (state, progress) => state.progress = progress,
        setResults: (state, results) => state.results = results,
        setQuestion: (state, question) => state.question = question,
        setUploadPercentage: (state, uploadPercentage) => state.uploadPercentage = uploadPercentage,
    },
    actions: {
        async signinParticipant({ commit, dispatch }, participant) {
            const response = await axios.post('participants', participant)

            const accessToken = response.data.accessToken;
            localStorage.setItem('accessToken', accessToken);
            commit('setAccessToken', accessToken);

            dispatch('setupHeaders');
        },
        async fetchCompetitions({ commit }) {
            const response = await axios.get('competitions');
            commit('setCompetitions', response.data);
        },
        async fetchQuestion({ commit }) {
            const response = await axios.get('questions');
            commit('setQuestion', response.data);
        },
        async fetchProgress({ commit }) {
            const response = await axios.get('answers');
            commit('setProgress', Number(response.data.value));
        },
        async fetchParticipant({ commit }) {
            const response = await axios.get('participants');
            commit('setParticipant', response.data);
        },
        async fetchResults({ commit }, competition) {
            const response = await axios.get(`competitions/${competition}`);
            commit('setResults', response.data);
        },
        async submitResult({ commit }, formData) {
            await axios.post('answers', formData, {
                onUploadProgress: function(progressEvent) {
                    commit('setUploadPercentage', Math.round((progressEvent.loaded / progressEvent.total) * 100));
                }
            });
        },
        async submitFeedback(feedback) {
            await axios.post(`feedback`, feedback);
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