export const _404 = (res,message) =>{
  res.status(404);
  return res.json({error:{code:"NOT_FOUND",message}});
}