# node-papermc

## functions
### BASE_URL: string
Base URL of rest api

### getProjectInfo(project: string): Promise\<PaperProjectInfos>
Get project id, project name, version groups, versions

### getVersionInfo(project: string, version: string) Promise\<PaperVersionInfos>
Get project id, project name, version, builds

### getVersionGroupInfo(project: string, version_group: string): Promise\<PaperVersionGroupInfos>
Get project id, project name, version group, versions

### getVersionGroupBuilds(project: string, version_group: string): Promise\<PaperVersionGroupBuilds>
Get project id, project name, version group, versions, builds

### getBuildInfo(project: string, version: string, build: number): Promise\<PaperBuildInfos>
Get project id, project name, build, time, changes, downloads

### download(project: string, version: string, build: number, name: string): Promise\<Blob>
Get build file blob

## examples
[<image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" width="20"> javascript example](tests/test.js)

[<image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="20"> typescript example](tests/test.js)
