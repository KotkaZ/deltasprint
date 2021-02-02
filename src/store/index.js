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
                commit('setQuestion', response.data);
            } catch (error) {
                console.log(error);
            }

        },
        async fetchProgress({ commit }) {
            try {
                const response = await axios.get('answers');
                commit('setProgress', Number(response.data.value));
            } catch (error) {
                console.log(error);
            }

        },
        async fetchParticipant({ commit }) {
            try {
                const response = await axios.get('participants');
                commit('setParticipant', response.data);
            } catch (error) {
                console.log(error);
            }

        },
        async fetchResults({ commit }, competition) {
            try {
                const response = await axios.get(`competitions/${competition}`);
                commit('setResults', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async submitResult({ commit }, formData) {
            try {
                await axios.post('answers', formData, {
                    onUploadProgress: function(progressEvent) {
                        commit('setUploadPercentage', Math.round((progressEvent.loaded / progressEvent.total) * 100));
                    }
                });

            } catch (error) {
                if (error.response.status === 409) return new Promise.reject();
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