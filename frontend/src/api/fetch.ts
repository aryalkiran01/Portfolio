import { env } from "../config";
export type TProject = {
  _id: string;
  title: string;
  image: string;
  description: string;
  review: string;
};

export type TGetProjectsResponse = {
  message: string;
  isSuccess: boolean;
  data: TProject[];
};

export async function fetchProjects(): Promise<TGetProjectsResponse> {
  const res = await fetch(`${env.BACKEND_URL}/api/projects`, {
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch projects");
  }

  return data;
}
export async function addProject(input: TProject): Promise<TProject> {
  const res = await fetch(`${env.BACKEND_URL}/api/project`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
export type TUpdateProjectInput = {
  projectid: string;
  title: string;

  description: string;
  image: string;
};

export type TUpdateProjectOutput = {
  message: string;
  isSuccess: boolean;
  data: TProject;
};
export async function updateproject(
  input: TUpdateProjectInput
): Promise<TUpdateProjectOutput> {
  const res = await fetch(`${env.BACKEND_URL}/api/project/${input.projectid}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export type TDeleteProjectInput = {
  projectid: string;
};

export type TDeleteProjectOutput = {
  message: string;
  isSuccess: boolean;
};

export async function deleteproject(
  input: TDeleteProjectInput
): Promise<TDeleteProjectOutput> {
  const res = await fetch(`${env.BACKEND_URL}/api/project/${input.projectid}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
