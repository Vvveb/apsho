Vvveb.Sections.add("apsho/all-post-header", {
    name: "All post header",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/all-post-header-thumb.jpeg",
    html: `<section class="page-header">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1>@@title</h1>
        <p>
          @@description
        </p>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/all-post", {
    name: "All post",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/all-post-thumb.jpeg",
    html: `<section class="blog" data-v-component-posts="popular" data-v-limit="6">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html" data-v-post-url>
              <img src="images/blog/blog-post-1.jpg" alt="blog-thumb" data-v-post-image />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html" data-v-post-url>
                <span data-v-post-name>Exciting updates to Aspho Mobile App</span>
              </a>
            </h2>
            <div class="post-author">
              <div class="thumb" data-v-if="post.avatar">
                <img src="images/client/client-1.png" alt="author-thumb" data-v-post-avatar />
              </div>
              <div class="meta">
                <h3 data-v-post-display_name>Jesia Lickons</h3>
                <span data-v-post-created_at data-filter-friendly_date>Jan 20, 2020</span>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html">
              <img src="images/blog/blog-post-2.jpg" alt="blog-thumb" data-v-post-image />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html" data-v-post-url>
                <span data-v-post-name>A new year, a new website. Introducing Apsho 1.3</span>
              </a>
            </h2>
            <div class="post-author">
              <div class="thumb">
                <img src="images/client/client-3.png" alt="author-thumb" />
              </div>
              <div class="meta">
                <h3>Marlon Simons</h3>
                <span data-v-post-created_at data-filter-friendly_date>Jan 20, 2020</span>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html">
              <img src="images/blog/blog-post-3.jpg" alt="blog-thumb" />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html">Announcing our 2020 Roadmap</a>
            </h2>
            <div class="post-author">
              <div class="thumb">
                <img src="images/client/client-2.png" alt="author-thumb" />
              </div>
              <div class="meta">
                <h3>Jackson Wick</h3>
                <p>Jul 13, 2020</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html">
              <img src="images/blog/blog-post-4.jpg" alt="blog-thumb" />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html">Announcing our 2019 Roadmap</a>
            </h2>
            <div class="post-author">
              <div class="thumb">
                <img src="images/client/client-3.png" alt="author-thumb" />
              </div>
              <div class="meta">
                <h3>Jesia Lickons</h3>
                <p>Jul 13, 2020</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html">
              <img src="images/blog/blog-post-5.jpg" alt="blog-thumb" />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html">A new year, a new website. Introducing Apsho 1.2
              </a>
            </h2>
            <div class="post-author">
              <div class="thumb">
                <img src="images/client/client-2.png" alt="author-thumb" />
              </div>
              <div class="meta">
                <h3>Marlon Simons</h3>
                <p>Jul 13, 2020</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html">
              <img src="images/blog/blog-post-6.jpg" alt="blog-thumb" />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html">Announcing our 2016 Roadmap</a>
            </h2>
            <div class="post-author">
              <div class="thumb">
                <img src="images/client/client-1.png" alt="author-thumb" />
              </div>
              <div class="meta">
                <h3>Jackson Wick</h3>
                <p>Jul 13, 2020</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-12">
        <div class="blog-pagination">
          <nav>
            <ul class="pagination">
              <li class="page-item active" aria-current="page">
                <span class="page-link">
                  1
                  <span class="sr-only">(current)</span>
                </span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <i class="ti-angle-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/blog-post", {
    name: "Blog post",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/blog-post-thumb.jpeg",
    html: `<section class="blog-post" id="blog" data-v-component-posts="popular" data-v-limit="3">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <div class="section-title">
          <h2>Recent Articles</h2>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html" data-v-post-url>
              <img src="images/blog/blog-post-1.jpg" alt="blog-thumb" data-v-post-image />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html" data-v-post-url>
                <span data-v-post-name>Exciting updates to Aspho Mobile App</span>
              </a>
            </h2>
            <div class="post-author">
              <div class="thumb" data-v-if="post.avatar">
                <img src="images/client/client-1.png" alt="author-thumb" data-v-post-avatar />
              </div>
              <div class="meta">
                <h3 data-v-post-display_name>Jesia Lickons</h3>
                <span data-v-post-created_at data-filter-friendly_date>Jan 20, 2020</span>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html">
              <img src="images/blog/blog-post-2.jpg" alt="blog-thumb" />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html">A new year, a new website. Introducing Apsho 1.3
              </a>
            </h2>
            <div class="post-author">
              <div class="thumb">
                <img src="images/client/client-3.png" alt="author-thumb" />
              </div>
              <div class="meta">
                <h3>Marlon Simons</h3>
                <p>Jul 13, 2020</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post-item">
          <div class="blog-post-thumb">
            <a href="single-blog.html">
              <img src="images/blog/blog-post-3.jpg" alt="blog-thumb" />
            </a>
          </div>
          <div class="blog-post-content">
            <h2>
              <a href="single-blog.html">Announcing our 2020 Roadmap</a>
            </h2>
            <div class="post-author">
              <div class="thumb">
                <img src="images/client/client-2.png" alt="author-thumb" />
              </div>
              <div class="meta">
                <h3>Jackson Wick</h3>
                <p>Jul 13, 2020</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="see-all-post col-12">
        <a href="/blog" data-text="See all posts" class="btn btn-primary">
          <span>See all posts</span>
        </a>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/contact-form", {
    name: "Contact form",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/contact-form-thumb.jpeg",
    html: `<section class="contact">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">


        <div class="contact-form-input" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-page">

          <form class="contact-form row" method="POST">

            <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">

            <div class="notifications" data-v-notifications>

              <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
                </div>

                <div class="flex-grow-1 align-self-center text-small">
                  <div>
                    <div data-v-notification-text>
                      This is a placeholder for a notification message.
                    </div>
                  </div>
                </div>


                <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

              <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1 la-check-circle"></i>
                </div>

                <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
                  This is a placeholder for a success message.
                </div>

                <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

              <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1  la-info-circle"></i>
                </div>

                <div class="flex-grow-1 align-self-center" data-v-notification-text>
                  This is a placeholder for a info message.
                </div>

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

            </div>

            <div class="col-lg-6">
              <input type="text" class="form-control" placeholder="Full Name" name="name" required />
            </div>
            <div class="col-lg-6">
              <input type="email" class="form-control" placeholder="Email" name="email" required />
            </div>
            <div class="col-12">
              <input type="text" class="form-control" placeholder="Subject" name="subject" />
            </div>
            <div class="col-12">
              <textarea name="message" class="form-control" placeholder="Message" required cols="30" rows="7" required></textarea>
            </div>
            <div class="col-6 align-self-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="termCondition" />
                <label class="form-check-label" for="termCondition">
                  Accept <a href="/page/terms-conditions">terms and conditions</a>
                </label>
              </div>
            </div>

            <!-- if these hidden inputs are filled then ignore, robots -->

            <input type="text" class="form-control d-none" placeholder="Subject" name="contact-form">

            <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

            <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">

            <div class="col-6 text-right">
              <button class="btn btn-primary-filled" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/contact-header", {
    name: "Contact header",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/contact-header-thumb.jpeg",
    html: `<section class="page-header">
  <div class="container">
    <div class="row">
      <div class="col-12" data-v-component-site>
        <h2>Let's talk about everything</h2>
        <p>
          Don't like forms send us an email
          <a href="mailto:contact@mysite.com" data-v-site-contact-email>
            <span data-v-site-contact-email>contact@mysite.com</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/faq", {
    name: "Faq",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/faq-thumb.jpeg",
    html: `<section class="faq" id="faq">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="faq-content">
          <h2>
            Frequently asked questions
          </h2>
          <p>
            The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="faq-accordion" id="faqAccordion">
          <div class="faq-accordion-item">
            <div class="header">
              <h5 class="mb-0">
                <button class="btn btn-link " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false">
                  How to Install Apsho?
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse show" data-parent="#faqAccordion">
              <div class="body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                a, expedita dolorum consequatur magni commodi tempore nesciunt
                soluta veritatis corporis iste labore eaque aliquam, sapiente
                debitis dignissimos aut exercitationem minima.
              </div>
            </div>
          </div>
          <div class="faq-accordion-item">
            <div class="header">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false">
                  Is there any age limit?
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" data-parent="#faqAccordion">
              <div class="body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita modi quaerat exercitationem quis perferendis officiis
                eius, quia commodi cumque, iusto, voluptatum accusantium quod
                voluptate esse nesciunt? Voluptates ratione dolores vero.
              </div>
            </div>
          </div>
          <div class="faq-accordion-item">
            <div class="header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree">
                  How much it costs to get started?
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" data-parent="#faqAccordion">
              <div class="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                corporis dolor culpa optio fugiat officiis laudantium corrupti
                perferendis, veritatis quis maxime esse commodi nobis impedit
                placeat vel autem hic saepe.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/feature", {
    name: "Feature",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/feature-thumb.jpeg",
    html: `<section class="feature" id="about">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="feature-image">
          <img src="images/feature/feature-shape-01.svg" class="feature-image-shape1" style="left: -25%; top: 10%;" alt="feature-image-shape" />
          <img src="images/feature/feature-illustration-one.png" alt="feature-image" />
          <img src="images/feature/feature-shape-02.svg" style="right: -13%; top: 45%;" class="feature-image-shape2" alt="feature-image-shape" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="feature-content ml-25">
          <h2>
            Ultimate experiences with story, emotion
          </h2>
          <p>
            The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog flick
            quartz vex nymphs. Waltz bad nymph for quick vex! Fox nymphs grab
            quick-jived waltz.
          </p>
          <p>
            Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl
            quack. Quick wafting zephyrs.
          </p>
          <a href="#" data-text="Try It Free" class="btn btn-primary">
            <span>Try It Free</span>
          </a>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-6 order-2 order-lg-1">
        <div class="feature-content mr-25">
          <h2>
            Product start analytics with real problems.
          </h2>
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs.
          </p>
          <div class="feature-content-list">
            <ul>
              <li>
                <i class="ti-check"></i>
                <p>Next to the hosting account you want to use.</p>
              </li>
              <li>
                <i class="ti-check"></i>
                <p>Select or enter the domain name you want to use.</p>
              </li>
              <li>
                <i class="ti-check"></i>
                <p>After you purchase a hosting plan</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-6 order-1 order-lg-2">
        <div class="feature-image">
          <img src="images/feature/feature-shape-03.svg" class="feature-image-shape3" style="right: -25%; top: 10%;" alt="feature-image-shape" />
          <img src="images/feature/feature-illustration-two.png" alt="feature-image" />
          <img src="images/feature/feature-shape-04.svg" style="left: -20%; top: 42%;" class="feature-image-shape4" alt="feature-image-shape" />
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/footer-inner", {
    name: "Footer inner",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/footer-inner-thumb.jpeg",
    html: `<footer class="footer" data-v-component-site>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="footer-subscribe-title">
          <h2>Get the latest app updates</h2>
        </div>
      </div>
      <div class="col-lg-8 mx-auto">

        <div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="subscribe">

          <form action="" method="post" class="footer-subscribe-form">
            <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">

            <!-- if these hidden inputs are filled then ignore, robots -->

            <input type="text" class="form-control d-none" placeholder="Subject" name="contact-form">

            <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

            <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


            <div class="notifications" data-v-notifications>

              <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
                </div>

                <div class="flex-grow-1 align-self-center text-small">
                  <div>
                    <div data-v-notification-text>
                      This is a placeholder for a notification message.
                    </div>
                  </div>
                </div>


                <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

              <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1 la-check-circle"></i>
                </div>

                <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
                  This is a placeholder for a success message.
                </div>

                <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

              <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1  la-info-circle"></i>
                </div>

                <div class="flex-grow-1 align-self-center" data-v-notification-text>
                  This is a placeholder for a info message.
                </div>

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

            </div>

            <div class="from-group">
              <div class="input-group">
                <input type="email" name="email" class="form-control" placeholder="Enter Your E-mail">
                <div class="subscribe">
                  <button class="btn btn-subscribe" type="submit">
                    <span class="btn-area">
                      Subscribe
                    </span>
                    <svg class="icon-left" xmlns="http://www.w3.org/2000/svg" width="16.317" height="15.323" viewBox="0 0 16.317 15.323">
                      <g data-name="Group 1167">
                        <g data-name="Group 1166">
                          <path data-name="Path 1349" d="M.004 5.359a.7.7 0 00.587.693l6.091 1.609L.591 9.27a.7.7 0 00-.587.693v4.656a.7.7 0 00.206.5.726.726 0 00.119.1.7.7 0 00.675.044l14.911-6.958a.7.7 0 000-1.274L1.004.066a.7.7 0 00-1 .637zm13.952 2.3" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                    <svg class="icon-center" xmlns="http://www.w3.org/2000/svg" width="16.317" height="15.323" viewBox="0 0 16.317 15.323">
                      <g data-name="Group 1167">
                        <g data-name="Group 1166">
                          <path data-name="Path 1349" d="M.004 5.359a.7.7 0 00.587.693l6.091 1.609L.591 9.27a.7.7 0 00-.587.693v4.656a.7.7 0 00.206.5.726.726 0 00.119.1.7.7 0 00.675.044l14.911-6.958a.7.7 0 000-1.274L1.004.066a.7.7 0 00-1 .637zm13.952 2.3" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="footer-description">
            <img src="images/logo.png"" loading=" lazy" alt="logo" data-v-site-logo>
            <div>All right reserved copyright &copy;
              <span data-v-global-site-title>StaticMania</span>
              <span id="newYear" data-v-year></span>&ensp;
            </div>
            <p>
              <span class="muted">Powered by</span>
              <a href="https://vvveb.com/" target="_blank" class="text-muted">Vvveb</a>
            </p>
            <ul class="footer-description-social">
              <li>
                <a href="#">
                  <i class="ti-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-twitter-alt"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="footer-widget">
            <h4>Sitemap</h4>
            <div class="footer-widget-list">
              <ul>
                <li>
                  <a class="scroll-to" href="/page/about">About Apsho
                </li>
                </a>
                <li>
                  <a class="scroll-to" href="#faq">Frequently Ask Question
                </li>
                </a>
                <li>
                  <a href="/page/privacy-policy">Privacy & Policy
                </li>
                </a>
                <li>
                  <a class="scroll-to" href="/blog">Latest Articles
                </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="footer-widget">
            <h4>Address</h4>
            <div class="footer-widget-list">
              <ul>
                <li>
                  <a href="tel:5511112377" data-v-site-phone-number>
                    <i class="ti-mobile"></i>
                    <span data-v-site-phone-number>+55 (111) 123 777</span>
                  </a>
                <li>
                  <span data-v-if="site.contact-email">
                    <a href="mailto:contact@mysite.com" data-v-site-contact-email>
                      <i class="ti-email"></i>
                      <span data-v-site-contact-email>contact@mysite.com</span>
                    </a>
                <li>
                  <i class="ti-pin"></i>
                  <span data-v-site-address>23 Khan Niketon, Grand Street, NYK.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</footer>`
});Vvveb.Sections.add("apsho/footer", {
    name: "Footer",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/footer-thumb.jpeg",
    html: `<footer class="footer" data-v-component-site>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="footer-subscribe-title">
          <h2>Get the latest app updates</h2>
        </div>
      </div>
      <div class="col-lg-8 mx-auto">

        <div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="subscribe">

          <form action="" method="post" class="footer-subscribe-form">
            <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">

            <!-- if these hidden inputs are filled then ignore, robots -->

            <input type="text" class="form-control d-none" placeholder="Subject" name="contact-form">

            <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

            <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


            <div class="notifications" data-v-notifications>

              <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
                </div>

                <div class="flex-grow-1 align-self-center text-small">
                  <div>
                    <div data-v-notification-text>
                      This is a placeholder for a notification message.
                    </div>
                  </div>
                </div>


                <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

              <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1 la-check-circle"></i>
                </div>

                <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
                  This is a placeholder for a success message.
                </div>

                <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

              <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

                <div class="icon align-middle me-2">
                  <i class="align-middle la la-2x lh-1  la-info-circle"></i>
                </div>

                <div class="flex-grow-1 align-self-center" data-v-notification-text>
                  This is a placeholder for a info message.
                </div>

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la la-times"></i> -->
                  </span>
                </button>
              </div>

            </div>

            <div class="from-group">
              <div class="input-group">
                <input type="email" name="email" class="form-control" placeholder="Enter Your E-mail">
                <div class="subscribe">
                  <button class="btn btn-subscribe" type="submit">
                    <span class="btn-area">
                      Subscribe
                    </span>
                    <svg class="icon-left" xmlns="http://www.w3.org/2000/svg" width="16.317" height="15.323" viewBox="0 0 16.317 15.323">
                      <g data-name="Group 1167">
                        <g data-name="Group 1166">
                          <path data-name="Path 1349" d="M.004 5.359a.7.7 0 00.587.693l6.091 1.609L.591 9.27a.7.7 0 00-.587.693v4.656a.7.7 0 00.206.5.726.726 0 00.119.1.7.7 0 00.675.044l14.911-6.958a.7.7 0 000-1.274L1.004.066a.7.7 0 00-1 .637zm13.952 2.3" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                    <svg class="icon-center" xmlns="http://www.w3.org/2000/svg" width="16.317" height="15.323" viewBox="0 0 16.317 15.323">
                      <g data-name="Group 1167">
                        <g data-name="Group 1166">
                          <path data-name="Path 1349" d="M.004 5.359a.7.7 0 00.587.693l6.091 1.609L.591 9.27a.7.7 0 00-.587.693v4.656a.7.7 0 00.206.5.726.726 0 00.119.1.7.7 0 00.675.044l14.911-6.958a.7.7 0 000-1.274L1.004.066a.7.7 0 00-1 .637zm13.952 2.3" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="footer-description">
            <img src="images/logo.png"" loading=" lazy" alt="logo" data-v-site-logo>
            <div>All right reserved copyright &copy;
              <span data-v-global-site-title>StaticMania</span>
              <span id="newYear" data-v-year></span>&ensp;
            </div>
            <p>
              <span class="muted">Powered by</span>
              <a href="https://vvveb.com/" target="_blank" class="text-muted">Vvveb</a>
            </p>
            <ul class="footer-description-social">
              <li>
                <a href="#">
                  <i class="ti-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-twitter-alt"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="footer-widget">
            <h4>Sitemap</h4>
            <div class="footer-widget-list">
              <ul>
                <li>
                  <a class="scroll-to" href="/page/about">About Apsho
                </li>
                </a>
                <li>
                  <a class="scroll-to" href="#faq">Frequently Ask Question
                </li>
                </a>
                <li>
                  <a href="/page/privacy-policy">Privacy & Policy
                </li>
                </a>
                <li>
                  <a class="scroll-to" href="/blog">Latest Articles
                </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="footer-widget">
            <h4>Address</h4>
            <div class="footer-widget-list">
              <ul>
                <li>
                  <a href="tel:5511112377" data-v-site-phone-number>
                    <i class="ti-mobile"></i>
                    <span data-v-site-phone-number>+55 (111) 123 777</span>
                  </a>
                <li>
                  <span data-v-if="site.contact-email">
                    <a href="mailto:contact@mysite.com" data-v-site-contact-email>
                      <i class="ti-email"></i>
                      <span data-v-site-contact-email>contact@mysite.com</span>
                    </a>
                <li>
                  <i class="ti-pin"></i>
                  <span data-v-site-address>23 Khan Niketon, Grand Street, NYK.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</footer>`
});Vvveb.Sections.add("apsho/hero-area", {
    name: "Hero area",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/hero-area-thumb.jpeg",
    html: `<section class="hero">
  <div class="hero-shape">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 898.595 671.33">
      <g data-name="Group 1168">
        <path data-name="Path 1352" d="M77.225.84S65.754 56.25 72.99 108.615c6.519 47.174 14.071 83.313 45.359 132.19s67.663 74.2 113.344 90.467c10.087 2.544 22.468 4.651 35.375 10.446 17.912 8.956 39.851 18.784 63.185 64.959 29.724 58.823 31.289 129.222 102.94 193.364 30.523 27.324 85.56 48.346 152.718 60.609 90.568 16.538 203.528 16.044 311.709-17.053 0-46.584-.016-642.734-.016-642.734z" fill="#ffecee" />
        <path data-name="Path 1353" d="M4.946.863s-11.953 71.78 4.545 135.746 50.072 127.642 106.223 162.953c30.391 18.524 54.077 22.62 54.077 22.62s35.965 6.587 58.362 28.851 33.95 47.335 40.287 63.6 30.656 87.859 39.048 101.217 22.093 51.037 70.9 84.776 130.668 56.964 257.731 60.438 240.329-44.6 261.458-55.888" fill="none" stroke="#273437" stroke-linecap="round" stroke-width="1.5" />
      </g>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.025 234.723">
      <g data-name="Group 1169">
        <path data-name="Path 1351" d="M246.353.908s32.245 23.839 14.178 60.475-62.607 44.54-85.191 84.439-37.268 86.821-83.942 85.186c-36.9-1.289-90.335-44.54-90.335-44.54L1.188.657z" fill="#ffecee" />
        <path data-name="Path 1350" d="M178.777.908s4.869 19.639 32.623 49.99 37.492 50.964 33.6 76.932-38.147 51.938-67.684 70.765-58.263 37.33-101.763 35.22c-40.1-1.945-59.9-27.777-71.327-57.935-.862-2.273-1.961-6.034-3.171-6.986" fill="none" stroke="#273437" stroke-linecap="round" stroke-width="1.5" />
      </g>
    </svg>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 order-2 order-lg-1">
        <div class="hero-content">
          <span class="hero-content-subtitle">Networking</span>
          <h1>Turn your business to next level</h1>
          <p>
            Enjoy team diversity and increase their networks among others people
            in various fields by providing an exceptional facilities and
            coworking.
          </p>
          <ul class="hero-content-buttons">
            <li>
              <a href="#" class="btn-platform">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="29.719" height="36.367" viewBox="0 0 29.719 36.367">
                    <g data-name="Group 1128">
                      <g data-name="Group 1127">
                        <path data-name="Path 1280" d="M1.533 13.368C-1.541 18.703.413 26.8 3.813 31.709c1.7 2.455 3.415 4.658 5.769 4.658h.134a7.117 7.117 0 002.678-.713 7.329 7.329 0 013.171-.752 6.9 6.9 0 013.019.727 6.393 6.393 0 002.892.693c2.651-.049 4.279-2.427 5.714-4.524a20.042 20.042 0 002.5-5.128l.01-.033a.3.3 0 00-.158-.366l-.021-.009a7.6 7.6 0 01-4.6-6.959 7.822 7.822 0 013.7-6.539l.029-.018a.3.3 0 00.084-.419 8.6 8.6 0 00-6.765-3.674 6.039 6.039 0 00-.59-.029 11.8 11.8 0 00-4.246 1.06 6.817 6.817 0 01-2.034.608 6.652 6.652 0 01-2.1-.615 10.181 10.181 0 00-3.708-.942h-.094a9.093 9.093 0 00-7.654 4.633zm0 0" />
                        <path data-name="Path 1281" d="M21.966 0a8.305 8.305 0 00-5.481 2.812 7.777 7.777 0 00-1.969 5.768.3.3 0 00.272.258c.127.01.257.015.385.015a7.022 7.022 0 005.174-2.654A8.2 8.2 0 0022.275.265.3.3 0 0021.966 0zm0 0" />
                      </g>
                    </g>
                  </svg>
                </i>
                <div class="btn-platform-area">
                  <span>Available on</span>
                  Apple Store
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="btn-platform">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32.812" height="36.367" viewBox="0 0 32.812 36.367">
                    <g data-name="Group 1130">
                      <path data-name="Path 1282" d="M30.8 14.713L5.983.527A4 4 0 000 4v28.371a4 4 0 005.981 3.471L30.8 21.654a4 4 0 000-6.941zm-10.754-3.354l-3.407 4.746-8.15-11.352zm-16.2 22.569a1.552 1.552 0 01-.633-.2 1.578 1.578 0 01-.784-1.361V4a1.566 1.566 0 011.414-1.563l11.306 15.748zm4.645-2.313l8.15-11.353 3.407 4.746zM29.6 19.549l-7.434 4.249-4.032-5.615 4.032-5.615 7.434 4.25a1.573 1.573 0 010 2.732zm0 0" />
                    </g>
                  </svg>
                </i>
                <div class="btn-platform-area">
                  <span>Available on</span>
                  Google Play
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 order-1 order-lg-2">
        <div class="hero-image">
          <img src="images/hero/hero-image.png" alt="hero-img" />
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/navigation-inner", {
    name: "Navigation inner",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/navigation-inner-thumb.jpeg",
    html: `<!-- Navbar Start -->
<nav class="main-nav navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- Logo -->

    <div data-v-component-site>
      <a class="navbar-brand" href="index.html" data-v-url-params='{"host":"www.*.*"}'>
        <img class="logo-main" src="images/logo.png" alt="site-logo" data-v-site-logo>
        <!-- <img class="logo-white" src="images/logo-white.png" alt="logo" data-v-site-logo-dark> -->
        <!--
		   <img src="img/logo.png" loading="lazy" class="logo-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-sticky>
		   <img src="img/logo-white.png" loading="lazy" class="logo-default-dark-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-dark-sticky>
		   -->
      </a>
    </div>
    <!-- Toogle Button -->
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNav">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="collapse navbar-collapse nav-list" id="mainNav" data-v-component-menu="header" data-v-slug="main-menu">
      <!-- Navigation Links -->
      <ul class="navbar-nav ms-auto" data-v-menu-items>
        <li class="nav-item dropdown" data-v-menu-item data-v-class-if-has-dropdown="category.children > 0">

          <a class="nav-link" href="#" data-v-class-if-dropdown-toggle="category.children > 0" aria-haspopup="true" aria-expanded="false" data-v-menu-item-url>
            <span data-v-menu-item-name>Resources</span>
          </a>

          <div class="dropdown-menu" data-v-menu-item-recursive>
            <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
              <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                <span data-v-menu-item-name>User Documentation</span>
              </a>
            </div>
            <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
              <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                <span data-v-menu-item-name>Developer Documentation</span>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a class="nav-link" href="content/index.html" data-v-menu-item-url>
            <span data-v-menu-item-name>Blog</span>
          </a>
        </li>

        <li class="nav-item" data-v-menu-item>
          <a href="#gallery" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Exibhition</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#service" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Feature</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="about.html" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>About</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#faq" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>FAQ</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#blog" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Blog</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#pricing" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Pricing</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="contact.html" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Contact</span>
          </a>
        </li>
      </ul>
      <div class="account-list list-inline">
        <li class="list-inline-item">
          <a href="/page/contact" class="btn btn-sm btn-violate">Get in Touch</a>
        </li>
      </div>
    </div>
  </div>
</nav>
<!-- Navbar End -->`
});Vvveb.Sections.add("apsho/navigation", {
    name: "Navigation",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/navigation-thumb.jpeg",
    html: `<!-- Navbar Start -->
<nav class="main-nav navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- Logo -->

    <div data-v-component-site>
      <a class="navbar-brand" href="index.html" data-v-url-params='{"host":"www.*.*"}'>
        <img class="logo-main" src="images/logo.png" alt="site-logo" data-v-site-logo>
        <!-- <img class="logo-white" src="images/logo-white.png" alt="logo" data-v-site-logo-dark> -->
        <!--
		   <img src="img/logo.png" loading="lazy" class="logo-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-sticky>
		   <img src="img/logo-white.png" loading="lazy" class="logo-default-dark-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-dark-sticky>
		   -->
      </a>
    </div>
    <!-- Toogle Button -->
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNav">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="collapse navbar-collapse nav-list" id="mainNav" data-v-component-menu="header" data-v-slug="main-menu">
      <!-- Navigation Links -->
      <ul class="navbar-nav ms-auto" data-v-menu-items>
        <li class="nav-item dropdown" data-v-menu-item data-v-class-if-has-dropdown="category.children > 0">

          <a class="nav-link" href="#" data-v-class-if-dropdown-toggle="category.children > 0" aria-haspopup="true" aria-expanded="false" data-v-menu-item-url>
            <span data-v-menu-item-name>Resources</span>
          </a>

          <div class="dropdown-menu" data-v-menu-item-recursive>
            <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
              <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                <span data-v-menu-item-name>User Documentation</span>
              </a>
            </div>
            <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
              <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                <span data-v-menu-item-name>Developer Documentation</span>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a class="nav-link" href="content/index.html" data-v-menu-item-url>
            <span data-v-menu-item-name>Blog</span>
          </a>
        </li>

        <li class="nav-item" data-v-menu-item>
          <a href="#gallery" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Exibhition</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#service" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Feature</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="about.html" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>About</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#faq" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>FAQ</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#blog" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Blog</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#pricing" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Pricing</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="contact.html" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Contact</span>
          </a>
        </li>
      </ul>
      <div class="account-list list-inline">
        <li class="list-inline-item">
          <a href="/page/contact" class="btn btn-sm btn-violate">Get in Touch</a>
        </li>
      </div>
    </div>
  </div>
</nav>
<!-- Navbar End -->`
});Vvveb.Sections.add("apsho/privacy-policy", {
    name: "Privacy policy",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/privacy-policy-thumb.jpeg",
    html: `<section class="blog-single" data-v-component-post>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <article class="blog-single-post">
          <div data-v-if="post.image">
            <img src="images/blog/blog-post-1.jpg" alt="blog-thumb" data-v-post-image />
          </div>
          <div data-v-post-content>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <h4>What is Lorem Ipsum?</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <h4>Where does it come from?</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h4>Where does it come from?</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h4>Where does it come from?</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h4>Advertisements</h4>
            <p>
              Ads appearing on our website may be delivered to users by
              advertising partners, who may set cookies. These cookies allow the
              ad server to recognize your computer each time they send you an
              online advertisement to compile information about you or others
              who use your computer. This information allows ad networks to,
              among other things, deliver targeted advertisements that they
              believe will be of most interest to you. This Privacy Policy
              covers the use of cookies by staticmania and does not cover the use
              of cookies by any advertisers.
            </p>
            <h4>Where does it come from?</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>

            <h4>Where does it come from?</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h4>Where does it come from?</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
            <h4>Where does it come from?</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/screenshots", {
    name: "Screenshots",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/screenshots-thumb.jpeg",
    html: `<section class="screenshots">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <div class="screenshots-title">
          <h2>
            Have a look our awesome app screenshots
          </h2>
          <p>
            Credibly synthesize multimedia based networks vis-a-vis top-line
            growth strategies. Continually leverage existing worldwide
            interfaces
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="screenshots-wrapper">
    <div class="screenshots-slider-frame">
      <img src="images/screenshots/slider-frame.svg" alt="slider-frame" />
    </div>
    <div class="screenshots-slider">
      <div class="screenshots-slider-item">
        <img src="images/screenshots/slider1.png" alt="" />
      </div>
      <div class="screenshots-slider-item">
        <img src="images/screenshots/slider2.png" alt="" />
      </div>
      <div class="screenshots-slider-item">
        <img src="images/screenshots/slider3.png" alt="" />
      </div>
      <div class="screenshots-slider-item">
        <img src="images/screenshots/slider4.png" alt="" />
      </div>
      <div class="screenshots-slider-item">
        <img src="images/screenshots/slider5.png" alt="" />
      </div>
      <div class="screenshots-slider-item">
        <img src="images/screenshots/slider2.png" alt="" />
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/services", {
    name: "Services",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/services-thumb.jpeg",
    html: `<section class="service" id="services">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="section-title">
          <h2>
            You can benefit more than you think
          </h2>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item pink">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="144.201" height="146.575" viewBox="0 0 144.201 146.575">
              <g data-name="Group 1169">
                <path data-name="Path 1287" d="M36.919 47.929c3.321-4.628 4.717-10.314 6.909-15.571s5.678-10.529 11.1-12.266 11.345.535 16.016 3.778 8.635 7.464 13.516 10.381c5.386 3.22 11.606 4.69 17.706 6.164s12.309 3.047 17.592 6.43 9.569 8.95 9.784 15.221c.246 7.186-4.751 13.515-10.34 18.038s-12.072 8.03-16.819 13.43c-4.851 5.514-7.5 12.558-11 19.015s-8.41 12.8-15.45 14.882a22.734 22.734 0 01-13.705-.748 63.715 63.715 0 01-12.39-6.341c-6.825-4.179-13.626-8.51-19.452-14S19.711 94.096 17.619 86.366s-1.153-16.477 3.57-22.937c4.358-5.954 11.427-9.502 15.73-15.5z" />
                <path data-name="Path 1288" d="M34.832 96.861c-3.03-4.783-7.747-8.181-11.773-12.155s-7.587-9.146-7.17-14.785 4.713-10.247 9.437-13.336 10.089-5.173 14.59-8.58c4.971-3.76 8.639-8.94 12.265-14.008s7.386-10.2 12.467-13.804 11.802-5.478 17.66-3.343c6.71 2.448 10.682 9.404 12.77 16.233s2.907 14.104 6.115 20.482c3.274 6.518 8.777 11.583 13.424 17.205s8.658 12.505 7.962 19.764a22.563 22.563 0 01-5.787 12.34 63.255 63.255 0 01-10.449 9.044c-6.388 4.728-12.908 9.379-20.13 12.7s-15.254 5.27-23.148 4.32-15.606-5.07-19.8-11.823c-3.87-6.234-4.51-14.06-8.433-20.254z" fill="none" stroke="#273437" stroke-width="1.5" />
              </g>
            </svg>
            <i class="ti-settings"></i>
          </div>
          <div class="service-content">
            <h4>No Setup</h4>
            <p>They generate alignment and engagement</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item blue">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="144.201" height="146.575" viewBox="0 0 144.201 146.575">
              <g data-name="Group 1169">
                <path data-name="Path 1287" d="M36.919 47.929c3.321-4.628 4.717-10.314 6.909-15.571s5.678-10.529 11.1-12.266 11.345.535 16.016 3.778 8.635 7.464 13.516 10.381c5.386 3.22 11.606 4.69 17.706 6.164s12.309 3.047 17.592 6.43 9.569 8.95 9.784 15.221c.246 7.186-4.751 13.515-10.34 18.038s-12.072 8.03-16.819 13.43c-4.851 5.514-7.5 12.558-11 19.015s-8.41 12.8-15.45 14.882a22.734 22.734 0 01-13.705-.748 63.715 63.715 0 01-12.39-6.341c-6.825-4.179-13.626-8.51-19.452-14S19.711 94.096 17.619 86.366s-1.153-16.477 3.57-22.937c4.358-5.954 11.427-9.502 15.73-15.5z" />
                <path data-name="Path 1288" d="M34.832 96.861c-3.03-4.783-7.747-8.181-11.773-12.155s-7.587-9.146-7.17-14.785 4.713-10.247 9.437-13.336 10.089-5.173 14.59-8.58c4.971-3.76 8.639-8.94 12.265-14.008s7.386-10.2 12.467-13.804 11.802-5.478 17.66-3.343c6.71 2.448 10.682 9.404 12.77 16.233s2.907 14.104 6.115 20.482c3.274 6.518 8.777 11.583 13.424 17.205s8.658 12.505 7.962 19.764a22.563 22.563 0 01-5.787 12.34 63.255 63.255 0 01-10.449 9.044c-6.388 4.728-12.908 9.379-20.13 12.7s-15.254 5.27-23.148 4.32-15.606-5.07-19.8-11.823c-3.87-6.234-4.51-14.06-8.433-20.254z" fill="none" stroke="#273437" stroke-width="1.5" />
              </g>
            </svg>
            <i class="ti-clipboard"></i>
          </div>
          <div class="service-content">
            <h4>Free Trial</h4>
            <p>They generate alignment and engagement. This leads to happier</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item yellow-light">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="144.201" height="146.575" viewBox="0 0 144.201 146.575">
              <g data-name="Group 1169">
                <path data-name="Path 1287" d="M36.919 47.929c3.321-4.628 4.717-10.314 6.909-15.571s5.678-10.529 11.1-12.266 11.345.535 16.016 3.778 8.635 7.464 13.516 10.381c5.386 3.22 11.606 4.69 17.706 6.164s12.309 3.047 17.592 6.43 9.569 8.95 9.784 15.221c.246 7.186-4.751 13.515-10.34 18.038s-12.072 8.03-16.819 13.43c-4.851 5.514-7.5 12.558-11 19.015s-8.41 12.8-15.45 14.882a22.734 22.734 0 01-13.705-.748 63.715 63.715 0 01-12.39-6.341c-6.825-4.179-13.626-8.51-19.452-14S19.711 94.096 17.619 86.366s-1.153-16.477 3.57-22.937c4.358-5.954 11.427-9.502 15.73-15.5z" />
                <path data-name="Path 1288" d="M34.832 96.861c-3.03-4.783-7.747-8.181-11.773-12.155s-7.587-9.146-7.17-14.785 4.713-10.247 9.437-13.336 10.089-5.173 14.59-8.58c4.971-3.76 8.639-8.94 12.265-14.008s7.386-10.2 12.467-13.804 11.802-5.478 17.66-3.343c6.71 2.448 10.682 9.404 12.77 16.233s2.907 14.104 6.115 20.482c3.274 6.518 8.777 11.583 13.424 17.205s8.658 12.505 7.962 19.764a22.563 22.563 0 01-5.787 12.34 63.255 63.255 0 01-10.449 9.044c-6.388 4.728-12.908 9.379-20.13 12.7s-15.254 5.27-23.148 4.32-15.606-5.07-19.8-11.823c-3.87-6.234-4.51-14.06-8.433-20.254z" fill="none" stroke="#273437" stroke-width="1.5" />
              </g>
            </svg>
            <i class="ti-key"></i>
          </div>
          <div class="service-content">
            <h4>Quick Access</h4>
            <p>They generate alignment and engagement. This leads to happier</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/single-blog-header", {
    name: "Single blog header",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/single-blog-header-thumb.jpeg",
    html: `<section class="page-header blog-single-header" data-v-component-post="post">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2 data-v-post-name>
          With more and more people working from home, either from choice or
          necessity
        </h2>
        <div class="post-meta">
          <ul>
            <li>
              <div class="post-avatar" data-v-if="post.avatar">
                <img src="images/blog/blog-feature.jpg" alt="avatar" loading="lazy" data-v-post-avatar>
              </div>
            </li>
            <li>
              <h5 data-v-post-display_name>
                Jesia Lickons
              </h5>
            </li>
            <li>
              <span data-v-post-created_at data-filter-friendly_date>Jul 13, 2020</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/single-blog", {
    name: "Single blog",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/single-blog-thumb.jpeg",
    html: `<section class="blog-single" data-v-component-post="post">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <article class="blog-single-post">
          <div data-v-if="post.image">
            <img src="images/blog/blog-post-1.jpg" alt="blog-thumb" data-v-post-image />
          </div>
          <div data-v-post-content>
            <p>
              A lot has changed about how we work, and most people have no choice
              but to transition to working from home. But even before the
              pandemic, an increasing number of people bid goodbye to their
              onerous commute to become freelancers and telecommuters. Thanks to
              ever-evolving technologies such as Skype, Zoom, Facetime, Google
              Hangouts, Slack, and cloud computing, it’s no longer necessary to be
              in an office to be productive. In fact, most tasks can be done just
              as effectively from home.
            </p>
            <p>
              Working from home can be one of the greatest perks of doing
              freelance work. But as appealing as remote work sounds, it comes
              with several challenges. What if you need something important from
              the office that you have no access to? What if loneliness takes over
              and you experience time management problems? What if you lose
              connection with colleagues? What if you’re overwhelmed by other
              home-related distractions like family members, pets, and
              electronics?
            </p>
            <img src="images/blog/single-blog-2.jpg" alt="banner" />
            <p>
              If you need inspiration, we've compiled some awesome information
              from the top-performing professionals in the industry. These are
              answers to commonly asked questions from artists you may never get
              to meet in person, and we combined them in one freaking sweet book.
            </p>
            <p>
              Download Experiment. Fail. Repeat and discover the secrets of the
              universe! Or, you know, just get encouraged, which ever you most
              prefer is totally fine.
            </p>
            <h2>Working from Home: Healthy Practices to Stay Productive</h2>
            <ul>
              <li>Setting a Healthy Routine</li>
              <li>Proper Ergonomics</li>
              <li>Exercise Regularly</li>
              <li>Find Work-Life Balance When Working from Home</li>
              <li>Dealing with Family Members and Coworkers</li>
            </ul>
            <img src="images/blog/single-blog-5.jpg" alt="banner" />
            <p>
              We are creatures of habit – and that is because routine helps us
              both mentally and physically to prepare for things. One of the
              benefits of working from home is flexibility. It might be tempting
              to roll out of bed and onto your couch and starting checking emails
              or browsing through social media, but you’ll need to establish a
              schedule when it comes to working remotely.
              <br />
              <br />
              What’s goes into your schedule is a guide on what you’re supposed to
              do at a specific time. Get up early in the morning, take a shower,
              prepare a cup of coffee and take breakfast, then get dressed as if
              you’re actually reporting to work. You don’t have to wear a suit and
              a tie, but you’ll need to prepare for the day the same way you do
              while going to the office. Set regular working hours and include
              breaks and meal times. In the end, a routine can be extremely
              powerful at helping you get started every day.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/testimonial", {
    name: "Testimonial",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/testimonial-thumb.jpeg",
    html: `<section class="testimonial">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="testimonial-content">
          <h2>
            What clients are say about this app
          </h2>
          <p>
            The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog flick
            quartz vex nymphs. Waltz bad nymph for quick vex! Fox nymphs grab
            quick-jived waltz.
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="testimonial-slider">
          <div class="testimonial-slider-item">
            <p>
              This is the best overall experience I have had with any template
              of any kind. Statimania made me feel like a valued customer and I
              feel empowered.
            </p>
            <div class="testimonial-slider-person">
              <div class="thumb">
                <img src="images/client/client-2.png" alt="person-thumb" />
              </div>
              <div class="content">
                <h3>Rotis Roy</h3>
                <p>Senior Developer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-slider-item">
            <p>
              Apsho was easy to set-up and more importantly, was dead simple to
              customize. Buy this on sight. Most worthy template I've ever buy
            </p>
            <div class="testimonial-slider-person">
              <div class="thumb">
                <img src="images/client/client-1.png" alt="person-thumb" />
              </div>
              <div class="content">
                <h3>Jona Raisha</h3>
                <p>UX Designer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-slider-item">
            <p>
              Best. customer. service. Seriously, I opened a ticket and they
              were so helpful and really seemed to care about my experience.
            </p>
            <div class="testimonial-slider-person">
              <div class="thumb">
                <img src="images/client/client-3.png" alt="person-thumb" />
              </div>
              <div class="content">
                <h3>Xevier John</h3>
                <p>CTO</p>
              </div>
            </div>
          </div>
          <div class="testimonial-slider-item">
            <p>
              We’ve used their templates before and have always been hugely
              satisfied - Stack is no exception
            </p>
            <div class="testimonial-slider-person">
              <div class="thumb">
                <img src="images/client/client-3.png" alt="person-thumb" />
              </div>
              <div class="content">
                <h3>Kerri Reece</h3>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("apsho/video", {
    name: "Video",
    image: Vvveb.themeBaseUrl + "/screenshots/apsho/video-thumb.jpeg",
    html: `<section class="video">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <div class="video-iframe">
          <img src="images/video/video.png" alt="video-thumb" />
          <div class="video-icon">
            <a class="popup-vimeo" href="https://vimeo.com/45830194">
              <i class="ti-control-play"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-8 mx-auto">
        <div class="video-content">
          <h2>
            Ultimate Experiences
            <br />
            with Story, Emotion and Purpose
          </h2>
          <ul class="video-content-buttons">
            <li>
              <a href="#" class="btn-platform">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="29.719" height="36.367" viewBox="0 0 29.719 36.367">
                    <g data-name="Group 1128">
                      <g data-name="Group 1127">
                        <path data-name="Path 1280" d="M1.533 13.368C-1.541 18.703.413 26.8 3.813 31.709c1.7 2.455 3.415 4.658 5.769 4.658h.134a7.117 7.117 0 002.678-.713 7.329 7.329 0 013.171-.752 6.9 6.9 0 013.019.727 6.393 6.393 0 002.892.693c2.651-.049 4.279-2.427 5.714-4.524a20.042 20.042 0 002.5-5.128l.01-.033a.3.3 0 00-.158-.366l-.021-.009a7.6 7.6 0 01-4.6-6.959 7.822 7.822 0 013.7-6.539l.029-.018a.3.3 0 00.084-.419 8.6 8.6 0 00-6.765-3.674 6.039 6.039 0 00-.59-.029 11.8 11.8 0 00-4.246 1.06 6.817 6.817 0 01-2.034.608 6.652 6.652 0 01-2.1-.615 10.181 10.181 0 00-3.708-.942h-.094a9.093 9.093 0 00-7.654 4.633zm0 0" />
                        <path data-name="Path 1281" d="M21.966 0a8.305 8.305 0 00-5.481 2.812 7.777 7.777 0 00-1.969 5.768.3.3 0 00.272.258c.127.01.257.015.385.015a7.022 7.022 0 005.174-2.654A8.2 8.2 0 0022.275.265.3.3 0 0021.966 0zm0 0" />
                      </g>
                    </g>
                  </svg>
                </i>
                <div class="btn-platform-area">
                  <span>Available on</span>
                  Apple Store
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="btn-platform">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32.812" height="36.367" viewBox="0 0 32.812 36.367">
                    <g data-name="Group 1130">
                      <path data-name="Path 1282" d="M30.8 14.713L5.983.527A4 4 0 000 4v28.371a4 4 0 005.981 3.471L30.8 21.654a4 4 0 000-6.941zm-10.754-3.354l-3.407 4.746-8.15-11.352zm-16.2 22.569a1.552 1.552 0 01-.633-.2 1.578 1.578 0 01-.784-1.361V4a1.566 1.566 0 011.414-1.563l11.306 15.748zm4.645-2.313l8.15-11.353 3.407 4.746zM29.6 19.549l-7.434 4.249-4.032-5.615 4.032-5.615 7.434 4.25a1.573 1.573 0 010 2.732zm0 0" />
                    </g>
                  </svg>
                </i>
                <div class="btn-platform-area">
                  <span>Available on</span>
                  Google Play
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Apsho"] = ["apsho/all-post-header","apsho/all-post","apsho/blog-post","apsho/contact-form","apsho/contact-header","apsho/faq","apsho/feature","apsho/footer-inner","apsho/footer","apsho/hero-area","apsho/navigation-inner","apsho/navigation","apsho/privacy-policy","apsho/screenshots","apsho/services","apsho/single-blog-header","apsho/single-blog","apsho/testimonial","apsho/video"];
