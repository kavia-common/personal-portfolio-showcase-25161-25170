import React, { useEffect } from 'react';
import '../../styles/doubleview-calendar-38-11401.css';

const DoubleViewCalendar3811401 = () => {
  useEffect(() => {
    // Migrate any minimal behavior from assets/doubleview-calendar-38-11401.js if applicable
  }, []);

  return (
    <div className="screen-doubleview-calendar-38-11401">
      <div id="doubleview-calendar-38-11401" className="screen" role="application" aria-label="Double-view calendar screen">
        <div className="root-bg" aria-hidden="true"></div>

        <section className="calendar-card" role="region" aria-label="Calendar">
          <div className="header" role="group" aria-label="Month navigation">
            <button className="nav-btn prev" aria-label="Previous month">
              <img className="chev" src="/assets/figmaimages/figma_image_38_11754_7_1816_7_1720_7_979.png" alt="" />
            </button>

            <div className="month-year">
              <div className="pill month" role="button" aria-label="Month selector">
                <div className="pill-inner">
                  <div className="month-label">April</div>
                  <img className="dropdown-icon" src="/assets/figmaimages/figma_image_38_11754_7_3202_38_12376_38_12394.png" alt="" />
                </div>
              </div>

              <div className="pill year" role="button" aria-label="Year selector">
                <div className="pill-inner">
                  <div className="year-label">2021</div>
                  <span className="dropdown-icon year-placeholder" aria-hidden="true"></span>
                </div>
              </div>
            </div>

            <button className="nav-btn next" aria-label="Next month">
              <span className="chev-placeholder" aria-hidden="true"></span>
            </button>
          </div>

          <div className="dow-row" role="row">
            <div className="dow-pill"><div className="dow-inner"><div className="dow-txt">Mo</div></div></div>
            <div className="dow-pill"><div className="dow-inner"><div className="dow-txt">Tu</div></div></div>
            <div className="dow-pill"><div className="dow-inner"><div className="dow-txt">We</div></div></div>
            <div className="dow-pill"><div className="dow-inner"><div className="dow-txt">Th</div></div></div>
            <div className="dow-pill"><div className="dow-inner"><div className="dow-txt">Fr</div></div></div>
            <div className="dow-pill"><div className="dow-inner"><div className="dow-txt">Sa</div></div></div>
            <div className="dow-pill"><div className="dow-inner"><div className="dow-txt">Su</div></div></div>
          </div>

          <div className="weeks" role="grid" aria-label="Calendar dates">
            <div className="week" role="row">
              <div className="day dis"><div className="day-in dis"><div className="day-txt dis-txt">29</div></div></div>
              <div className="day dis"><div className="day-in dis"><div className="day-txt dis-txt">30</div></div></div>
              <div className="day dis"><div className="day-in dis"><div className="day-txt dis-txt">31</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">1</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">2</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">3</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">4</div></div></div>
            </div>

            <div className="week" role="row">
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">5</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">6</div></div></div>
              <div className="day"><div className="day-in today"><div className="day-txt today-txt">7</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">8</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">9</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">10</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">11</div></div></div>
            </div>

            <div className="week" role="row">
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">12</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">13</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">14</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">15</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">16</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">17</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">18</div></div></div>
            </div>

            <div className="week" role="row">
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">19</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">20</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">21</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">22</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">23</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">24</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">25</div></div></div>
            </div>

            <div className="week" role="row">
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">26</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">27</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">28</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">29</div></div></div>
              <div className="day"><div className="day-in ena"><div className="day-txt ena-txt">30</div></div></div>
              <div className="day dis"><div className="day-in dis"><div className="day-txt dis-txt">1</div></div></div>
              <div className="day dis"><div className="day-in dis"><div className="day-txt dis-txt">2</div></div></div>
            </div>
          </div>
        </section>

        <section className="dropdown-overlay" aria-label="Month dropdown">
          <div className="dropdown-list">
            <div className="dropdown-col">
              <div className="dropdown-item"><span className="dropdown-text">January</span></div>
              <div className="dropdown-item"><span className="dropdown-text">February</span></div>
              <div className="dropdown-item"><span className="dropdown-text">March</span></div>
              <div className="dropdown-item active"><span className="dropdown-text active">April</span></div>
              <div className="dropdown-item"><span className="dropdown-text">May</span></div>
            </div>
          </div>
          <div className="dropdown-divider-full" aria-hidden="true"></div>
          <div className="dropdown-divider-short" aria-hidden="true"></div>
        </section>

        <div className="hand" aria-hidden="true">
          <img className="hand-ellipse" src="/assets/figmaimages/figma_image_38_11911_38_11389.png" alt="" />
          <img className="hand-icon" src="/assets/figmaimages/figma_image_38_11911_38_11390_2_599.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DoubleViewCalendar3811401;
