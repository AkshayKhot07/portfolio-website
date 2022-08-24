import "./Article.css";

export default function Article() {
  return (
    <div className="articles-container">
      <h2>Articles</h2>
      <p>
        Space to pen down my thoughts on software development, work experiences
        and much more.
      </p>

      <div className="articles-2022-container">
        <h2 className="articles-2022-title">2022</h2>
        <div className="all-articles-2022">
          <div className="article-2022-one">
            <a
              href={`https://dev.to/akshaykhot07/creating-an-accordion-using-vanilla-javascript-3o55`}
              className="article-2022"
              target="_blank"
            >
              Creating an Accordion using vanilla Javascript
            </a>
            <span className="article-date">24'Aug</span>
          </div>
        </div>
      </div>
    </div>
  );
}
