import useGetData from "../hooks/useGetData"
import WatchCard from "./WatchCard"

export const ListWatches = () => {
  const { data, loading, error } = useGetData("http://localhost:8000/product")
  if (loading) {
    return <p>Chargement en cours...</p>
  }

  if (error) {
    return <p>Une erreur est survenue lors de la récupération des données.</p>
  }

  return (
    <div>
      <ul>
        {data &&
          data.map((watchData) => {
            return (
              <li key={watchData.id}>
                <WatchCard watchData={watchData} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}
