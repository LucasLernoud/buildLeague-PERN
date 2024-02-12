exports.success = (message, data) => {
  return { message, data }
}


exports.getUniqueId = (watches) => {
  const watchesIds = watches.map(watch => watch.id)
  const maxId = watchesIds.reduce((a,b) => Math.max(a,b))
  const uniqueId = maxId + 1

  return uniqueId
}