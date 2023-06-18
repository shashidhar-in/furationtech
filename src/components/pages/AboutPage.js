import React from 'react';
import { Link } from 'react-router-dom';
import book from '../../img/book.jpg'


const AboutPage = () => {
    return ( 
        <>
            <div className="container-fluid" id="welcome-div">
                <h5 style={{paddingTop: "20px",textAlign:"left"}}> <Link className="link" to="/"> Home </Link> / About </h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={book} alt="about-book" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h1>Our Story</h1>
                        <p style={{lineHeight: '30px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente
                        tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis
                        beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt 
                        sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus 
                        unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe 
                        sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                    </div>
                </div>
            </div>
        </>
        
     );
}
 
export default AboutPage;