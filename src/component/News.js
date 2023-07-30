import React, { Component } from "react";
import NewsItems from "./NewsItem";


class News extends Component {
    constructor() {
        super();
        // console.log("cnst")
        this.state = {
            loading: false,
            articles: [],
            page: 1
        }
    }
    componentDidMount() {
        //it run after the render()
        // console.log("cdm")
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=92169e9419754e6a93c6dc5d5fc5f6f2&page=${this.state.page}`)
            .then((res) => res.json())
            .then((data) => { console.log(data.articles); this.setState({ articles: data.articles }) })
            .catch((err) => console.log(err))
    }
    handlePre() {
        console.log("handlePre")
        // this.setState({ page: this.state.page - 1 })
        // this.request()
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=92169e9419754e6a93c6dc5d5fc5f6f2&page=${this.state.page - 1}`)
            .then((res) => res.json())
            .then((data) => { console.log(data.articles); this.setState({ articles: data.articles, page: this.state.page - 1 }) })
            .catch((err) => console.log(err))
    }
    handleNext() {
        console.log("handleNext");
        // this.setState({ page: this.state.page + 1 })
        // this.request()
        console.log(this.state)//err
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=92169e9419754e6a93c6dc5d5fc5f6f2&page=${this.state.page + 1}`)
            .then((res) => res.json())
            .then((data) => { console.log(data.articles); this.setState({ articles: data.articles, page: this.state.page + 1 }) })
            .catch((err) => console.log(err))
    }

    render() {
        // console.log("rnd")

        return (
            <div style={{ border: "1px dashed black" }}>
                <h1>This is News Component</h1>
                <div className="card-cont">
                    {
                        this.state.articles.length > 0 ? (
                            this.state.articles.map((obj) => {
                                return (

                                    <NewsItems obj={obj} />
                                )
                            })
                        ) : (<div>Loading....</div>)
                    }

                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-primary" onClick={this.handlePre}> &#8678;pre</button>
                    <button type="button" class="btn btn-primary" onClick={this.handleNext}> next &#x21D2;</button>
                </div>
            </div>
        )
    }
}
export default News