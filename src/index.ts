import fetch from 'node-fetch'

import { BASE_URL, API_VERSION } from './constants'
import {
  PaperProjects,
  PaperBuildInfos,
  PaperVersionInfos,
  PaperProjectInfos,
  PaperVersionGroupInfos,
  PaperVersionGroupBuilds,
} from './types'

export class PaperMC {
  get BASE_URL () {
    return BASE_URL + API_VERSION
  }

  async getProjects () {
    return (await fetch(this.BASE_URL + '/projects').then((res) => res.json()) as PaperProjects).projects
  }

  async getProjectInfo (project: string) {
    return await fetch(this.BASE_URL + '/projects/' + project).then((res) => res.json()) as PaperProjectInfos
  }

  async getVersionInfo (project: string, version: string) {
    return await fetch(this.BASE_URL + '/projects/' + project + '/versions/' + version).then((res) => res.json()) as PaperVersionInfos
  }

  async getVersionGroupInfo (project: string, version_group: string) {
    return await fetch(this.BASE_URL + '/projects/' + project + '/version_group/' + version_group).then((res) => res.json()) as PaperVersionGroupInfos
  }

  async getVersionGroupBuilds (project: string, version_group: string) {
    return await fetch(this.BASE_URL + '/projects/' + project + '/version_group/' + version_group + '/builds').then((res) => res.json()) as PaperVersionGroupBuilds
  }

  async getBuildInfo (project: string, version: string, build: number) {
    return await fetch(this.BASE_URL + '/projects/' + project + '/versions/' + version + '/builds/' + build).then((res) => res.json()) as PaperBuildInfos
  }

  async download (project: string, version: string, build: number, name: string) {
    return await fetch(this.BASE_URL + '/projects/' + project + '/versions/' + version + '/builds/' + build + '/downloads/' + name).then((res) => res.blob())
  }
}
