import React, { Component } from "react";
let api_key = "92169e9419754e6a93c6dc5d5fc5f6f2"
export default class NewsItems extends Component {
    //  {obj}=this.props;
    render() {
        let { obj, i } = this.props;
        return (

            obj ? (<div className="card" style={{ width: "18rem" }} key={Date.now()}>
                <img src={obj.urlToImage ? (obj.urlToImage) : ("https://media.cnn.com/api/v1/images/stellar/prod/230403155319-trump-classified-documents-file.jpg?c=16x9&q=w_800,c_fill")} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{obj.title.slice(0, 68)}</h6>
                    {obj.description ? (<p className="card-text">{obj.description.slice(0, 65)}</p>) : (<p className="card-text">no description</p>)}
                    <p className="card-text"><small className="text-body-secondary">By {obj.source.name} On {new Date(obj.publishedAt).toUTCString().slice(0, 22)}</small></p>
                    <a href={obj.url} target="_blanck" className="btn btn-primary">Read More...</a>

                    <span className="position-absolute top-0  badge bg-danger" style={{ right: "0px" }}>
                        {obj.author ? obj.author : "Unknown"}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            </div>) : ("")

        )
    }
}