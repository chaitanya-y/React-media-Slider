import React, { Component } from "react";
import Slider from "../src/slider";
import axios from 'axios';

export default class AdaptiveHeight extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      authorurl:null,
      activeSlide: 0,
    activeSlide2: 0,
    display:false,
    lbg:"http://gdurl.com/2KuN",comm:"http://gdurl.com/P7wQ",like:"http://gdurl.com/uPle",
    as:null,whatsappicon:"http://gdurl.com/EvRE",facebookicon:"http://gdurl.com/ZxwI",instagram:"http://gdurl.com/TXgo",more:"http://gdurl.com/FyiT",
    facetwi:"http://gdurl.com/4vDW",i1:"http://gdurl.com/n7YF",i2:"http://gdurl.com/uo1S",i3:"http://gdurl.com/hCfW",
    android:"http://gdurl.com/lcSH",ios:"http://gdurl.com/kJry",cancel:"http://gdurl.com/BOvl",
    height1:50,overflowstyle1:"nowrap",height2:50,overflowstyle2:"nowrap",height3:50,overflowstyle3:"nowrap",height4:50,overflowstyle4:"nowrap",height5:40,overflowstyle5:"nowrap",moredisplay5:"block",
    fcontent:null, moredisplay2:"block", moredisplay3:"block",moredisplay4:"block",height6:50,overflowstyle6:"nowrap",moredisplay6:"block",height7:50,overflowstyle7:"nowrap",moredisplay7:"block",
    moredisplay1:"block",secondcontent:null,thirdcontent:null,fourthcontent:null,fifthcontent:null,height8:50,overflowstyle8:"nowrap",moredisplay8:"block",
    sixthcontent:null,seventhcontent:null,eighthcontent:null,ninthcontent:null,height9:50,overflowstyle9:"nowrap",moredisplay9:"block",

  };
  }
  
  componentWillMount() {
    axios("https://trell.co/third-party/tasks/trail.json").then(res => {
      console.log(res.data.data);
      console.log(res.data.data.author.id);
      const urll = res.data.data.posts[0].geoChatImage;
      console.log(urll);
      console.log(res.data.data.author.image);
      console.log(res.data.data.posts[0].about);
      this.setState({
        // imageList[0]: res.data.data.posts[0].geoChatImage
        authorurl:res.data.data.author.image,
        as:res.data.data.posts[0].geoChatImage,
        fcontent:res.data.data.posts[0].about,
        secondcontent:res.data.data.posts[1].about,
        thirdcontent:res.data.data.posts[3].about,
        fourthcontent:res.data.data.posts[4].about,
        fifthcontent:res.data.data.posts[5].about,
        sixthcontent:res.data.data.posts[6].about,
        seventhcontent:res.data.data.posts[7].about,
        eighthcontent:res.data.data.posts[8].about,
        ninthcontent:res.data.data.posts[10].about,
     
      });
    });
  }
 
  render() {
    var settings = {
      className: "trail-container",
      infinite: false,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:7000,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    
    };

    return (
      <div className="overlay-container">
        <button className="open-trail" style={{display: this.state.display ? "none" : "block"}}
        onClick={() =>this.setState({  display: !this.state.display  })}>Open Trail</button>
        <img src={this.state.cancel} className="cancel-button" style={{display: this.state.display ? "block" : "none"}}
        onClick={() =>this.setState({ display: !this.state.display})}/>

      <div className="page-container" style={{display: this.state.display ? "block" : "none"}}>
        <div className="slide-container">
        <div className="slide-count" style={{fontSize:"13px",marginTop:"10px"}}>{this.state.activeSlide}/11</div>
          <div className="image-container">
          <Slider {...settings}>
          <div className="trail-cover">
          <div id="trail-cover-container"  ></div>
          <div className="trail-header">
          <div className="trail-info">
              <h1 className="trail-name" >Velas Turtle Festival - Experimenting with my beach selections !! 🐢🌅</h1>
              <div className="trail-details">
                <span className="fposts">11 Posts</span>
                <span className="ftryouts">48 Tryouts</span>
                <span className="fviews">9596 Views</span>
                </div>
              <h5 className="trailby">Trail By</h5>
              <div className="author-attribution">
                <div className="authort-container">
                <a className="author-name">Vedika Kaushal</a>
              <a className="btn-follow">Follow</a>
              </div>
              <img src={"http://gdurl.com/BHyV"} className="author-image" style={{marginTop:"-20px",marginRight:"30px"}}/>
              </div>
            </div>
          </div>                      
          </div> 

          <div className="tale1">
            <div className="media-container">
                <div className="topcontent-container">
                <div className="location-container">
               <span className="topicon"><img src="http://gdurl.com/5QqH" style={{width:"15px",height:"15px"}} /></span> <span className="location" style={{marginLeft:"4px"}}>   Velas Beach  </span>
                </div>
                <div className="save">
               <span className="save-icon" style={{marginLeft:"1px",fontSize:"14px"}}>Save</span> <span className="topicon"><img src="http://gdurl.com/RXke" style={{width:"20px",height:"20px"}} /></span>
                </div>
                <div className="share">
                <span className="share-icon" style={{marginLeft:"1px",fontSize:"14px"}}>share Post</span><span className="topicon"><img src="http://gdurl.com/ml7z" style={{width:"20px",height:"20px"}} /></span>
                </div>
                  </div>
                  <div className="maincontent-container">
                    <div className="tale-text"  style={{height:this.state.height1 +"px",whiteSpace:this.state.overflowstyle1,transition:"0.3s linear" }}>
                    <span className="emotag" >{this.state.fcontent}</span>
                      </div>
                    </div>
                    <span className="moree1" style={{display:this.state.moredisplay1}}
                  onClick={() =>this.setState({ height1:80,overflowstyle1:"normal",moredisplay1:"none"
                  })}>...more</span>
              </div>
            </div>

            <div className="tale2">
            <div className="media-container">
                <div className="topcontent-container">
                <div className="location-container">
               <span className="topicon"><img src="http://gdurl.com/5QqH" style={{width:"15px",height:"15px"}} /></span> <span className="location" style={{marginLeft:"4px"}}>   Velas Beach  </span>
                </div>
                <div className="save">
               <span className="save-icon" style={{marginLeft:"1px",fontSize:"14px"}}>Save</span> <span className="topicon"><img src="http://gdurl.com/RXke" style={{width:"20px",height:"20px"}} /></span>
                </div>
                <div className="share">
                <span className="share-icon" style={{marginLeft:"1px",fontSize:"14px"}}>share Post</span><span className="topicon"><img src="http://gdurl.com/ml7z" style={{width:"20px",height:"20px"}} /></span>
                </div>
                  </div>
                  <div className="maincontent-container">
                    <div className="tale-text"  style={{height:this.state.height2 +"px",whiteSpace:this.state.overflowstyle2,transition:"0.3s linear" }}>
                    <span className="emotag" >{this.state.secondcontent}</span>
                      </div>
                    </div>
                    <span className="moree2" style={{display:this.state.moredisplay2}}
                  onClick={() =>this.setState({ height2:80,overflowstyle2:"normal",moredisplay2:"none"
                  })}>...more</span>
              </div>
            </div>

            <div className="tale3">
            <div className="media-container">
                <div className="topcontent-container">
                <div className="location-container">
               <span className="topicon"><img src="http://gdurl.com/5QqH" style={{width:"15px",height:"15px"}} /></span> <span className="location" style={{marginLeft:"4px"}}>   Velas Beach  </span>
                </div>
                <div className="save">
               <span className="save-icon" style={{marginLeft:"1px",fontSize:"14px"}}>Save</span> <span className="topicon"><img src="http://gdurl.com/RXke" style={{width:"20px",height:"20px"}} /></span>
                </div>
                <div className="share">
                <span className="share-icon" style={{marginLeft:"1px",fontSize:"14px"}}>share Post</span><span className="topicon"><img src="http://gdurl.com/ml7z" style={{width:"20px",height:"20px"}} /></span>
                </div>
                  </div>
                  <div className="maincontent-container">
                    <div className="tale-text"  style={{height:this.state.height3 +"px",whiteSpace:this.state.overflowstyle3,transition:"0.3s linear" }}>
                    <span className="emotag" >{this.state.thirdcontent}</span>
                      </div>
                    </div>
                    <span className="moree3" style={{display:this.state.moredisplay3}}
                  onClick={() =>this.setState({ height3:80,overflowstyle3:"normal",moredisplay3:"none"
                  })}>...more</span>
              </div>
            </div>

            <div className="tale4">
            <div className="media-container">
                <div className="topcontent-container">
                <div className="location-container">
               <span className="topicon"><img src="http://gdurl.com/5QqH" style={{width:"15px",height:"15px"}} /></span> <span className="location" style={{marginLeft:"4px"}}>   Velas Beach  </span>
                </div>
                <div className="save">
               <span className="save-icon" style={{marginLeft:"1px",fontSize:"14px"}}>Save</span> <span className="topicon"><img src="http://gdurl.com/RXke" style={{width:"20px",height:"20px"}} /></span>
                </div>
                <div className="share">
                <span className="share-icon" style={{marginLeft:"1px",fontSize:"14px"}}>share Post</span><span className="topicon"><img src="http://gdurl.com/ml7z" style={{width:"20px",height:"20px"}} /></span>
                </div>
                  </div>
                  <div className="maincontent-container">
                    <div className="tale-text"  style={{height:this.state.height4 +"px",whiteSpace:this.state.overflowstyle4,transition:"0.3s linear" }}>
                    <span className="emotag" >{this.state.fourthcontent}</span>
                      </div>
                    </div>
                    <span className="moree4" style={{display:this.state.moredisplay4}}
                  onClick={() =>this.setState({ height4:80,overflowstyle4:"normal",moredisplay4:"none"
                  })}>...more</span>
              </div>
            </div>
              
            <div className="tale5">
            <div className="media-container">
            <video  controls muted>
            <source src="https://res.cloudinary.com/trell/video/upload/user-videos/videos/orig/O4CuorbcoNNptv27Rn4z.mp4" type="video/mp4" />
            </video>
            <div className="maincontent-container">
                    {/* <div className="tale-text1"  style={{height:this.state.height5 +"px",whiteSpace:this.state.overflowstyle5,transition:"0.3s linear" }}>
                    <span  >{this.state.fifthcontent}</span>
                      </div> */}
                    </div>
              
              </div>
            </div>

            <div className="tale6">
            <div className="media-container">
                <div className="topcontent-container">
                <div className="location-container">
               <span className="topicon"><img src="http://gdurl.com/5QqH" style={{width:"15px",height:"15px"}} /></span> <span className="location" style={{marginLeft:"4px"}}>   Velas Beach  </span>
                </div>
                <div className="save">
               <span className="save-icon" style={{marginLeft:"1px",fontSize:"14px"}}>Save</span> <span className="topicon"><img src="http://gdurl.com/RXke" style={{width:"20px",height:"20px"}} /></span>
                </div>
                <div className="share">
                <span className="share-icon" style={{marginLeft:"1px",fontSize:"14px"}}>share Post</span><span className="topicon"><img src="http://gdurl.com/ml7z" style={{width:"20px",height:"20px"}} /></span>
                </div>
                  </div>
                  <div className="maincontent-container">
                    <div className="tale-text"  style={{height:this.state.height6 +"px",whiteSpace:this.state.overflowstyle6,transition:"0.3s linear" }}>
                    <span className="emotag" >{this.state.sixthcontent}</span>
                      </div>
                    </div>
                    <span className="moree2" style={{display:this.state.moredisplay6}}
                  onClick={() =>this.setState({ height6:80,overflowstyle6:"normal",moredisplay6:"none"
                  })}>...more</span>
              </div>
            </div>

            <div className="tale7">
            <div className="media-container">
                <div className="topcontent-container">
                <div className="location-container">
               <span className="topicon"><img src="http://gdurl.com/5QqH" style={{width:"15px",height:"15px"}} /></span> <span className="location" style={{marginLeft:"4px"}}>   Velas Beach  </span>
                </div>
                <div className="save">
               <span className="save-icon" style={{marginLeft:"1px",fontSize:"14px"}}>Save</span> <span className="topicon"><img src="http://gdurl.com/RXke" style={{width:"20px",height:"20px"}} /></span>
                </div>
                <div className="share">
                <span className="share-icon" style={{marginLeft:"1px",fontSize:"14px"}}>share Post</span><span className="topicon"><img src="http://gdurl.com/ml7z" style={{width:"20px",height:"20px"}} /></span>
                </div>
                  </div>
                  <div className="maincontent-container">
                    <div className="tale-text"  style={{height:this.state.height7 +"px",whiteSpace:this.state.overflowstyle7,transition:"0.3s linear" }}>
                    <span className="emotag" >{this.state.seventhcontent}</span>
                      </div>
                    </div>
                    <span className="moree2" style={{display:this.state.moredisplay7}}
                  onClick={() =>this.setState({ height7:80,overflowstyle7:"normal",moredisplay7:"none"
                  })}>...more</span>
              </div>
            </div>

            <div className="tale8">
            <div className="media-container">
                <div className="topcontent-container">
                <div className="location-container">
               <span className="topicon"><img src="http://gdurl.com/5QqH" style={{width:"15px",height:"15px"}} /></span> <span className="location" style={{marginLeft:"4px"}}>   Velas Beach  </span>
                </div>
                <div className="save">
               <span className="save-icon" style={{marginLeft:"1px",fontSize:"14px"}}>Save</span> <span className="topicon"><img src="http://gdurl.com/RXke" style={{width:"20px",height:"20px"}} /></span>
                </div>
                <div className="share">
                <span className="share-icon" style={{marginLeft:"1px",fontSize:"14px"}}>share Post</span><span className="topicon"><img src="http://gdurl.com/ml7z" style={{width:"20px",height:"20px"}} /></span>
                </div>
                  </div>
                  <div className="maincontent-container">
                    <div className="tale-text"  style={{height:this.state.height8 +"px",whiteSpace:this.state.overflowstyle8,transition:"0.3s linear" }}>
                    <span className="emotag" >{this.state.eighthcontent}</span>
                      </div>
                    </div>
                    <span className="moree2" style={{display:this.state.moredisplay8}}
                  onClick={() =>this.setState({ height8:80,overflowstyle8:"normal",moredisplay8:"none"
                  })}>...more</span>
              </div>
            </div>

            <div className="tale9">
            <div className="media-container">
                <div className="topcontent-container">
                <div className="location-container">
               <span className="topicon"><img src="http://gdurl.com/5QqH" style={{width:"15px",height:"15px"}} /></span> <span className="location" style={{marginLeft:"4px"}}>   Velas Beach  </span>
                </div>
                <div className="save">
               <span className="save-icon" style={{marginLeft:"1px",fontSize:"14px"}}>Save</span> <span className="topicon"><img src="http://gdurl.com/RXke" style={{width:"20px",height:"20px"}} /></span>
                </div>
                <div className="share">
                <span className="share-icon" style={{marginLeft:"1px",fontSize:"14px"}}>share Post</span><span className="topicon"><img src="http://gdurl.com/ml7z" style={{width:"20px",height:"20px"}} /></span>
                </div>
                  </div>
                  <div className="maincontent-container">
                    <div className="tale-text"  style={{height:this.state.height9 +"px",whiteSpace:this.state.overflowstyle9,transition:"0.3s linear" }}>
                    <span className="emotag" >{this.state.ninthcontent}</span>
                      </div>
                    </div>
                    <span className="moree2" style={{display:this.state.moredisplay9}}
                  onClick={() =>this.setState({ height9:80,overflowstyle9:"normal",moredisplay9:"none"
                  })}>...more</span>
              </div>
            </div>

            <div className="tale5">
            <div className="media-container">
            <video  controls muted>
            <source src="https://res.cloudinary.com/trell/video/upload/user-videos/videos/orig/8SsX15ZVSmByiO64R8rE.mp4" type="video/mp4" />
            </video>
            <div className="maincontent-container">
                    {/* <div className="tale-text1"  style={{height:this.state.height5 +"px",whiteSpace:this.state.overflowstyle5,transition:"0.3s linear" }}>
                    <span  >{this.state.fifthcontent}</span>
                      </div> */}
                    </div>
              
              </div>
            </div>

            <div className="lastslide-container">
            <div className="lastslide-likes">
                <img src={this.state.like} className="llike-image"/>
                <div className="llike-text" >668 Likes</div>
            </div>
            <div className="lastslide-comments" >
            <img src={this.state.comm} className="lcomm-image" />
                <div className="lcomm-text">15 comments</div>
            </div>
            <div className="videoshare">
              <div style={{fontSize:"14px"}}>SHARE TRAIL VIDEO TO:</div>
              <div className="socialmedia">
                <div className="whatsapp">
                  <img src={this.state.whatsappicon} className="socialmediaimg" />
                  <div className="socialmediatext">Whatsapp</div>
                  </div>
                  <div className="instagram">
                  <img src={this.state.instagram} className="socialmediaimg"/>
                  <div className="socialmediatext">Instagram</div>
                  </div>
                  <div className="facebook">
                  <img src={this.state.facebookicon} className="socialmediaimg"/>
                  <div className="socialmediatext">Facebook</div>
                  </div>
                  <div className="more">
                  <img src={this.state.more} className="socialmediaimg"/>
                  <div className="moretext">More</div>
                  </div>
                </div>
              </div>
            <div className="user-info">
              <div className="viewmoretext">VIEW MORE TRAILS BY</div>
              <img src={this.state.authorurl} className="luser-img"/>
              <div className="luser-name">Vedika Kaushal</div>
            </div>
          </div>

         


        </Slider>
            </div>
          </div>

          <div className="details-container">
            <div className="details" style={{display : this.state.activeSlide === 11 ? "none" :"block"
            }}>
              <div className="sharetrail">
              <img src={this.state.facetwi} className="sharetrailicon" />
              <div className="sharetrailtext" >Share Trail</div>
              </div>
              <div className="likes">
              <img src= {this.state.like} className="likeicon" />
              <div className="liketext">Like</div>
              <div className="likescount">668</div>
              </div>
              <div className="comments">
              <img src= "http://gdurl.com/ONk2" className="commentsicon"/>
              <div className="commentstext">Comments</div><div className="commentscount">15</div>
              </div>
              <div className="views">
              <img src= "http://gdurl.com/OpUY" className="viewsicon" />
              <div className="viewtext" >View</div><div className="viewscount">9596</div>
              </div>
              </div>

              <div className="suggestedtrails-container">
                <div style={{fontSize:"12px",fontWeight:"600",marginLeft:"10px"}}> SUGGESTED TRAILS:</div>
                <ul className="suggestedlist">
                  <li className="s1"><img src={this.state.i1} className="i1" /></li>
                  <li className="s2"><img src={this.state.i2} className="i2"/></li>
                  <li className="s3"><img src={this.state.i3} className="i3"/></li>
                </ul>
                </div>

                <div className="tags-container">
                  <div style={{fontSize:"12px",fontWeight:"650",marginLeft:"13px"}}>TAGS</div>
                  <ul className="tagslist">
                  <li className="t1">Nightlife</li>
                  <li className="t2">Budget Travel</li>
                  <li className="t3">Signature Food Places</li>
                  <li className="t4">Nightlife</li>
                </ul>
                  </div>

               


            </div>
            <div className="downloadapp">
                  <div style={{color:"#ffffff", width:"200px", fontSize:"12px",fontWeight:"600",marginTop:"7px"}}>Download the app</div>
                  <div className="android">
                    <span><img src={this.state.android} className="androidicon" /></span>
                    <span className="androidtext">Android</span>
                    </div>
                    <div className="ios">
                    <span ><img src={this.state.ios} className="iosicon"/></span>
                    <span className="iphonetext">Iphone</span>
                    </div>
                </div>
     
      </div></div>
    );
  }
}
