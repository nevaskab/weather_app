import { useLocation } from "../../Contexts/LocationContext";

export default function Dashboard() {
  const { weather, loading, error } = useLocation()

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>
  if (!weather) return <p>Sem dados</p>
  return (
    <div>Dashboard</div>
  );
}