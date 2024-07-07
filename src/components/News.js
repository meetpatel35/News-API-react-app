import React, { useEffect, useState } from 'react'
import NewsComp from './NewsComp'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props)=>{
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState([])
    const [totalResults,setTotalResults] = useState(0)
    News.defaultProps = {
        country: 'in',
        pageSize: 8,
        catagory: "general"
    }
    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        catagory: PropTypes.string
    }
    // articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Richard Pollina",
    //         "title": "Paula Abdul sues 'American Idol' executive Nigel Lythgoe for alleged sexual assault - New York Post ",
    //         "description": "“Lythgoe knew and was aware that his treatment of Abdul was inappropriate and even criminal,” the suit states.",
    //         "url": "https://nypost.com/2023/12/30/entertainment/paula-abdul-sues-american-idol-executive-nigel-lythgoe-for-sexual-assault/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/12/newspress-collage-64mb2lryz-1703925140771.jpg?quality=75&strip=all&1703907220&w=1024",
    //         "publishedAt": "2023-12-30T09:08:00Z",
    //         "content": "Paula Abdul accused former American Idol and So You Think You Can Dance producer Nigel Lythgoe of allegedly sexually assaulting her multiple times, according to a lawsuit filed Friday in Los Angeles.… [+4488 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Elizabeth Wolfe, Robert Shackelford",
    //         "title": "Massive waves and life-threatening beach conditions to slam California coast for third day - CNN",
    //         "description": "Monstrous waves continue to wreak havoc along the California coast, where beachside communities have been facing damaging flooding and life-threatening water conditions as a series of storms makes its way onshore.",
    //         "url": "https://www.cnn.com/2023/12/30/weather/california-oregon-waves-flooding-saturday/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231229095859-11-california-high-surf-1228.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-12-30T08:19:00Z",
    //         "content": "Massive waves and coastal flooding are wreaking havoc for a third day in many of Californias coastal communities, where extreme conditions have forced water rescues, washed away cars and injured a ha… [+3649 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "al-jazeera-english",
    //             "name": "Al Jazeera English"
    //         },
    //         "author": "Al Jazeera",
    //         "title": "Biden administration bypasses Congress on weapons sales to Israel - Al Jazeera English",
    //         "description": "For second time in a month, US approves munitions for Israel while calling for end to mass civilian deaths.",
    //         "url": "https://www.aljazeera.com/news/2023/12/30/biden-administration-bypasses-congress-on-weapon-sales-to-israel",
    //         "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/AP23294776664967-1698312525-1703205067.jpg?resize=1200%2C630&quality=80",
    //         "publishedAt": "2023-12-30T07:43:38Z",
    //         "content": "The administration of United States President Joe Biden has once again bypassed Congress to greenlight an emergency weapons sale to Israel, which has only intensified and broadened its attacks on the… [+4276 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Suntimes.com"
    //         },
    //         "author": "Georgia Nicols",
    //         "title": "Horoscope for Saturday, Dec. 30, 2023 - Chicago Sun-Times",
    //         "description": null,
    //         "url": "https://chicago.suntimes.com/2023/12/30/24015984/horoscopes-today-saturday-dec-30-2023",
    //         "urlToImage": "https://cst.brightspotcdn.com/dims4/default/effcc51/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FXstWs-ZZHf7WgWxkEBsq62nsP8U%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F25187741%2FGeorgia_mug.jpeg",
    //         "publishedAt": "2023-12-30T06:03:10Z",
    //         "content": "Moon Alert\r\nThere are no restrictions to shopping or important decisions today until 11 p.m. Chicago time. The moon is in Leo.\r\nAries (March 21-April 19)\r\nThis is a fun-loving day! In particular, its… [+3836 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "Lauren Steussy, Hannah Getahun",
    //         "title": "Chinese spy balloon used US-based internet company to navigate: report - Business Insider",
    //         "description": "Officials were gathering intel on the Chinese spy balloon, including which US internet service provider it was using, officials told NBC News.",
    //         "url": "https://www.businessinsider.com/chinese-spy-balloon-used-us-internet-company-to-navigate-report-2023-12",
    //         "urlToImage": "https://i.insider.com/658f4aa1ab6f2ebb11f7ec48?width=1200&format=jpeg",
    //         "publishedAt": "2023-12-30T05:16:00Z",
    //         "content": "Before the rest of the country learned about a Chinese spy balloon hovering over American territory\r\n,US intelligence officials were quietly gathering intel on the balloon including which US internet… [+2655 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "HT Entertainment Desk",
    //         "title": "Gypsy Rose Blanchard used money father sent in prison to buy Taylor Swift albums - Hindustan Times",
    //         "description": "Gypsy Rose Blanchard has said that Taylor Swift was her rock as she served out her prison sentence for orchestrating the murder of her mother.",
    //         "url": "https://www.hindustantimes.com/entertainment/music/gypsy-rose-blanchard-taylor-swift-albums-money-father-sent-in-prison-101703911876373.html",
    //         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/30/1600x900/Gypsy_Rose_Blanchard_hopes_to_meet_Taylor_Swift_1703912063356_1703912072639.jpeg",
    //         "publishedAt": "2023-12-30T05:11:08Z",
    //         "content": "Gypsy Rose Blanchard is a Swiftie. Gypsy, who conspired with then-boyfriend to kill her mother in 2015 and was released on parole from a US prison on Thursday, said that Taylor Swift's songs kept her… [+2338 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cbs-news",
    //             "name": "CBS News"
    //         },
    //         "author": null,
    //         "title": "Oregon newspaper forced to lay off entire staff after discovering that an employee embezzled funds - CBS News",
    //         "description": "When the Eugene Weekly realized it couldn't make the next payroll, it was forced to lay off all of its 10 staff members and stop its print edition.",
    //         "url": "https://www.cbsnews.com/news/oregon-newspaper-eugene-weekly-lays-off-entire-staff-employee-embezzled-funds/",
    //         "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/12/30/e391821c-7b77-4f93-822a-8a5397bb54c6/thumbnail/1200x630/fe9b2aae13cd3d49465ec811cdee6bff/ap23363845491397.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
    //         "publishedAt": "2023-12-30T04:51:03Z",
    //         "content": "An Oregon weekly newspaper has had to lay off its entire staff and halt print after 40 years because its funds were embezzled by a former employee, its editor said, in a devastating blow to a publica… [+4328 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bleacher-report",
    //             "name": "Bleacher Report"
    //         },
    //         "author": "Paul Kasabian",
    //         "title": "Ryan Day, OSU Slammed by Fans for Abysmal Offense in Cotton Bowl Loss vs. Missouri - Bleacher Report",
    //         "description": "The No. 7 Ohio State football team failed to score a touchdown for the first time in seven years on Friday en route to a 14-3 loss to the No. 9 Missouri…",
    //         "url": "https://bleacherreport.com/articles/10102946-ryan-day-osu-slammed-by-fans-for-abysmal-offense-in-cotton-bowl-loss-vs-missouri",
    //         "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1703906276/igkc8omjjqdizq0xsyjz.jpg",
    //         "publishedAt": "2023-12-30T04:33:55Z",
    //         "content": "Sam Hodde/Getty Images\r\nThe No. 7 Ohio State football team failed to score a touchdown for the first time in seven years on Friday en route to a 14-3 loss to the No. 9 Missouri Tigers in the Cotton B… [+7476 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Athletic"
    //         },
    //         "author": "Nick Kosmider",
    //         "title": "Russell Wilson ‘disappointed’ Broncos planned to bench him for refusing contract change - The Athletic",
    //         "description": "Payton said \"this decision is strictly what I believe gives us a chance for win No. 8.\"",
    //         "url": "https://theathletic.com/5168754/2023/12/29/russell-wilson-sean-payton-broncos-benching/",
    //         "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/12/29172054/GettyImages-1792373938-scaled.jpg",
    //         "publishedAt": "2023-12-30T04:26:16Z",
    //         "content": "Denver Broncos quarterback Russell Wilson said he was disappointed and surprised when coach Sean Payton told him this week he would be benched for the seasons final two games.\r\nWilson, speaking Frida… [+2972 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WMUR Manchester"
    //         },
    //         "author": "Arielle Mitropoulos",
    //         "title": "One dead, another hospitalized, after contracting Legionnaires' disease following stay at New Hampshire resort hotel, officials say - WMUR Manchester",
    //         "description": "New Hampshire health officials said Friday that two cases of Legionnaires' disease have been identified in people who stayed at the Mountain View Grand Resort in Whitefield, and one person has died.",
    //         "url": "https://www.wmur.com/article/legionnaires-disease-new-hampshire-resort-122923/46252964",
    //         "urlToImage": "https://kubrick.htvapps.com/vidthumb/22cb30fa-e8f6-4c21-9465-8ce5ba882656/22cb30fa-e8f6-4c21-9465-8ce5ba882656_image.jpg?crop=0.785xw:0.786xh;0.0636xw,0&resize=1200:*",
    //         "publishedAt": "2023-12-30T04:25:00Z",
    //         "content": "MANCHESTER, N.H. —New Hampshire health officials said Friday that two cases of Legionnaires' disease have been identified in people who stayed at the Mountain View Grand Resort in Whitefield, and one… [+1912 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-wall-street-journal",
    //             "name": "The Wall Street Journal"
    //         },
    //         "author": "Chun Han Wong, Wenxin Fan",
    //         "title": "China Appoints New Defense Minister to Fill an Unexpected Vacancy - The Wall Street Journal",
    //         "description": "Adm. Dong Jun replaces Gen. Li Shangfu, who was yanked after just seven months in the job",
    //         "url": "https://www.wsj.com/world/china/china-appoints-new-defense-minister-to-fill-an-unexpected-vacancy-bc0f1941",
    //         "urlToImage": "https://images.wsj.net/im-906632/social",
    //         "publishedAt": "2023-12-30T04:15:00Z",
    //         "content": "SINGAPOREChina named a top navy admiral as its new defense minister, two months after Beijing abruptly removed the previous appointee without explanation.\r\nAdm. Dong Jun, who most recently served as … [+338 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "usa-today",
    //             "name": "USA Today"
    //         },
    //         "author": "Zach Kruse",
    //         "title": "Packers Wire staff predictions: Week 17 vs. Vikings - Packers Wire",
    //         "description": "Here’s how the staff at Packers Wire believes the Week 17 showdown with the Vikings will go down.",
    //         "url": "https://packerswire.usatoday.com/lists/packers-wire-staff-predictions-week-17-vs-vikings/",
    //         "urlToImage": "https://packerswire.usatoday.com/wp-content/uploads/sites/57/2019/09/packerswire_sp_1980x1080.png?w=1024&h=576&crop=1",
    //         "publishedAt": "2023-12-30T03:35:00Z",
    //         "content": "Should the Packers win this game? Probably. Does that mean they will? I’m not so confident. Corner Jaire Alexander will be serving his one-game suspension, which could open the door for a big perform… [+725 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": "Reuters",
    //         "title": "McDonald's Malaysia sues Israel boycott movement for $1 mln in damages - Reuters",
    //         "description": null,
    //         "url": "https://www.reuters.com/world/mcdonalds-malaysia-sues-israel-boycott-movement-1-mln-damages-2023-12-30/",
    //         "urlToImage": null,
    //         "publishedAt": "2023-12-30T03:05:36Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Jamiel Lynch, Carma Hassan, Sara Smart",
    //         "title": "122 anglers rescued from ice floe in northern Minnesota lake, no injuries reported - CNN",
    //         "description": "A total of 122 anglers were successfully rescued from an ice floe that detached from the main ice on a northern Minnesota lake Friday evening, and no injuries were reported.",
    //         "url": "https://www.cnn.com/2023/12/29/us/minnesota-ice-rescue-122-people/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231229195727-minnesota-ice-rescue-upper-red-lake-1229-map.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-12-30T02:57:00Z",
    //         "content": "A total of 122 anglers were successfully rescued from an ice floe that detached from the main ice on a northern Minnesota lake Friday evening, and no injuries were reported.\r\nThe Beltrami County Sher… [+2965 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "[Removed]"
    //         },
    //         "author": null,
    //         "title": "[Removed]",
    //         "description": "[Removed]",
    //         "url": "https://removed.com",
    //         "urlToImage": null,
    //         "publishedAt": "1970-01-01T00:00:00Z",
    //         "content": "[Removed]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5google.com"
    //         },
    //         "author": "Ben Schoon",
    //         "title": "Galaxy S24 leak details AI photo editing feature - 9to5Google",
    //         "description": "New Galaxy S24 leaks detail several new features coming, including an AI editing feature that sounds identical to Google's Magic Eraser.",
    //         "url": "https://9to5google.com/2023/12/29/galaxy-s24-ai-editing-leaks/",
    //         "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/02/samsung-galaxy-s23-ultra-12-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2023-12-30T02:45:00Z",
    //         "content": "As Samsung’s launch event for the Galaxy S24 series approaches, more new details are coming out. In the latest series of leaks, new high-quality images have surfaced as well as details on a few key A… [+2243 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "newsweek",
    //             "name": "Newsweek"
    //         },
    //         "author": "Jon Jackson",
    //         "title": "Putin's major aerial attack on Ukraine cost Russia $1.2 billion: Report - Newsweek",
    //         "description": "An analysis of Russia's massive Friday attack estimated the cost of weapons expended to be over $1.2 billion.",
    //         "url": "https://www.newsweek.com/putins-major-aerial-attack-ukraine-cost-russia-12-billion-report-1856666",
    //         "urlToImage": "https://d.newsweek.com/en/full/2329829/workers-respond-fire-kyiv.jpg",
    //         "publishedAt": "2023-12-30T02:37:29Z",
    //         "content": "Russian President Vladimir Putin's military on Friday launched what's been called the largest aerial attack of the Ukraine war, and one economic-focused Ukrainian outlet estimated the cost of the ass… [+3432 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "usa-today",
    //             "name": "USA Today"
    //         },
    //         "author": "Kayla Jimenez, Minnah Arshad",
    //         "title": "Authorities beef up security for New Years Eve celebrations across US after FBI warnings - USA TODAY",
    //         "description": "The FBI advised police across the US this month about potential threats to New Years Eve gatherings due to tensions from the Israel-Hamas conflict.",
    //         "url": "https://www.usatoday.com/story/news/nation/2023/12/29/new-years-eve-security-police/72061182007/",
    //         "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/12/29/USAT/72053558007-vpc-times-square-nye-ball-courtesy-timessquareball-dot-net.jpg?crop=1919,1079,x0,y0&width=1919&height=1079&format=pjpg&auto=webp",
    //         "publishedAt": "2023-12-30T02:36:07Z",
    //         "content": "Americans and travelers who are planning to see the Times Square ball drop in person on New Year's Eve will be surrounded by heightened security measures in the hours ahead of and after ringing in 20… [+5284 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NBC Chicago"
    //         },
    //         "author": "Matt Stefanski, NBC Chicago Staff",
    //         "title": "Several Chicago-area health systems reinstate mask requirements as respiratory viruses spread - NBC Chicago",
    //         "description": "Several Chicago-area hospital systems have reinstated mask policies due to an increase in cases of respiratory viruses and new recommendations from the Illinois Department of Public Health.",
    //         "url": "http://www.nbcchicago.com/news/local/illinois-mask-mandate-health-care-health-systems/3313742/",
    //         "urlToImage": "https://media.nbcchicago.com/2021/11/generic-vaccine-masks.png?resize=1200%2C675&quality=85&strip=all",
    //         "publishedAt": "2023-12-30T02:01:18Z",
    //         "content": "Several Chicago-area hospital systems have reinstated mask policies due to an increase in cases of respiratory viruses and new recommendations from the Illinois Department of Public Health. \r\nAt leas… [+3334 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cbs-news",
    //             "name": "CBS News"
    //         },
    //         "author": "Kathryn Watson",
    //         "title": "Ohio Gov. Mike DeWine vetoes bill banning gender-affirming care for transgender minors - CBS News",
    //         "description": "Ohio's Republican governor said parents, not the government, should make decisions on gender-affirming medical care.",
    //         "url": "https://www.cbsnews.com/news/ohio-gov-mike-dewine-vetoes-bill-banning-gender-affirming-care-for-transgender-minors/",
    //         "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/11/06/f0e1d67f-de5d-4574-b263-937dd91541a8/thumbnail/1200x630g2/d9524a68a53d99e85adc95084f831482/ap19101527561236.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
    //         "publishedAt": "2023-12-30T01:33:00Z",
    //         "content": "Ohio's Republican Gov. Mike DeWine announced Friday that he has vetoed a bill that would have banned medical practitioners from providing gender-affirming care for transgender minors, saying he belie… [+3490 chars]"
    //     }
    // ]
    // constructor(props) {
    //     super(props);
        
    //     document.title = "NewsMarket " + props.catagory
    // }

    const updateNews = async ()=>{
        // props.setProgress =(0);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=77bd69264d57493aa0c442e8945a7ef9&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        
        console.log(parsedData)
        // props.setProgress =(100);
    }

    useEffect(()=>{
        updateNews();
    },[])
    // async componentDidMount() {
        // this.updateNews();
        // console.log(parsedData)
    // }
    const handlePreBtn = async () => {
        updateNews();
            // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=77bd69264d57493aa0c442e8945a7ef9&page=${page - 1}&pageSize=${props.pageSize}`;
            // this.setState({
            //         loading: true
            //     })
            //     let data = await fetch(url);
            //     let parsedData = await data.json();
            // this.setState({
                // page: page - 1
                // articles: parsedData.articles,
                // loading: false
            // })
            setPage(page-1)
        }
        const handleNextBtn = async () => {
        // this.updateNews();
        if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=77bd69264d57493aa0c442e8945a7ef9&page=${page + 1}&pageSize=${props.pageSize}`;
            
            setLoading(true)
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData)
            // this.setState({
            //     page: page + 1,
            //     articles: parsedData.articles,
            //     loading: false
            // })
            setArticles(parsedData.articles)
            setPage(page+1)
            setLoading(false)
        }
    }
    

    // fetchMore = async ()=>{
    //     this.setState({page:page+1})
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=77bd69264d57493aa0c442e8945a7ef9&page=1&pageSize=${props.pageSize}`;
    //     this.setState({
    //         loading: true
    //     })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: articles.concat(parsedData.articles),
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     });
    //     //console.log(articles.concat(parsedData.articles))
        
    // };

    
        return (
            <>
            <div className='container'>
                <h2 className='my-10 text-center'>Top Headlines by News Market from {props.catagory} category</h2>
                {loading && <Spinner />}

                {/* <InfiniteScroll dataLength = {articles.length} next={this.fetchMore} hasMore={articles.length !== totalResults} loader={<Spinner/>}> */}
                {/* <div className='container'> */}
                <div className='row'>
                    {articles?.map((element) => {
                        return <div className='col-md-4 my-2' key={element.url} >
                            <NewsComp title={element.title ? element.title.slice("0,90") : ""} description={element.description ? element.description.slice(0, 90) : ""} imgurl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                {/* </div> */}
                {/* </InfiniteScroll> */}
                
                <div className='container d-flex justify-content-between'>
                    <button type="button" className="btn btn-dark" onClick={handlePreBtn} disabled={page <= 1}>Previous</button>
                    <button type="button" className="btn btn-dark" onClick={handleNextBtn} disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}>Next</button>
                </div>
            </div>
            </>
        )
    


}

export default News