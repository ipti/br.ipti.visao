const admin = require('firebase-admin');
admin.initializeApp();

// reports
const report = require('./controller/report/fetchReport')
exports.generateReport = report.generateReport()
