import { PaperBuildInfos, PaperVersionInfos, PaperProjectInfos, PaperVersionGroupInfos, PaperVersionGroupBuilds } from './types';
export declare class PaperMC {
    get BASE_URL(): string;
    getProjects(): Promise<string[]>;
    getProjectInfo(project: string): Promise<PaperProjectInfos>;
    getVersionInfo(project: string, version: string): Promise<PaperVersionInfos>;
    getVersionGroupInfo(project: string, version_group: string): Promise<PaperVersionGroupInfos>;
    getVersionGroupBuilds(project: string, version_group: string): Promise<PaperVersionGroupBuilds>;
    getBuildInfo(project: string, version: string, build: number): Promise<PaperBuildInfos>;
    download(project: string, version: string, build: number, name: string): Promise<import("node-fetch").Blob>;
}
