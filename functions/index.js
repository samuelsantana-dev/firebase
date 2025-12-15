const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.createTask = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "Usuário não autenticado",
    );
  }

  const {title, description} = data;
  const userId = context.auth.uid;

  if (!title || !description) {
    throw new functions.https.HttpsError(
        "invalid-argument",
        "Título e descrição são obrigatórios",
    );
  }

  const task = {
    title,
    description,
    status: false,
    userId,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  const docRef = await admin.firestore()
      .collection("tasks")
      .add(task);

  return {
    success: true,
    taskId: docRef.id,
  };
});
