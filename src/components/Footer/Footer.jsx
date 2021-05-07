import React , {Fragment} from 'react';
//grid
import Grid from '@material-ui/core/Grid';
import './footer.scss';

const Footer = () => {
    const url ={}
    return (
        <Fragment>
         <div className="footer__top">
            <h3 className="heading-footer clr-white middle"> Bring Awesomeness! </h3>
            <a href="/contact" className="footer__top--text btn btn--white btn--animated"> Lets Talk then </a>
        </div>

       <footer className="footer">          
             <div className="footer__iconbox">

                <a href="https://www.facebook.com">
                    <i className="fa fa-facebook footer__icon"> </i>
                    </a>   
                <a href="https://www.twitter.com"> 
                        <i className="fa fa-twitter footer__icon"></i> 
                </a>   
                <a href="https://www.linkedin.com"> 
                        <i className="fa fa-linkedin footer__icon"></i>
                    </a>   
                <a href="https://www.instagram.com"> 
                        <i className="fa fa-instagram footer__icon"></i>
                    </a> 
                <a href="https://www.youtube.com"> 
                        <i className="fa fa-youtube footer__icon"></i>
                    </a>   
                <a href="https://www.pinterest.com"> 
                    <i className="fa fa-pinterest footer__icon"></i>
                </a>                        
           </div>
           <div className="footer__box">
                    <Grid container spacing={3}>
                            <Grid item lg={4} md={4} sm={6} xs={12}  className="footer__box--content">
                        <li className="footer__box--item clr-white middle">Get In Touch</li>
                               <li className="footer__box--item">
                                   22, 1st Main Road, Vadapalani, Chennai-600026
                                   </li>
                               <li className="footer__box--item clr-white"> 
                               <i className="fa fa-phone clr-white"></i>  
                                 044 - 2662 3377, 044 - 2662 3045
                               </li>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12} className="footer__box--content">
                            <li className="footer__box--item clr-white middle">Undergraduate Programme</li>
                            <li className="footer__box--item">B.Sc - Physics</li>
                            <li className="footer__box--item">B.Sc - Maths</li>
                            <li className="footer__box--item">B.Sc - Computer Science</li>
                            <li className="footer__box--item">BCA</li>
                            <li className="footer__box--item">B.Com</li>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12} className="footer__box--content">
                            <li className="footer__box--item clr-white middle">Postgraduate Programme</li>
                            <li className="footer__box--item">M.Sc - Physics</li>
                            <li className="footer__box--item">M.Sc - Maths</li>
                            <li className="footer__box--item">M.Sc - Computer Science</li>
                            <li className="footer__box--item">MCA</li>
                            <li className="footer__box--item">MBA</li>
                            <li className="footer__box--item">M.Com</li>

                        </Grid>
                      
                </Grid>
           </div>

           <div className="footer__copyrights">
                    <a href={url} className="footer__copyrights--text">&copy; 2020. All Rights Reserved.<br/> </a>
            </div>
         
       </footer>
       </Fragment>
    );
};

export default Footer;