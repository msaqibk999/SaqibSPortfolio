import React, { useState } from "react";
import styles from "../moduleCSS/Projects.module.css";
import Carousel2 from "./Carousel";
import react from "../media/skills/ReactLogo.svg";
import rails from "../media/skills/RailsLogo.svg";
import node from "../media/skills/NodeLogo.svg";
import postgres from "../media/skills/PostgresLogo.svg";
import meterialUi from "../media/skills/MaterialUI.svg";
import redux from "../media/skills/Redux.svg";
import Modal from "./Modal";
import EmailForm from "./EmailForm";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const keysArray = [
    {
      image:
        "https://cdn3d.iconscout.com/3d/premium/thumb/chat-talking-5143250-4312620.png",
      display_name: "<ChatRoom/>",
      techs: [react, rails, postgres],
      name: "Chatroom",
      link: "https://chatapp-client.pages.dev/",
      desc: "Chatroom is a chat application with real-time seamless communication.",
      info: [
        "Crafted the client-side using ReactJS and the server-side with Ruby on Rails and PostgreSQL.",
        "Enhanced user engagement with Firebase for real-time notifications.",
        "Optimized notification efficiency by integrating Rails' Sidekiq, achieving a notable 35% improvement in message delivery response times.",
      ],
    },
    {
      image: require("../media/bandageLogo.png"),
      display_name: "<Bandage Shopping/>",
      techs: [react, node, postgres],
      name: "Bandage Shopping",
      link: "https://bandageshopping.pages.dev/",
      desc: '"Bandage", is a E-commerce hub for clothing and accessories.',
      info: [
        "Created the application from the ground up, utilizing a tech stack that included ReactJS, NodeJS, ExpressJS, and PostgreSQL.",
        "Ensured an impeccable user experience with seamless responsiveness across mobile, tablet, and web interfaces.",
        "Seamlessly integrated secure user authentication via JSON Web Tokens JWT, bolstering user data protection.",
        "Integrated Firebase for user-friendly profile picture management, enabling effortless uploads and updates.",
        "Implemented React lazy loading to optimize page speed and enhance user experience by efficiently loading components as needed.",
        "Enhanced scalability by integrating Node cluster, distributing traffic across multiple instances to boost performance.",
      ],
    },
    {
      image:
        "https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png",
      display_name: "<Swiggy Landing Page Clone/>",
      techs: [react],
      name: "Swiggy Landing Page Clone",
      link: "https://msaqibk999.github.io/swiggylandingpage/",
      desc: '"Swiggy Landing Page Clone", is a clone of landing page of online food ordering website Swiggy.',
      info: [
        "Created the application from the ground up, utilizing ReactJS.",
        "Ensured an impeccable user experience with seamless responsiveness across mobile, tablet, and web interfaces.",
      ],
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
      display_name: "<Job Listings/>",
      techs: [react, meterialUi, redux],
      name: "Job Listings",
      link: "https://msaqibk999.github.io/joblistings/",
      desc: '"Job Listings", is a Job searching portal with various filters for search',
      info: [
        "Created the application from the ground up, utilizing ReactJS, MaterialUI and Redux.",
        "Ensured an impeccable user experience with seamless responsiveness across mobile, tablet, and web interfaces.",
        "Implemented various optimizations like debouncing handled filtering most optimally",
      ],
    },
  ];

  const items = keysArray.map((item, index) => (
    <div key={index} className={styles.window}>
      <img
        src={item.image}
        alt=""
        className={`${
          item.name === "Swiggy Landing Page Clone"
            ? styles.swiggyImg
            : item.name === "Bandage Shopping"
            ? styles.bandageImg
            : styles.itemImg
        }`}
      />
      <h1>{item.display_name}</h1>
      <div className={styles.tech}>
        {item.techs.map((tech, key) => (
          <img key={key} src={tech} alt="" className={styles.techImg} />
        ))}
      </div>
      <button className={styles.btn} onClick={() => openModal(item)}>
        LEARN MORE
      </button>
    </div>
  ));

  return (
    <>
      <div className={styles.mainContainer} id="projects">
        <h1 className={styles.heading}>PROJECTS</h1>
        <Carousel2>{items}</Carousel2>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            modalData={modalData}
          />
        )}
        <br/>
        <br/>
        <h2>Lets Connect :)</h2>
        <section className={styles.messageContainer}>
          <EmailForm />
        </section>
      </div>
    </>
  );
}
