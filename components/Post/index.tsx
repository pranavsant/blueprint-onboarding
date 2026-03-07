import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import Image from "next/image";
import styles from "./styles.module.css";

export interface PostProps {
  key: number;
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string;
  likeCount: number;
  postDate: string;
  comments: {
    username: string;
    text: string;
    likeCount: number;
  }[];
}

export default function newPost({
  username,
  npo,
  city,
  state,
  text,
  image,
  likeCount,
  postDate,
  comments,
}: PostProps) {
  return (
    <div>
      <div className={styles.postHeader}>
        <ProfileIcon className={styles.profileIcon} />
        <div className={styles.posterNameAndLocation}>
          <p className={styles.posterName}>
            <span className={styles.posterNameBold}>{username}</span>
            <span className={styles.posterNameNormal}> at </span>
            <span className={styles.posterNameBold}>{npo}</span>
          </p>
          <p className={styles.postLocation}>
            {city}, {state}
          </p>
        </div>
      </div>

      <Image
        src={image}
        alt="post image"
        className={styles.postImage}
        width={346}
        height={231}
      />

      <p className={styles.captionText}>{text}</p>

      <div className={styles.engagementRow}>
        <span className={styles.likes}>{likeCount} likes</span>
        <span className={styles.viewComments}>
          View {comments.length} comments
        </span>
      </div>

      <div className={styles.actionBar}>
        <div className={styles.actionLeft}>
          <HeartIcon className={styles.actionIcon} />
          <TbMessageCircle className={styles.actionIcon} />
        </div>
        <ShareIcon className={styles.actionIcon} />
      </div>
      <p className={styles.postDate}>{postDate}</p>
    </div>
  );
}
