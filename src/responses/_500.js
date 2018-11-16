export const _500 = (res,message) =>{
  res.status(500);
  return res.json({error:{code:"SERVER_ERROR",message}});
}