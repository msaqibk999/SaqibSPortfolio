import React from 'react'
import styles from '../moduleCSS/Projects.module.css'
import { RxCross1 } from "react-icons/rx";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import openLink from '../helpers/openLink';

export default function Modal(props) {
  
  const closeModal = () => {
    props.closeModal();
  }

  const handleLinkClick = (value) => {
    if(value === 'git') openLink('https://github.com/msaqibk999');
    else openLink(value);
  }

  return (
        <dialog id='modal' className={styles.modal} open={props.isModalOpen}>
            <h1>{props.modalData.name}</h1>
            <span className={styles.itemDesc}>{props.modalData.desc}</span>
            <ul>
                {props.modalData.info.map((listItem,index) => (
                  <li key={index}>{listItem}</li>
                ))}
            </ul>
            <div>
                <button className={styles.link} onClick={() =>handleLinkClick("git")}><FaGithub /></button>
                {props.modalData?.link ? (
                    <button className={styles.link} onClick={() =>handleLinkClick(props.modalData.link)}><IoIosLink/></button>
                ):(
                    <></>
                )}
            </div>
            <button onClick={closeModal} className={styles.closeBtn}><RxCross1 /></button>
        </dialog>
  )
}
