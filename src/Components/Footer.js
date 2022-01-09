import React from "react";
import { Button } from "react-bootstrap";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";


function footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h1>
                <i class="fa fa-road"></i>Pain Care
              </h1>
              <div class="row">
                <div class="col-6">
                  <ul class="list-unstyled">
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Services</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul class="list-unstyled">
                    <li>
                      <a href="">Gallery</a>
                    </li>
                    <li>
                      <a href="">Articles</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul class="nav">
                <li class="nav-item">
                  <FacebookIcon></FacebookIcon>
                </li>
                <li class="nav-item">
                  <TwitterIcon></TwitterIcon>
                </li>
                <li class="nav-item">
               <GitHubIcon></GitHubIcon>
                </li>
                <li class="nav-item">
              <InstagramIcon></InstagramIcon>
                </li>
              </ul>
              <br />
            </div>
            <div class="col-md-2">
              <h5 class="text-md-right">Contact Us</h5>
              <hr />
            </div>
            <div class="col-md-5">
              <form>
                <fieldset class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleMessage"
                    placeholder="Message"
                  ></textarea>
                </fieldset>
                <fieldset class="form-group text-xs-right">
                  <Button variant="secondary" className="send">
                    Send
                  </Button>{" "}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
