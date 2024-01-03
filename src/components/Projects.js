import React, {useState} from 'react'
import styles from '../moduleCSS/Projects.module.css'
// import Carousel from './Carousel'
import Carousel2 from './Carousel'
import react from '../media/reactjs.svg'
import rails from '../media/rails.svg'
import node from '../media/nodejs.svg'
import Modal from './Modal'

export default function Projects() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (item) => {
    setModalData(item)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const keysArray = [
        {image: "https://cdn3d.iconscout.com/3d/premium/thumb/chat-talking-5143250-4312620.png",
          display_name: "<ChatRooms/>",
          techs: [react, rails],
          name: "Chatrooms",
          link: "https://6a981bd7.chatapp-client.pages.dev/",
          desc: "Chatroom is a chat application with real-time seamless communication.",
          info: [ 
            "Crafted the client-side using ReactJS and the server-side with Ruby on Rails and PostgreSQL.",
            "Enhanced user engagement with Firebase for real-time notifications.",
            "Optimized notification efficiency by integrating Rails' Sidekiq, achieving a notable 35% improvement in message delivery response times."      
          ]
          },
        {image: require('../media/bandage.png'),
          display_name: "<Bandage Shopping/>",
          techs: [react, node],
          name: "Bandage Shopping",
          desc: "\"Bandage\", is a E-commerce hub for clothing and accessories.",
          info: [
            "Created the application from the ground up, utilizing a tech stack that included ReactJS, NodeJS, ExpressJS, and PostgreSQL.",
            "Ensured an impeccable user experience with seamless responsiveness across mobile, tablet, and web interfaces.",
            "Seamlessly integrated secure user authentication via JSON Web Tokens JWT, bolstering user data protection.",
            "Integrated Firebase for user-friendly profile picture management, enabling effortless uploads and updates."
          ]
          },
          {image: 'https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png',
          display_name: "<Swiggy Landing Page Clone/>",
          techs: [react],
          name: "Swiggy Landing Page Clone",
          desc: "\"Bandage\", is a E-commerce hub for clothing and accessories.",
          info: [
            "Created the application from the ground up, utilizing a tech stack that included ReactJS, NodeJS, ExpressJS, and PostgreSQL.",
            "Ensured an impeccable user experience with seamless responsiveness across mobile, tablet, and web interfaces.",
            "Seamlessly integrated secure user authentication via JSON Web Tokens JWT, bolstering user data protection.",
            "Integrated Firebase for user-friendly profile picture management, enabling effortless uploads and updates."
          ]
          }
      ];
  
      const items = keysArray.map((item, index) => (
        <div key={index} className={styles.window}>
          <img src={item.image} alt='' className={`${item.name === "Swiggy Landing Page Clone" ? styles.swiggyImg : styles.itemImg}`} />
          <h1>{item.display_name}</h1>
          <div className={styles.tech}>
            {item.techs.map((tech, key) => (
              <img key={key} src={tech} alt='' className={styles.techImg}/>
            ))}
          </div>
          <button className={styles.btn} onClick={() => openModal(item)} >LEARN MORE</button>
        </div>
      ));

  return (
    <>
      <div className={styles.mainContainer} id='projects'>
          <h1 className={styles.heading}>PROJECTS</h1>
          {/* <Carousel items={items} autoSlideInterval={4000} />*/}
          <Carousel2>
            {items}
          </Carousel2>
          {isModalOpen && (
              <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalData={modalData}/>
            )} 
      </div>
    </>
  )
}
