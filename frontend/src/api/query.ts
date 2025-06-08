import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProjects,
  addProject,
  updateproject,
  deleteproject,
  TProject,
  TGetProjectsResponse,
  TUpdateProjectInput,
  TDeleteProjectInput,
} from "./fetch";

// QUERY: Fetch all projects
export function useGetProjects() {
  return useQuery<TGetProjectsResponse, Error>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
}

// MUTATION: Add a new project
export function useAddProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: TProject) => addProject(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

// MUTATION: Update a project
export function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: TUpdateProjectInput) => updateproject(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

// MUTATION: Delete a project
export function useDeleteProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: TDeleteProjectInput) => deleteproject(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}
