import { IProject } from "@/types/interfaces";
import localforage from "localforage";
import { uuid } from "uuidv4";

const KEYS = {
  PROJECTS: "projects",
};

export const aluraDbStorage = localforage.createInstance({
  name: "AluraDevDB",
  driver: localforage.LOCALSTORAGE,
});

export class AluraDevDB {
  async getProjects(): Promise<IProject[]> {
    return aluraDbStorage
      .getItem<IProject[]>(KEYS.PROJECTS)
      .then((projects) => projects || []);
  }

  async getProject(id: string): Promise<IProject> {
    try {
      const projects = await this.getProjects();

      const singleProject = projects.find((project) => project.id === id);

      if (singleProject) {
        return Promise.resolve(singleProject);
      }

      return Promise.reject(new Error(`The project #${id} does not exists`));
    } catch (e) {
      return Promise.reject(
        new Error(`Error on trying to get the project #${id}`)
      );
    }
  }

  async saveProject(data: Required<IProject>): Promise<IProject> {
    try {
      const projects = await this.getProjects();
      const project: IProject = {
        ...data,
        id: uuid(),
        created_at: new Date(),
      };

      projects.push(project);

      await aluraDbStorage.setItem(KEYS.PROJECTS, projects);

      return Promise.resolve(project);
    } catch (e) {
      console.error(e);

      return Promise.reject(e);
    }
  }
}

export const AluraDevModel = new AluraDevDB();
