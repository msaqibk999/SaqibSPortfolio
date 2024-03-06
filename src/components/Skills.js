import React from 'react'
import styles from '../moduleCSS/Skills.module.css'
import {ReactComponent as ReactLogo} from '../media/reactjs.svg'
import {ReactComponent as NodeLogo} from '../media/nodejs.svg'
import {ReactComponent as HtmlLogo} from '../media/html.svg'
import {ReactComponent as CssLogo} from '../media/css.svg'
import {ReactComponent as JsLogo} from '../media/javascript.svg'
import {ReactComponent as PostgresLogo} from '../media/postgresql.svg'
import {ReactComponent as RailsLogo} from '../media/rails.svg'
import {ReactComponent as JavaLogo} from '../media/java.svg'
import {ReactComponent as AwsLogo} from '../media/aws.svg'
import {ReactComponent as DockerLogo} from '../media/docker.svg'
import {ReactComponent as GitLogo} from '../media/git.svg'
import {ReactComponent as GithubLogo} from '../media/github.svg'
import {ReactComponent as VscodeLogo} from '../media/vs-code.svg'
import { CircularProgressBar } from './CircularProgressBar'

export default function Skills() {
  return (
    <>
      <div className={styles.mainContainer} id='skills'>
        <h1 className={styles.heading}>MY SKILLS</h1>
        <div className={styles.subContainer}>
          <CircularProgressBar progressEndValue={85} speed={10} skill={"ReactJS"}><ReactLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={75} speed={10} skill={"NodeJS"}><NodeLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"HTML"}><HtmlLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"CSS"}><CssLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"Javascript"}><JsLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={85} speed={10} skill={"PostgreSQL"}><PostgresLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={70} speed={10} skill={"Rails"}><RailsLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"Java"}><JavaLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={70} speed={10} skill={"AWS"}><AwsLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={70} speed={10} skill={"Docker"}><DockerLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"Git"}><GitLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"Github"}><GithubLogo className={styles.svg}/></CircularProgressBar>
          <CircularProgressBar progressEndValue={95} speed={10} skill={"VS Code"}><VscodeLogo className={styles.svg}/></CircularProgressBar>
        </div>
      </div>
    </>
  )
}
