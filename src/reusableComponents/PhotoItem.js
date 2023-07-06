import React from "react";

function PhotoItem(props) {
    let {title,thumbnailUrl, key} = props;
  return (
    <div>
     <div className="card" key={key}>
          <img style={{height: "12em"}} src={thumbnailUrl } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    </div>
  );
}

export default PhotoItem;
