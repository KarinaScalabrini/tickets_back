declare module '../config/database' {
    const config: {
      username: string;
      password: string;
      database: string;
      host: string;
      dialect: string;
      [key: string]: any;
    };
    export default config;
  }
  