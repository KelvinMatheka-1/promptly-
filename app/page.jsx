import Feed from '@components/Feed'
import Page from '@components/Tweets'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Nena is an open source AI prompting tool for modern world to discover, create and share creative prompts
      </p>
      <Feed />
      <Page />
    </section>
  )
}

export default Home