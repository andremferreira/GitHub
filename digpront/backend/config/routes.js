const express = require('express')
const auth = require('./auth')

module.exports = function (server) {

    /*
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')

    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

	protectedApi.use(auth)

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(protectedApi, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')

    protectedApi.route('/billingSummary/:medico').get(billingSummaryService.getSummary)

    const billingFilter = require('../api/billingCycle/billingCycleFilter')

    protectedApi.route('/billingFilter/count/:medico').get(billingFilter.getCountByMedic)
    protectedApi.route('/billingFilter/medico/:medico').get(billingFilter.getListByMedic)

    // Cadastro de Pacientes e Consultas
    const cadastroPacienteService = require('../api/cadastroPaciente/cadastroPacienteService')
    cadastroPacienteService.register(protectedApi, '/pacientes')




}
