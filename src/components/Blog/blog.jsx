import React from "react";
import Post from "./post";

export default function blog() {
  return (
    <div id="main" class="site-main">
      <div id="main-content" class="single-page-content">
        <div id="primary" class="content-area">
          <div class="page-title">
            <h1>Blog</h1>
          </div>

          <div
            id="content"
            class="page-content site-content single-post"
            role="main"
          >
            <article
              id="post-83"
              class="post-83 page type-page status-publish hentry"
            >
              <div class="entry-content">
                <div class="fw-page-builder-content">
                  <section class="fw-main-row">
                    <div class="fw-container">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12">
                          <div
                            id="col_inner_id-5ee5f4fd6bb3a"
                            class="fw-col-inner"
                            data-paddings="0px 0px 0px 0px"
                          >
                            <div
                              class="fw-divider-space"
                              style={{ paddingTop: "7px" }}
                            ></div>
                            <Post />
                          </div>
                        </div>
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
