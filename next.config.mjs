const { PHRSE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (env) => {
  if ((env = PHRSE_DEVELOPMENT_SERVER)) {
    return {
      env: {
        MONGODB_CLIENT:
          "mongodb+srv://kikisan:apqOuH4V8cCkH1ZH@cluster0.qh54wye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      },
    };
  } else {
    return {
      env: {
        MONGODB_CLIENT:
          "mongodb+srv://kikisan:apqOuH4V8cCkH1ZH@cluster0.qh54wye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      },
    };
  }
};
