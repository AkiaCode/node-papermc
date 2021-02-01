const node = require('../src/index');
const api = new node()
Promise.all([
    api.projects,
    api.getProject('paper'),
    api.getVersion('paper', '1.16.4'),
    api.getVersions('paper', '1.16'),
    api.getBuilds('paper', '1.16'),
    api.getBuild('paper', '1.16.4', 256),
]).then(console.log)