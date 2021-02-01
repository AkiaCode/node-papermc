# node-papermc

## functions

### projects
Get Projects
### getProject(project: string)
Get project id, project name, version groups, versions
### getVersion(project: string, version: string)
Get project id, project name, version, builds
### getVersions(project: string, version: string)
Get project id, project name, version group, versions
### getBuilds(project: string, version: string)
Get project id, project name, version group, versions, builds
### getBuild(project: string, version: string, build: number)
Get project id, project name, build, time, changes, downloads

## example
```javascript
const papermc = require('node-papermc');
const papermc = new node()
Promise.all([
    api.project,
    api.getProject('paper'),
    api.getVersion('paper', '1.16.4'),
    api.getVersions('paper', '1.16'),
    api.getBuilds('paper', '1.16'),
    api.getBuild('paper', '1.16.4', 256),
]).then(console.log)
```