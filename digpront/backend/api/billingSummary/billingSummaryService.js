const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')
// Mais uma função middleware
function getSummary(req, res, next, medico) {
  // console.log(medico)
  BillingCycle.aggregate( 
    { $project: { med: "$medico",    credito: {$sum: "$credits.value"} ,  debito: { $sum: "$debts.value"}  }  },
    { $project: { _id: 0, med:1, credito:1, debito:1 }},
    { $match: { med: { $eq: medico } } },
    { $group: { _id: null,  credit: {$sum: "$credito"}, debt: {$sum: "$debito"}}},
    { $project: { _id: 0, credit: 1, debt: 1} }
    , function(error, result) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(_.defaults(result[0], {credit: 0, debt: 0}))
    }
  })
}

module.exports = { getSummary}
