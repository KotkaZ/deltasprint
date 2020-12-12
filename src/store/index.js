import { createStore } from 'vuex';
import CurrentStudent from '../models/CurrentStudent.js';
import axios from 'axios';

export default createStore({
    state: {
        currentStudent: null,
        currentCompetition: null,
        currentTask: null,
        availableCompetitions: [],
    },
    getters: {
        getStudent: state => state.currentStudent,
        getCompetition: state => state.currentCompetition,
        getTask: state => state.currentTask,
        getAllCompetitions: state => state.competitions,

    },
    mutations: {
        setStudent: (state, studentName, studentCode) => (state.currentStudent = new CurrentStudent(studentName, studentCode)),
        setCompetitions: (state, competitions) => (state.availableCompetitions = competitions)
    },
    actions: {
        signinStudent(name, code, { commit }) {
            commit('setStudent', name, code)
        },
        async fetchCompetitons({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit('setCompetitions', response)
        }
    },
    modules: {}
})