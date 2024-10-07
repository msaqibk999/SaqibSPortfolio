import React from 'react'
import styles from '../moduleCSS/Skills.module.css'
import {ReactComponent as ReactLogo} from '../media/skills/ReactLogo.svg'
import {ReactComponent as NodeLogo} from '../media/skills/NodeLogo.svg'
import {ReactComponent as HtmlLogo} from '../media/skills/HtmlLogo.svg'
import {ReactComponent as CssLogo} from '../media/skills/CssLogo.svg'
import {ReactComponent as JsLogo} from '../media/skills/JsLogo.svg'
import {ReactComponent as MysqlLogo} from '../media/skills/MysqlLogo.svg'
import {ReactComponent as PostgresLogo} from '../media/skills/PostgresLogo.svg'
import {ReactComponent as MongodbLogo} from '../media/skills/MongodbLogo.svg'
import {ReactComponent as RailsLogo} from '../media/skills/RailsLogo.svg'
import {ReactComponent as JavaLogo} from '../media/skills/JavaLogo.svg'
import {ReactComponent as AwsLogo} from '../media/skills/AwsLogo.svg'
import {ReactComponent as DockerLogo} from '../media/skills/DockerLogo.svg'
import {ReactComponent as MaterialUI} from '../media/skills/MaterialUI.svg'
import {ReactComponent as GithubLogo} from '../media/skills/GithubLogo.svg'
import {ReactComponent as VscodeLogo} from '../media/skills/VscodeLogo.svg'
import { CircularProgressBar } from './CircularProgressBar'

export default function Skills() {
  return (
    <>
      <div className={styles.mainContainer} id='skills'>
        <h1 className={styles.heading}>MY SKILLS</h1>
        <div className={styles.subContainer}>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"HTML"}><HtmlLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"CSS"}><CssLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"Javascript"}><JsLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"ReactJS"}><ReactLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={85} speed={10} skill={"NodeJS"}><NodeLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={85} speed={10} skill={"MySQL"}><MysqlLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={85} speed={10} skill={"MongoDB"}><MongodbLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={85} speed={10} skill={"PostgreSQL"}><PostgresLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={85} speed={10} skill={"Java"}><JavaLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={70} speed={10} skill={"Rails"}><RailsLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={80} speed={10} skill={"MaterialUI"}><MaterialUI className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={75} speed={10} skill={"AWS"}><AwsLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={70} speed={10} skill={"Docker"}><DockerLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"Github"}><GithubLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"VS Code"}><VscodeLogo className={styles.svg}/></CircularProgressBar>
        </div>
      </div>
    </>
  )
}
