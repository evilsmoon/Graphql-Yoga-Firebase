const db = require("firebase-admin").firestore();

module.exports = {
  Mutation: {
    async newUser(_, { user }) {
      try {
        const User = {
          name: user.name,
          mail: user.mail,
        };
        await db.collection("Users").add({User});
        return User;
      } catch (e) {
        throw e;
      }
    },
  },
};
