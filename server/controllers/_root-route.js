/**
 * Root controller
 * @param req
 * @param res
 * @param next
 * @returns {Promise.<*>}
 */
export default async (req, res, next ) => {
  return await res.status(200).send(process.env.SERVICE_NAME)
}