import Image from "next/image";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="post w-11/12  md:w-[700px] mx-auto">
      <div>
        <Image
          src={post.profile}
          alt="avatar"
          width={50}
          height={50}
          className="object-cover rounded-full"
        />
      </div>
      <div className="w-full text-white">
        <div className="flex items-center justify-between">
          <Link href={`/@${post.pseudo}`}>
            <b>{post.pseudo}</b>
          </Link>
          <div className="text-sm text-threads-gray-light">Il y a 1 heure</div>
        </div>
        <div className="mt-3 whitespace-pre-line text-neutral-20">{post.content}</div>
      </div>
    </div>
  );
}
