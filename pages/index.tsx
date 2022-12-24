import Vimeo from '@u-wave/react-vimeo'
import Head from 'next/head'
import React, { useState } from 'react'

import BlogHeader from '../components/blog-header'
import Container from '../components/container'
import GridContainer from '../components/grid-container'
import HeroPost from '../components/hero-post'
import IntroTemplate from '../components/intro-template'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { indexQuery, settingsQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import post from '../schemas/post'

export default function Index({
  allPosts: initialAllPosts,
  preview,
  blogSettings,
}) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  const [heroPost, ...morePosts] = allPosts || []
  const { title = 'Blog.' } = blogSettings || {}
  const [bgColour, setBgColour] = useState('#fafafa')

  const appStyles = {
    height: '100vh',
    background: `${bgColour}`,
  }
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <BlogHeader title={title} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              video={heroPost.video}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <GridContainer>
            {allPosts.map((post) => (
              <li key={post._id}>{post.title}</li>
            ))}
          </GridContainer>
        </Container>
        {/* <IntroTemplate /> */}
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  /* check if the project id has been defined by fetching the vercel envs */
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
    const blogSettings = await getClient(preview).fetch(settingsQuery)

    return {
      props: { allPosts, preview, blogSettings },
      // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    }
  }

  /* when the client isn't set up */
  return {
    props: {},
    revalidate: undefined,
  }
}
