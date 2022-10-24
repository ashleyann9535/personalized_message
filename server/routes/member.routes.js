const MemberController = require('../controllers/member.controller');

module.exports = (app) => {
    app.get('/api/member', MemberController.getMembers);
    app.get('/api/member/:id', MemberController.getOneMember);
    app.post('/api/member/create', MemberController.createMember);
    app.put('/api/member/:id', MemberController.updateMember);
}