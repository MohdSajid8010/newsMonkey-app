import React, { Component } from "react";
let api_key = "92169e9419754e6a93c6dc5d5fc5f6f2"
export default class NewsItems extends Component {
    //  {obj}=this.props;
    render() {
        let { obj } = this.props;
        return (

           obj?( <div className="card" style={{ width: "18rem" }} key={obj.urlToImage}>
                <img src={obj.urlToImage?(obj.urlToImage):("https://media.cnn.com/api/v1/images/stellar/prod/230403155319-trump-classified-documents-file.jpg?c=16x9&q=w_800,c_fill")} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{obj.title.slice(0,22)}</h5>
                    {obj.description?(<p className="card-text">{obj.description.slice(0,22)}</p>):(<p className="card-text">no description</p>)}
                    <a href={obj.url} target="_blanck" className="btn btn-primary">Read More...</a>
                </div>
            </div>):("")

        )
    }
}