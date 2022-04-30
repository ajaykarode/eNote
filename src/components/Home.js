import Notes from './Notes';
import noteImg from '../components/images/abc.webp'
import { Link } from "react-router-dom";

const Home = (props) => {
  const {showAlert} = props
  return (
  <>

<div className="container-fluid responsive">
                <div className="row">
                    <div className="col-md-5 ab">
                        <h1 className="display-1 pt-5 ps-5"><span style={{ color: "rgb(205 216 0)npm" }}>i</span>Notebook</h1>
                        <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Your notebook on cloud - safe and secure</p>
                        <p className="ps-5 mt-3 respo" style={{ fontSize: "1rem" }}>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee. For more info you can checkout our <Link to="/about">About Page</Link>  </p>
                        <div className="d-flex justify-content-center">
                        <Link className="btn mx-1 butt"  to="/login" role="button" style={{ color: "white", textTransform: "none", fontFamily: "sans-serif", fontSize: "18px" }}>Create New Note</Link>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex flex-column align-items-center">
                        <img className="img-fluid" style={{width: "75%",marginLeft:"50px",marginTop:"30px"}} src={noteImg} alt="eNote" />
                    </div>
                </div>

       
    </div>

      <Notes showAlert={showAlert} />
  </>
  );
};

export default Home;
