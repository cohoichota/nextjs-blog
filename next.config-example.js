const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
   if (phase === PHASE_DEVELOPMENT_SERVER) {
      return {
         env: {
            mongodb_username: "username",
            mongodb_password: "password",
            mongodb_clustername: "clustername",
            mongodb_database: "database",
         },
      };
   }
   
   return {
      env: {
         mongodb_username: "username",
         mongodb_password: "password",
         mongodb_clustername: "clustername",
         mongodb_database: "database",
      },
   };
};
