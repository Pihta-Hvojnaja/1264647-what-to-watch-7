

export const getRoute = (route, id, status) =>
  route.replace(/:id|:film_id/g, id).replace(/:status/g, status);

