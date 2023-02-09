import background from "./images/background.jpg";
import "./style.css";
import netflix from "./images/netflix2.png";
import tv from "./images/tv.png";
import tv2 from "./images/tv2.png";
import image from "./images/image2.jpg";
import film from "./images/film.webp";
import children from "./images/children.png";
import { BsPlusLg } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { BiGlobe } from "react-icons/bi";
import {BsGlobe2} from "react-icons/bs";
export default function Netflix() {
  return (
    <>
      {/* ****************part 1******************/}
      <div
        className="Netflix_home"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="Netflix_home_shade">
          <div className="Netflix_home_row1">
            <div className="Netflix_home_row1_left">
              <img src={netflix}></img>
            </div>
            <div className="Netflix_home_row1_right">
              <div className="Netflix_home_row1_right_select">
               <BsGlobe2 style={{marginRight:10}}/>
                <select>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>

              <button>Sign In</button>
            </div>
          </div>
          <div className="Netflix_home_row2">
            <label>Unlimited movies, TV shows and more.</label>
          </div>
          <div className="Netflix_home_row3">
            <label>Watch anywhere. Cancel anytime.</label>
          </div>
          <div className="Netflix_home_row4">
            <label>
              Ready to watch? Enter your email to create or restart your
              membership.
            </label>
          </div>
          <div className="Netflix_home_row5">
            <input type="text" placeholder="Email Address" />
            <span></span>
            <button>Get Started &gt; </button>
          </div>
        </div>
      </div>

      {/* ****************part 2******************/}
      <div className="Netflix_home_second">
        <div className="Netflix_home_second_col1">
          <label className="Netflix_home_second_col1_label1">
            Enjoy on your TV.
          </label>
          <br />
          <label className="Netflix_home_second_col1_label2">
            Watch on smart TVs, PlayStation, Xbox,
            <br />
            Chromecast, Apple TV, Blu-ray players and
            <br /> more.
          </label>
        </div>
        <div
          className="Netflix_home_second_col2"
          style={{ backgroundImage: `url(${film})` }}
        >
          <img src={tv}></img>
        </div>
      </div>
      {/* ****************part 3******************/}
      <div className="Netflix_home_third">
        <div className="Netflix_home_third_col1">
          <img src={image}></img>
        </div>
        <div className="Netflix_home_third_col2">
          <label className="Netflix_home_third_col1_label1">
            Download your shows
            <br /> to watch offline.
          </label>
          <br />
          <label className="Netflix_home_third_col1_label2">
            Save your favourites easily and always have
            <br /> something to watch.
          </label>
        </div>
      </div>
      {/* ****************part 1******************/}
      <div className="Netflix_home_second">
        <div className="Netflix_home_second_col1">
          <label className="Netflix_home_second_col1_label1">
            Watch everywhere.
          </label>
          <br />
          <label className="Netflix_home_second_col1_label2">
            Stream unlimited movies and TV shows
            <br />
            on your phone, tablet, laptop, and TV.
          </label>
        </div>
        <div className="Netflix_home_four_col2">
          <img src={tv2}></img>
        </div>
      </div>

      {/* ***************** part 1************/}

      <div className="Netflix_home_third">
        <div className="Netflix_home_third_col1">
          <img src={children}></img>
        </div>
        <div className="Netflix_home_third_col2">
          <label className="Netflix_home_third_col1_label1">
            Create profiles for
            <br /> children.
          </label>
          <br />
          <label className="Netflix_home_third_col1_label2">
            Save your favourites easily and always have
            <br /> something to watch.
          </label>
        </div>
      </div>

      {/* *****************Part1 **************** */}
      <div className="Netflix_home_four">
        <label>Frequently Asked Questions</label>

        <div className="Netflix_home_four_box1">
          <div className="Netflix_home_four_box1_left">
            <label>What is Netflix ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        <div className="Netflix_home_four_box1">
          <div className="Netflix_home_four_box1_left">
            <label>How much does Netflix cost ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        <div className="Netflix_home_four_box1">
          <div className="Netflix_home_four_box1_left">
            <label>Where I can watch ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        <div className="Netflix_home_four_box1">
          <div className="Netflix_home_four_box1_left">
            <label>How do I cancel ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        <div className="Netflix_home_four_box1">
          <div className="Netflix_home_four_box1_left">
            <label>What can I watch on Netflix ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        <div className="Netflix_home_four_box1">
          <div className="Netflix_home_four_box1_left">
            <label>Is Netflix good for kids ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>

        <div className="Netflix_home_text">
          <label>
            Ready to watch? Enter your email to create or restart your
            membership.
          </label>
        </div>
        <div className="Netflix_home_row5">
          <input type="text" placeholder="Email Address" />
          <span></span>
          <button>Get Started &gt; </button>
        </div>
      </div>
      <div className="Netflix_home_row6">
        <div className="Netflix_home_row6_footer">
          <div>
            <label>
              Questions? Call <span>000-800-919-1694</span>
            </label>
          </div>
          <div className="Netflix_home_row6_footer_list">
            <div className="Netflix_home_row6_footer_list_l1">
              <ul>
                <li>FAQ</li>
                <li>Account</li>
                <li>Jobs</li>
                <li>Privacy</li>
                <li>Contact Us</li>
                <li>Only on Netflix</li>
              </ul>
            </div>
            <div className="Netflix_home_row6_footer_list_l1">
              <ul>
                <li>Gift Card Terms</li>
                <li>Media Center</li>
                <li>Ways to Watch</li>
                <li>Cookie Preferences</li>
                <li>Speed Test</li>
              </ul>
            </div>
            <div className="Netflix_home_row6_footer_list_l1">
              <ul>
                <li>Help Center</li>
                <li>Investor Relations</li>
                <li>Terms Of Use</li>
                <li>Corporate Information</li>
                <li>Legal Notice</li>
              </ul>
            </div>
          </div>
          <div className="Netflix_home_row6_footer_drop">
            <BiGlobe />
            <select>
              <option>English</option>
              <option>Malayalam</option>
            </select>
          </div>
          <div className="Netflix_home_row6_footer_final">
            <label>Netflix india</label>
          </div>
        </div>
      </div>
    </>
  );
}
