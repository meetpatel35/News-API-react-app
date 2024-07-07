import React from 'react'

const NewsComp = (props)=> {
    

        let {title,description ,imgurl ,newsUrl} = props;
        return (
            <div>
                <div className="card rounded-3 mx-2" style={{width: "22vw", height:"32vw"}}>
                    <img src={imgurl?imgurl:"https://www.hindustantimes.com/ht-img/img/2023/12/30/1600x900/TOPSHOT-ISRAEL-PALESTINIAN-CONFLICT-1_1703927730828_1703927780477.jpg"} className="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title"> {title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsComp
