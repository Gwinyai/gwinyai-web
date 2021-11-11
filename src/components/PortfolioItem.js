export default function PortfolioItem({ heading, description, image }) {
  return (
    <>
      <div className="portfolio-item">
        <div className="portfolio-img">
          <img src={image} />
        </div>
        <div className="portfolio-details">
          <h2 className="portfolio-item-heading">{heading}</h2>
          <p className="portfolio-item-description">{description}</p>
        </div>
      </div>
    </>
  );
}
