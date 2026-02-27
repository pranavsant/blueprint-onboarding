"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import "@/styles/global.css";
import Image from "next/image";
import sfImage from "../assets/San-Francisco.webp";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>

        <div className={styles.contentScroll}>
          <div className={styles.postHeader}>
            <ProfileIcon className={styles.profileIcon} size={24} />
            <div className={styles.posterNameAndLocation}>
              <p className={styles.posterName}>
                <strong>etam3</strong> at <strong>Mission Bit</strong>
              </p>
              <p className={styles.postLocation}>San Francisco, CA</p>
            </div>
          </div>

          <Image
            src={sfImage}
            alt="San Francisco"
            className={styles.postImage}
            width={346}
            height={231}
          />

          <p className={styles.captionText}>
            This past weekend, I taught at Mission Bit. I was working with a
            group of high school students who were building their first web
            pages. I really enjoyed being able to help guide 10 students on
            learning CS fundamentals through a project! They were all really
            eager to learn, and I&#39;m glad I signed up. Highly recommend to
            any other software engineers interested in volunteering! Sign-up
            here: https://missionbit.org/get-involved/volunteer-with-us/
          </p>

          <div className={styles.engagementRow}>
            <span className={styles.likes}>3 likes</span>
            <span className={styles.viewComments}>View 2 comments</span>
          </div>

          <div className={styles.actionBar}>
            <div className={styles.actionLeft}>
              <HeartIcon className={styles.actionIcon} />
              <TbMessageCircle className={styles.actionIcon} />
            </div>
            <ShareIcon className={styles.actionIcon} />
          </div>

          <p className={styles.postDate}>February 1</p>

          <hr />
          <br />

          <div className={styles.postHeader}>
            <ProfileIcon className={styles.profileIcon} size={24} />
            <div className={styles.posterNameAndLocation}>
              <p className={styles.posterName}>
                <strong>carolyn123</strong> at{" "}
                <strong>Boys and Girls Club</strong>
              </p>
              <p className={styles.postLocation}>Oakland, CA</p>
            </div>
          </div>

          <p className={styles.captionText}>
            I recently volunteered at my local Boys and Girls Club!
          </p>
        </div>
      </div>
    </main>
  );
}
