import React, { Component } from "react";
import NewsItems from "./NewsItem";
import Spinner from "./Spinner"
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 5,
        category: "general",
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    };
    constructor() {
        super();
        // console.log("cnst") 

        // In modern JavaScript and React, you generally don't need to manually(explicitly) bind functions in class-based components when using arrow functions for class methods. This is because arrow functions automatically bind 'this' to the instance of the class. However, if you use a regular function declaration, you should bind the function to 'this' in the constructor to ensure that 'this' refers to the component instance when the function is invoked.        this.handlePre = this.handlePre.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.request = this.request.bind(this);
        this.state = {
            loading: false,
            articles: [],
            page: 1,
            totalResults: 0,
            error: "",
        }
    }
    componentDidMount() {
        //it run after the render()//may be silmilar to useEfffect
        // console.log("cdm")
        this.request(1)
    }
    handlePre() {
        console.log("handlePre")
        this.setState({ page: this.state.page - 1 })
        this.request(this.state.page - 1);

    }
    handleNext() {
        console.log("handleNext")
        this.setState({ page: this.state.page + 1 })
        this.request(this.state.page + 1)

    }
    request(page) {
        console.log(this.state.page, page)
        this.setState({ loading: true })
        this.props.setProgress(30);
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}&category=${this.props.category}&q=`)
            .then((res) => { console.log(res); this.props.setProgress(60); return res.json(); })
            .then((data) => {
                if (data.status === "error") { console.log(data.code, data.message); this.props.setProgress(10); this.setState({ error: data.message }); return; }
                console.log(data.totalResults);
                this.setState({
                    articles: data.articles, totalResults: data.totalResults, loading: false, error: ""

                })
                this.props.setProgress(100);
                document.title = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " - NewsMonkeys";
            })
            .catch((err) => { console.log(err); this.props.setProgress(10); this.setState({ error: err.message }); })
    }


    fetchMoreData = () => {
        setTimeout(() => {

            this.setState({ loading: true });
            fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}&q=`)
                .then((res) => { console.log(res); return res.json(); })
                .then((data) => {
                    if (data.status === "error") { console.log(data.code, data.message); this.setState({ error: data.message }); return; }
                    console.log(data.totalResults);
                    this.setState({
                        articles: this.state.articles.concat(data.articles)
                        , totalResults: data.totalResults, loading: false, page: this.state.page + 1, error: ""

                    })
                    console.log(this.state.articles)
                    document.title = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " - NewsMonkeys";
                })
                .catch((err) => { console.log(err); this.setState({ error: err.message }); })


        }, 2000)
    };

    render() {
        // console.log("rnd")

        return (
            <div style={{ marginTop: "100px" }}>
                <h1 style={{ marginBottom: "10px" }}>Top HeadLine - {`${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Category`}</h1>
                {/* {this.state.loading && (<Spinner />)} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="card-cont">
                        {
                            // (!this.state.loading && this.state.articles.length > 0) ? (
                            //     this.state.articles.map((obj, i) => {
                            //         return (<NewsItems obj={obj} i={i} />)
                            //     })
                            // ) : ("")


                            this.state.articles.length > 0 && (this.state.articles.map((obj, i) => {
                                return (<NewsItems obj={obj} i={i} />)
                            }))
                        }

                        {
                            this.state.error && (<p style={{ color: "red" }}>{this.state.error}</p>)
                        }

                    </div>
                </InfiniteScroll>


                {/* {(!this.state.loading) && (
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page === 1} type="button" className="btn btn-primary" onClick={this.handlePre}> &#8678;pre</button>
                        <button type="button" className="btn btn-primary" disabled={(this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.handleNext}> next &#x21D2;</button>
                    </div>
                )} */}
            </div>
        )
    }
}
export default News