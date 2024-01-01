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

export default function Skills() {
  return (
    <>
      <div className={styles.mainContainer} id='skills'>
        <h1 className={styles.heading}>MY SKILLS</h1>
        <div className={styles.subContainer}>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill1}`}><ReactLogo className={styles.svg}/></div>ReactJS</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill2}`}><NodeLogo className={styles.svg}/></div>NodeJS</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill3}`}><HtmlLogo className={styles.svg}/></div>HTML</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill4}`}><CssLogo className={styles.svg}/></div>CSS</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill5}`}><JsLogo className={styles.svg}/></div>Javascript</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill6}`}><PostgresLogo className={styles.svg}/></div>PostgreSQL</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill7}`}><RailsLogo className={styles.svg}/></div>Ruby on Rails</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill8}`}><JavaLogo className={styles.svg}/></div>Java</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill9}`}><AwsLogo className={styles.svg}/></div>AWS</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill10}`}><DockerLogo className={styles.svg}/></div>Docker</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill11}`}><GitLogo className={styles.svg}/></div>Git</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill12}`}><GithubLogo className={styles.svg}/></div>Github</div>
          <div className={styles.skillContainer}><div className={`${styles.skill} ${styles.skill13}`}><VscodeLogo className={styles.svg}/></div>Visual Studio</div>
        </div>
      </div>
    </>
  )
}
