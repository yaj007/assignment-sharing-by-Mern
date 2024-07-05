import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSidebar}>
          <div className={`${styles.sidebarTab} ${styles.tabActive}`}>Home</div>
          <div className={styles.sidebarTab}>Create Post</div>
          <div className={styles.sidebarTab}>Notes</div>
        </div>
        <div className={styles.content}>
        <div className={styles.post}>
            <h3 className={styles.title}>Post Title</h3>
            <p className={styles.date}>01/01/2024</p>
            <p className={styles.userName}>@User Name</p>
            <p className={styles.text}>
              Hi, we have started out CSE470 project. We have named it 'Note Sharing & Blogging App'. We are using MERN stack to build this web app. Let's hope for the best. Hope to enjoy a lot.
            </p>
          </div>
          <div className={styles.post}>
            <h3 className={styles.title}>Post Title</h3>
            <p className={styles.date}>01/01/2024</p>
            <p className={styles.userName}>@User Name</p>
            <p className={styles.text}>
              Hi, we have started out CSE470 project. We have named it 'Note Sharing & Blogging App'. We are using MERN stack to build this web app. Let's hope for the best. Hope to enjoy a lot.
            </p>
          </div>
        </div>
        <div className={styles.rightSidebar}>
          <form class={`${styles.searchForm}`} role="search">
            <input
              className={`form-control ${styles.searchBar}`}
              type="search"
              placeholder="Search"
            />
            <button class={`btn btn-outline-success ${styles.searchButton}`}type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
