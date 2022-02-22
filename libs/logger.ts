class Logger {
  info(msg: string | Record<string, unknown>) {
    console.info(msg);
  }

  error(msg: string | Record<string, unknown>) {
    console.error(msg);
  }

  debug(msg: string | Record<string, unknown>) {
    console.log(msg);
  }
}

export default new Logger();
