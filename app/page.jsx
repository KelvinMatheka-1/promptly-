import React from 'react';
import Feed from '@components/Feed';
import { Tweet } from 'react-tweet';

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
        Nena is an open source AI prompting tool for the modern world to discover, create, and share creative prompts
      </p>
      <Feed />
    </section>
  );
}

const Page = () => {
  return <Tweet id="1628832338187636740" />;
}

export { Home, Page };
