const WatchCard = ({ watchData }) => {
  const { id, nom, prix, marque_id } = watchData

  return (
    <ul key={id}>
      <li>ID: {id}</li>
      <li>Nom: {nom}</li>
      <li>Prix: {prix}</li>
      <li>Marque ID: {marque_id}</li>
    </ul>
  )
}

export default WatchCard
