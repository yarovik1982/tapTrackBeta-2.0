export const formatDate = (dateString) => {
   const dateSplit = dateString.split('-')
   const firstChank = dateSplit[0]
   return firstChank.length === 2 ? dateString
      : dateSplit.reverse().join('-')
}

