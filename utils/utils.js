
export class ServerUtils {

  set_headers(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'GET, POST')
    next();
  }

}

export let Utils = new ServerUtils()