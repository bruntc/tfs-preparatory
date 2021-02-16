import React from "react";
import utilStyles from '../styles/utils.module.css'
import {Card} from './card'

export default function About () {
  return (
    <section className={utilStyles.headingMd}>
      <p>About me</p>
      <Card title="title" paragraph="aasdasdasdasd"/>
    </section>
  )
}
