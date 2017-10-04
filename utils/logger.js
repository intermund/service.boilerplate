import morgan from 'morgan'

const logger = (log_level) => morgan(log_level);

export default logger