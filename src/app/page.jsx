// page d'accueil des connectés ou visiteurs invités

import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
// import { posts } from "@/lib/post";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import CreatePost from "@/components/createPost/CreatePost";
import { toast } from "sonner";
import { MongoClient } from "mongodb";

export default async function Index() {
  const session = await getServerSession(authOptions);
  let posts, client;

  try {
    // connexion cluster
    client = await MongoClient.connect(process.env.MONGODB_CLIENT);
    // connection db
    const db = client.db(process.env.MONGODB_DATABASE);

    //   selectionner les post à la db
    //  triés de manières antéchronologiques
    posts = await db.collection("posts").find().sort({ creation: -1 }).toArray();

    // formatage des données
    posts = posts.map((post) => ({
      ...post,
      _id: post._id.toString(),
    }));
  } catch (error) {
    await client.close();
    console.log(error);
    // toast.error(error.message);
    // toast.error("Erreur lors de la récupération des posts");
  }
  await client.close();

  return (
    <ConnectedLayout>
      {/* new post */}
      {session?.user && <CreatePost />}

      {/* posts */}
      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </ConnectedLayout>
  );
}
