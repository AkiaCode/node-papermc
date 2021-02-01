const fetch = require('node-fetch')
/**
 * node-papermc 
 * 1. https://paper.readthedocs.io/en/latest/site/api.html
 * 2. https://papermc.io/api/docs/swagger-ui/index.html?configUrl=/api/openapi/swagger-config 
 */
const BASEURL = 'https://papermc.io/api/'
const api_version = `v2`

module.exports = class PaperMC {
    get projects() {
        return fetch(BASEURL + `${api_version}/projects`).then(e=>e.json())
    }
    async getProject(project) {
       return await fetch(BASEURL + `${api_version}/projects/${project}`).then(e=>e.json())
    }
    async getVersion(project, version) {
        return await fetch(BASEURL + `${api_version}/projects/${project}/versions/${version}`).then(e=>e.json())
    }
    async getVersions(project, version_group) {
        return await fetch(BASEURL + `${api_version}/projects/${project}/version_group/${version_group}`).then(e=>e.json())
    }
    async getBuilds(project, version_group) {
        return await fetch(BASEURL + `${api_version}/projects/${project}/version_group/${version_group}/builds`).then(e=>e.json())
    }
    async getBuild(project, version, build) {
        return await fetch(BASEURL + `${api_version}/projects/${project}/versions/${version}/builds/${build}`).then(e=>e.json())
    }
    async download(project, version, build, download) {
        return await fetch(BASEURL + `${api_version}/projects/${project}/versions/${version}/builds/${build}/downloads/${download}`).then(e=>e.json())
    }
}