export default async (req, res, next ) => {
  console.log('incoming lead')
  return await res.status(200).send('New lead')
}