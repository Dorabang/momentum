import React from "react";
import { QuotesStyle, QuoteStyle, AutherStyle } from "style/style";

const Quotes = () => {
  const quotes = [
    {
      quote:
        "You will face many defeats in life, but never let yourself be defeated.",
      author: "Maya Angelou",
    },
    {
      quote:
        "We must believe in luck. For how else can we explain the success of those we don’t like?",
      author: "Jean Cocteau",
    },
    {
      quote:
        "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.",
      author: "Jim Rohn",
    },
    {
      quote: "Kites rise highest against the wind, not with it",
      author: "Winston Leonard Spencer Churchill",
    },
    {
      quote: "Imagination means mothing without doing.",
      author: "Charles Chaplin",
    },
    {
      quote: "Everybody has talent, but ability takes hard work.",
      author: "Michael Jordan",
    },
    {
      quote: "Learn from yesterday, live for today, hope for tomorrow.",
      author: "Albert Einstein",
    },
    {
      quote:
        "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
    },
    {
      quote:
        "It is better to fail in originality than to succeed in imitation.",
      author: "Herman Melville",
    },
    {
      quote: "In order to succeed, we must first believe that we can.",
      author: "Nikos Kazantzakis",
    },
  ];

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <QuotesStyle>
        <QuoteStyle>{todaysQuote.quote}</QuoteStyle>
        <AutherStyle>{todaysQuote.author}</AutherStyle>
      </QuotesStyle>
    </>
  );
};

export default Quotes;
