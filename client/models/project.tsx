import {
  Action,
  thunk,
  action,
  Thunk,
  ActionOn,
  actionOn,
  thunkOn,
} from "easy-peasy";
import { Project, Projects } from "../types/project";
import { apiCaller } from "../util/apiCaller";

export interface ProjectModel {
  loading: Boolean;
  setLoading: Action<ProjectModel, Boolean>;
  projects: Projects;
  selectedProject: Project;
  setProjects: Action<ProjectModel, Projects>;
  getProjects: Thunk<ProjectModel>;
  getProjectsByTransaction: Thunk<ProjectModel, string>;
}

const initialProject: Project = {
  _id: "",
};

const projects: Projects = [];

const project: ProjectModel = {
  projects,
  selectedProject: initialProject,
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setProjects: action((state, payload) => {
    state.projects = payload;
  }),
  getProjects: thunk(async (actions) => {
    try {
      const { data } = await apiCaller("api/project", "get", null);
      const projects = data.projects;
      actions.setProjects(projects);
    } catch (err) {
      console.log("err", err);
    }
  }),
  getProjectsByTransaction: thunk(async (actions, transactionId) => {
    try {
      const { data } = await apiCaller(
        `api/project/transaction/${transactionId}`,
        "get",
        null
      );
      const projects = data.projects;
      actions.setProjects(projects);
    } catch (err) {
      console.log("err", err);
    }
  }),
};

export default project;
