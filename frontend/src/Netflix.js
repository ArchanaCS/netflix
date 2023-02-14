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
import { BsGlobe2 } from "react-icons/bs";
import { useState } from "react";
export default function Netflix() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const handleclick = () => {
    setShow(!show);
  };
  const handleclick1 = () => {
    setShow1(!show1);
  };
  const handleclick2 = () => {
    setShow2(!show2);
  };
  const handleclick3 = () => {
    setShow3(!show3);
  };
  const handleclick4 = () => {
    setShow4(!show4);
  };
  const handleclick5 = () => {
    setShow5(!show5);
  };
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
                <BsGlobe2 style={{ marginRight: 10 }} />
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

        <div className="Netflix_home_four_box1" onClick={handleclick}>
          <div className="Netflix_home_four_box1_left">
            <label>What is Netflix ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        {show ? (
          <div className="Netflix_home_four_box1_content">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="Netflix_home_four_box1" onClick={handleclick1}>
          <div className="Netflix_home_four_box1_left">
            <label>How much does Netflix cost ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        {show1 ? (
          <div className="Netflix_home_four_box1_content">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="Netflix_home_four_box1" onClick={handleclick2}>
          <div className="Netflix_home_four_box1_left">
            <label>Where I can watch ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        {show2 ? (
          <div className="Netflix_home_four_box1_content">
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </p>
            <p>
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="Netflix_home_four_box1" onClick={handleclick3}>
          <div className="Netflix_home_four_box1_left">
            <label>How do I cancel ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        {show3 ? (
          <div className="Netflix_home_four_box1_content">
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="Netflix_home_four_box1" onClick={handleclick4}>
          <div className="Netflix_home_four_box1_left">
            <label>What can I watch on Netflix ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        {show4 ? (
          <div className="Netflix_home_four_box1_content">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
            <p></p>
          </div>
        ) : (
          ""
        )}
        <div className="Netflix_home_four_box1" onClick={handleclick5}>
          <div className="Netflix_home_four_box1_left">
            <label>Is Netflix good for kids ?</label>
          </div>
          <div className="Netflix_home_four_box1_right">
            <BsPlusLg />
          </div>
        </div>
        {show5 ? (
          <div className="Netflix_home_four_box1_content">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
            </p>
            <p>
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </p>
          </div>
        ) : (
          ""
        )}

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
