import React from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    tag: 'Market Update',
    title: 'February 2026 Market Update',
    date: 'February 14, 2026',
    stats: [
      { value: '~$610,000', label: 'Avg. Home Price' },
      { value: '75–80 days', label: 'Avg. Days on Market' },
      { value: '5.7–6.3%', label: 'Current Interest Rates' },
    ],
    intro: `Right now, the housing market feels more balanced and less rushed than we've seen in the past. Home prices are still holding strong, but properties are taking a little longer to sell — giving buyers more time to explore options and make confident decisions.`,
    callout: {
      heading: 'USDA Loans — What You Need to Know',
      body: `A USDA loan is a home loan backed by the U.S. Department of Agriculture, designed for eligible buyers in rural and some suburban areas. One major benefit is that it often requires no down payment and offers competitive interest rates. Income and location requirements do apply, so not every home or buyer will qualify.`,
      footnote: 'Rates and eligibility are dependent on loan type and credit score.',
    },
    closing: `Whether you're buying, selling, or just keeping an eye on the market, I'm always here to help you navigate your next move. Reach out anytime — I'd love to chat!`,
  },
];

export default function Blog() {
  return (
    <div className="blog-page">
      <h1>Nested Notes</h1>
      <p className="blog-subtitle">Monthly insights, market updates & home tips from Lauren</p>

      {posts.map((post) => (
        <article key={post.id} className="blog-post">
          <span className="post-tag">{post.tag}</span>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-date">{post.date}</p>

          <div className="post-body">
            {post.stats && (
              <div className="market-stats">
                {post.stats.map((s) => (
                  <div key={s.label} className="stat-card">
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            )}

            <p>{post.intro}</p>

            {post.callout && (
              <div className="callout">
                <h3>{post.callout.heading}</h3>
                <p>{post.callout.body}</p>
                <small>{post.callout.footnote}</small>
              </div>
            )}

            <p>{post.closing}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
