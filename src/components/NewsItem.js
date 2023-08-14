import React, { Component } from "react";

export class NewsItem extends Component {
   
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success " style={{left: '80%', zIndex: '1'}}>{source}</span>
          <img src={!imageUrl?"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/69F0/production/_130202172_b6912394d952a7a2705d33ae80505d7afffecfb5.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"UNKNOWN":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
