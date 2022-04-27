import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className = "my-3">
          <div className="card" > 
          <img className="card-img-top" src={imageUrl} alt=""/><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
  </span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark text-light">Read More</a>
          </div>
        </div>
    </div>
    

    )

}

export default NewsItem
