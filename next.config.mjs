/** @type {import('next').NextConfig} */
const nextConfig = (env) => {
  if (env === "development") {
    return {
      env: {
        MONGODB_CLIENT:
          "mongodb+srv://kikisan:apqOuH4V8cCkH1ZH@cluster0.qh54wye.mongodb.net/?retryWrites=true&w=majority",
        // MONGODB_DATABASE: "THREADSCLONE",
        MONGODB_DATABASE: "threads",

      },
    };
  } else {
    return {
      env: {
        MONGODB_CLIENT:
          "mongodb+srv://kikisan:apqOuH4V8cCkH1ZH@cluster0.qh54wye.mongodb.net/?retryWrites=true&w=majority",
        // MONGODB_DATABASE: "THREADSCLONE",
        MONGODB_DATABASE: "threads",

      },
    };
  }
};

export default nextConfig;
