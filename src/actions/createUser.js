function validationInputs(username, pseudo, email, password) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!username || !pseudo || !email || !password) {
    toast.error("Veuillez remplir tous les champs");
    return false;
  }
  if (!emailRegex.test(email)) {
    toast.error("Veuillez remplir un email valide");
    return false;
  }
  return true;
}

export async function createUser(username, pseudo, email, password) {
  if (!validationInputs(username, pseudo, email, password)) {
    return;
  }
  console.log(username, pseudo, email, password);

  // connexion au cluster
  const client = await MongoClient.connect(process.env.MONGODB_CLIENT);
  // connexion à mongodb db
  const db = client.db(process.env.MONGODB_DATABASE);
  // test de la creation du user
  try {
    // email utilisé ?
    let user= await db.collection("users").findOne({ email}).limit(1).toArray();
    if (user.length > 0) {
      await client.close();
      throw new Error("Cet email est déjà utilisé");
    }
    // pour le pseudo
    user= await db.collection("users").findOne({ pseudo}).limit(1).toArray();
    if (user.length > 0) {
      await client.close();
      throw new Error("Ce pseudo est déjà utilisé");
    }
    // encrypter mdp
    
    
  } catch (error) {
    await client.close();
    throw new Error("Erreur lors de la connexion à la base de données");
  }
  await client.close();

}
