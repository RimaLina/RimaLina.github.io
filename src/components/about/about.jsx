import React from "react";
import "./About.css";
import DownloadButton from "./downloadButton";
import InterestBlock from "./interestBlock";
import ai from "./ai.png";
import book from "./book.png";
import history from "./history.png";
import diet from "./diet.png";

const interests = [
  {
    title: "Artificial Inteligence",
    logo: ai,
  },
  {
    title: "Books",
    logo: book,
  },
  {
    title: "History",
    logo: history,
  },
  {
    title: "Health and Nutrition",
    logo: diet,
  },
];

export default function about() {
  return (
    <div id="main" class="site-main">
      <div id="main-content" class="single-page-content">
        <div id="primary" class="content-area">
          <div
            id="content"
            class="page-content site-content single-post"
            role="main"
          >
            <article
              id="post-157"
              class="post-157 page type-page status-publish hentry"
            >
              <div class="entry-content">
                <div class="fw-page-builder-content">
                  <section class="fw-main-row">
                    <div class="fw-container">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12">
                          <div
                            id="col_inner_id-5ee5f4f99b611"
                            class="fw-col-inner"
                            data-paddings="15px 0px 15px 0px"
                          >
                            <div
                              id="home_content_954218bfd87cb3b458721f4a70135965"
                              class="home-content"
                            >
                              <div class="row flex-v-align">
                                <div class="col-sm-12 col-md-5 col-lg-5">
                                  <div class="home-photo">
                                    <div class="hp-inner">
                                      {/* <img src={logo} /> */}
                                    </div>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-md-7 col-lg-7">
                                  <div class="home-text hp-left">
                                    <div class="owl-carousel text-rotation">
                                      <div class="item">
                                        <h4>Test Engineer</h4>
                                      </div>
                                    </div>
                                    <h1>Hi, I am Rima Linaburgytė</h1>
                                    <p>
                                      Fusce tempor magna mi, non egestas velit
                                      ultricies nec. Aenean convallis, risus non
                                      condimentum gravida, odio mauris
                                      ullamcorper felis, ut venenatis purus ex
                                      eu mi. Quisque imperdiet lacinia urna, a
                                      placerat sapien pretium eu.
                                    </p>
                                    <DownloadButton />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-xs-12 col-sm-12">
                          <div
                            id="col_inner_id-5ee5f4f99caef"
                            class="fw-col-inner"
                            data-paddings="0px 0px 0px 0px"
                          >
                            <div class="block-title">
                              <h2>Interests</h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {interests.map((x) => {
                          return <InterestBlock {...x} />;
                        })}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* <!-- .entry-content --> */}
            </article>
            {/* <!-- #post-## --> */}
          </div>
          {/* <!-- #content --> */}
        </div>
        {/* <!-- #primary --> */}
      </div>
      {/* <!-- #main-content --> */}
    </div>
  );
}
