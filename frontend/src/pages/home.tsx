import { useGetProjects } from "../api/query";

export default function Home() {
  const { data, isLoading, error } = useGetProjects();
  const projects = data?.data || [];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800">My Projects</h1>

      {isLoading && (
        <p className="text-gray-500 text-center">Loading projects...</p>
      )}

      {error && (
        <p className="text-red-500 text-center">
          Error loading projects: {(error as Error).message}
        </p>
      )}

      {!isLoading && !error && (
        <>
          {projects.length === 0 ? (
            <p className="text-gray-600">No projects found.</p>
          ) : (
            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p._id}
                  className="p-4  bg-gradient-to-b from-slate-900 to-slate-950 shadow-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {p.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{p.description}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}
