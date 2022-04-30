// import React from "react";


// const About = () => {
//   return (
//     <>
//     <h1>About Us</h1>
//     <h3 style={{color:"blue"}}>eNote - Your notebook on the cloud</h3>
//     <p>This is eNote . You can use it to save your important notes. The notes will be saved in the cloud. You notes are secured on the cloud. You can edit your notes. Also you can delete. you can create your multiple accounts and sign in with your details. you can view your information in the settings page.<br/><br/>

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla ut deleniti ea, dolores debitis suscipit sint numquam quidem maiores inventore perferendis quis voluptatum omnis commodi esse exercitationem illum rem aut illo modi ratione, facilis laborum? Dignissimos magnam ullam amet, id blanditiis placeat? Officia odit expedita eum accusamus ab possimus culpa rerum, maiores, in minima velit et provident laudantium quo nihil natus neque aperiam reiciendis dolore? Tenetur libero ex, repellat laboriosam odio placeat ab consequuntur! Id, officiis! Quasi distinctio ipsum repudiandae ducimus numquam veritatis aspernatur. Qui cum ea eligendi sunt debitis blanditiis inventore provident delectus facere labore possimus sed cupiditate nobis animi corporis ipsum explicabo nam fugiat totam officia hic, modi impedit! Tempore quam enim aspernatur nobis labore accusamus ut a quae ipsam cupiditate. Atque quo distinctio, sit facilis molestiae fuga veniam recusandae fugit est blanditiis nulla, officia natus ut nobis? Suscipit velit quo voluptas obcaecati sint quibusdam sunt omnis fugit! Nobis, nostrum! Obcaecati temporibus, vitae dolorem ipsum nihil minima dignissimos perspiciatis adipisci. Quo saepe reprehenderit aperiam vero iure? Alias, nulla. Quo doloribus illo illum veritatis veniam molestiae cum quasi facere cupiditate quas praesentium in nulla, reprehenderit porro necessitatibus et optio mollitia. Perspiciatis necessitatibus dolorum dolorem eos sequi. Modi, perferendis?</p>
//     </>
//   );
// };

// export default About;



import React from 'react'
// import Navbar from "./Navbar";
import '../index.css';
import awesome from './images/hello.jpg'
import login from './images/about - awesome.svg'
import { Link } from "react-router-dom";
// import { Button } from '@mui/material';
import Alert from "./Alert";

function About() { 


    const button = document.querySelector('.bur');
    const element = document.querySelector('ul');
    button.addEventListener('click',()=>{
        element.scrollIntoView({behavior:'smooth',block: "end"});
    })

    return (
        <div>
            {/* <Navbar /> */}
            <Alert />
            <button type="button" className='bur'>Click Me!</button>
            <div className="text-white aboutImg text-center">
                <div className="note-img" style={{marginLeft:"20px"}}>
                    <h1 className="display-4 b-margin">Perfectly Content</h1>
                    <p className="t-margin">An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbance</p>
                </div>
            </div>
            {/* #9C27B0 */}
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Make something <span style={{ color: "rgb(205 216 0)" }}>Awesome</span> </h2>
                        <p>eNote is made from the pain of writing all the things in notebook which is very hectic 😴, So we mad an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbance.
                            you can also access your notes anywhere in your world, at anytime. So dont forget to Create note because creating anything is always important
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                            {/* <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button> */}
                            {/* <button component={Link} to="/register" type="button" class="btn btn-primary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</button>                      */}
                            <Link className="btn mx-1 butt"  to="/login" role="button" style={{ color: "white", textTransform: "none", fontFamily: "sans-serif", fontSize: "18px" }}>Create New Note</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid awesome" src={awesome} alt="about-awesome" />
                    </div>
                </div>

                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="about-awesome" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={{ color: "rgb(205 216 0)" }}>internet’s visuals</span> </h2>
                        <p>
                            How we started? The concept was simple. eNote was born from the pain of writing all the things in notebook which is very hectic.
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbance.
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                            {/* <Button component={Link} to="/register" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Sign up now</Button> */}
                            {/* <button component={Link} to="/register" type="button" class="btn btn-primary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Sign up now</button> */}
                            <Link className="btn mx-1 butt-2" to="/signup" role="button" style={{ color: "#F2F2F2", textTransform: "none", fontFamily: "sans-serif", fontSize: "18px" }}>Sign Up Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#fff200" }}>i</span>Notebook</span>
                        </div>     
                        <div className="media-icons">
                            <a href="https://www.linkedin.com/in/ajay-karode-63743621a" target={"_blank"}><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://instagram.com/ajay.karode13?igshid=YmMyMTA2M2Y=" target={"_blank"}><i className="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/ajay.karode.10" target={"_blank"}><i className="fab fa-facebook-f"></i></a>
                
                            {/* #9C27B0 */}
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="/login">Sign-in</Link></li>
                            <li><Link to="/signup">Join Free</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Access</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">New Notes</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/">Get started</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><Link to="/">Your Notes</Link></li>
                            <li><Link to="/login">New Note</Link></li>
                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">About eNote</li>
                            <li style={{color: "#B6B6B6"}}>
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2022 <Link to="/">eNote</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default About