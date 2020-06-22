import React from 'react';

export default function Post() {
    return (
        <div class="blog-masonry two-columns clearfix">
        <div class="item post-123">
          <div class="blog-card">
            <div class="media-block">
              <div class="category">
                <a
                  href="https://lmpixels.com/wp/leven-wp/full-width/category/design/"
                  title="View all posts in Design"
                  >Blogpost</a
                >
              </div>
              <a
                href="https://lmpixels.com/wp/leven-wp/full-width/2019/12/04/why-i-switched-to-sketch-for-ui-design/"
              >
                <img
                  width="1920"
                  height="900"
                  src="https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/blog_post_5_full.jpg"
                  class="attachment-blog-masonry-image-two-c size-blog-masonry-image-two-c wp-post-image"
                  alt="Why I Switched to Sketch For UI Design"
                  title=""
                  srcset="
                    https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/blog_post_5_full.jpg          1920w,
                    https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/blog_post_5_full-300x141.jpg   300w,
                    https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/blog_post_5_full-1024x480.jpg 1024w,
                    https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/blog_post_5_full-768x360.jpg   768w,
                    https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/blog_post_5_full-1536x720.jpg 1536w
                  "
                  sizes="(max-width: 768px) 92vw, (max-width: 992px) 450px, (max-width: 1200px) 597px, 40vw"
                />
                <div class="mask"></div>
              </a>
            </div>
            <div class="post-info">
              <div class="post-date">01 Jun 2020</div>
              <a
                href="https://lmpixels.com/wp/leven-wp/full-width/2019/12/04/why-i-switched-to-sketch-for-ui-design/"
                ><h4 class="blog-item-title">
                  Why I Switched to Sketch For UI
                  Design
                </h4></a
              >
            </div>
          </div>
        </div>
      </div>
    );
}