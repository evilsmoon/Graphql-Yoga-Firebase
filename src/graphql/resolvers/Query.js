const db = require("firebase-admin").firestore();
module.exports = {
  Query: {
    async users() {
      try {
        const res = await db.collection("Users").get();
        const users = [];
        res.forEach(doc => { 
          users.push({
            id: doc.id,
            name: doc.data().User.name,
            email: doc.data().User.email,
          
          })
        })
        return users;
      } catch (e) {
        throw e;
      }
    },
    async user(_, { id }) {
      try {
        const res = await db.collection("Users").doc(String(id)).get();
        const User = {
          id: res.id,
          mail: res.data().mail,
          name: res.data().name,
        };
        return User;
      } catch (e) {
        throw e;
      }
    },
  },
};
