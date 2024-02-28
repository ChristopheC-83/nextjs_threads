"use server"
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";


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
  const client = await MongoClient.connect("mongodb+srv://christophechiappetta:BwUUh89brKLIheYD@cluster0.1uhyagj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  // connexion à mongodb db
  const db = client.db("threads");
  
  console.log("truc1")
  // test de la creation du user
  try {
    
    console.log("truc2")
    // email utilisé ?
    let user= await db.collection("users").find({ email}).limit(1).toArray();
    if (user.length !== 0) {
      await client.close();
      throw new Error("Cet email est déjà utilisé");
    }
    // pour le pseudo
    user= await db.collection("users").find({ pseudo}).limit(1).toArray();
    if (user.length !== 0) {
      await client.close();
      throw new Error("Ce pseudo est déjà utilisé");
    }
    // encrypter mdp
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Créer user
    console.log("truc3")
    await db.collection("users").insertOne({
      username, 
      pseudo,
      email,
      password: encryptedPassword,
      profile : "/picture.png",
      bio:"-",
      url : "",
      creation : new Date(),
    })
    
    
  } catch (error) {
    await client.close();
    throw new Error("Erreur lors de la connexion à la base de données");
  }
  await client.close();

}
