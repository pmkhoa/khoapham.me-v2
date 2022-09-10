import Link from 'next/link'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Khoa Pham</title>
        </Head>
        <section>
          <p>Hi there! I'm Khoa Pham, senior web application developer in Portland, Oregon.</p>
          <p>I'm currently working at <a href="https://romance.website" target="_blank">Romance</a> as Founding Partner and Director of Technology. My main focus is to work with Romance team to deliver best user experience products for our clients. I love experimenting with new technologies and focusing on application architecture.</p>
          <p>You can find me on <a target="_blank" href="https://twitter.com/pmkhoa">Twitter</a>, <a target="_blank" href="http://www.linkedin.com/in/pmkhoa">Linkedin</a>, and <a target="_blank" href="https://github.com/pmkhoa">Github</a>.</p>
          <p>In the past few years, I was lucky to have opportunity to work with many talented people to finish projects for clients like: Nike, UberEats, Resku, Joyn, OneSight, SAP, Adidas,  Ratio Coffee, Seastar, Workspot, and others.</p>
          <p>I also enjoy helping non-profit organizations and and local businesses.
          If you have challenging projects that need with, don't hesitate to <a href="mailto:khoa.pham@me.com">contact me</a>.</p>
        </section>
      </Layout>
    </>
  )
}
