import './index.css'

const BannerCard = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={className}>
      <div>
        <h1 className="banner-heading">{headerText}</h1>
        <p className="banner-description">{description}</p>
        <button className="show-more-btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCard
