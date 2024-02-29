import moment from "moment-timezone";
import Image from "next/image";
import Link from "next/link";
import "moment/locale/fr";

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
          <div className="text-sm text-threads-gray-light">
            {moment
              .utc(post.creation, "YYYY-MM-DDTHH:mm:ss.SSSZ")
              .tz("Europe/Paris")
              .fromNow()}
          </div>
        </div>
        <div className="mt-3 whitespace-pre-line text-neutral-20">
          {post.content}
        </div>
      </div>
    </div>
  );
}
