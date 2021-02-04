export interface PaperProjects {
  projects: string[];
}

export interface PaperProjectInfos {
  project_id: string;
  project_name: string;
  version_groups: string[];
  versions: string[];
}

export interface PaperVersionInfos {
  project_id: string;
  project_name: string;
  version: string;
  builds: number[];
}

export interface PaperVersionGroupInfos {
  project_id: string;
  project_name: string;
  version_group: string;
  versions: string[];
}

export interface PaperVersionGroupBuilds {
  project_id: string;
  project_name: string;
  version_group: string;
  versions: string[];
  builds: {
    version: string;
    build: number;
    time: string;
    changes: {
      commit: string;
      summary: string;
      message: string;
    }[];
    downloads: {
      application: {
        name: string;
        sha256: string;
      };
    };
  }[];
}

export interface PaperBuildInfos {
  project_id: string;
  project_name: string;
  version: string;
  build: number;
  time: string;
  changes: {
    commit: string;
    summary: string;
    message: string;
  }[];
  downloads: {
    application: {
      name: string;
      sha256: string;
    };
  };
}


export declare class PaperMC {
  get BASE_URL(): string;
  getProjects(): Promise<string[]>;
  getProjectInfo(project: string): Promise<PaperProjectInfos>;
  getVersionInfo(project: string, version: string): Promise<PaperVersionInfos>;
  getVersionGroupInfo(project: string, version_group: string): Promise<PaperVersionGroupInfos>;
  getVersionGroupBuilds(project: string, version_group: string): Promise<PaperVersionGroupBuilds>;
  getBuildInfo(project: string, version: string, build: number): Promise<PaperBuildInfos>;
  download(project: string, version: string, build: number, name: string): Promise<Blob>;
}
