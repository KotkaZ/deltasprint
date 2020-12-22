import { createStore } from 'vuex';
import CurrentTask from '../models/CurrentTask.js';


import axios from 'axios';
const apiURL = "http://localhost:3000";

export default createStore({
    state: {
        currentStudent: null,
        currentCompetition: null,
        currentTask: new CurrentTask("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://flhs.fairlawnschools.org/ourpages/auto/2020/5/26/55995212/math%20image.jpg"),
        availableCompetitions: null,
    },
    getters: {
        getStudent: state => state.currentStudent,
        getCompetition: state => state.currentCompetition,
        getTask: state => state.currentTask,
        getCompetitions: state => state.availableCompetitions,

    },
    mutations: {
        setStudent: (state, currentStudent) => state.currentStudent = currentStudent,
        setCompetitions: (state, competitions) => state.availableCompetitions = competitions,
        setCompetition: (state, competition) => state.currentCompetition = competition
    },
    actions: {
        async signinStudent({ commit }, currentStudent) {
            const response = await axios.post(`${apiURL}/participants`, currentStudent);
            commit('setStudent', response.data);
        },
        setCompetition({ commit }, competition) {
            commit('setCompetition', competition)
        },
        async fetchCompetitions({ commit }) {
            const response = await axios.get(`${apiURL}/competitions`);
            commit('setCompetitions', response.data);
        },
        submitResult({ commit }, formData) {
            axios.post('/tba',
                formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function() {
                commit()
                console.log("sucess")
            }).catch(function() {
                console.log("Strange failure!")
            })
        }
    },
    modules: {}
})