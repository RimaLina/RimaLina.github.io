import React from "react";
import ListItem from "./listItem";
import Certificate from "./certificates";
import logoKKS from "./kks.png";
import logoISTQB from "./istqb.png";
import Skill from "./skills";

const education = [
  {
    timeRange: "2012-2014",
    subtitle: "Kaunas University of Technology",
    title: "Master's degree, Applied Mathematics",
  },
  {
    timeRange: "2008-2012",
    subtitle: "Kaunas University of Technology",
    title: "Bachelor's degree, Applied Mathematics",
  },
  {
    timeRange: "2006-2008",
    subtitle: "Vilnius University School For Young Mathematicians",
    title: "Mathematics",
  },
];

const experience = [
  {
    timeRange: "Sep 2019 - current",
    subtitle: "Telesoftas",
    title: "Test Engineer",
  },
  {
    timeRange: "Jul 2017 - Sep 2019",
    subtitle: "Devbridge Group",
    title: "Test Engineer",
  },
  {
    timeRange: "Jul 2016 - Jul 2017",
    subtitle: "Devbridge Group",
    title: "Junior Test Engineer",
  },
  {
    timeRange: "Jan 2016 - Jul 2016",
    subtitle: "Kaunas University of Technology",
    title: "Analyst",
  },
  {
    timeRange: "Sep 2015 - Jan 2016",
    subtitle: "Kaunas University of Technology",
    title: "Research Scientist",
  },
  {
    timeRange: "Apr 2015 - Sep 2015",
    subtitle: "Kaunas University of Technology",
    title: "Project Analyst",
  },
  {
    timeRange: "Dec 2014 -Apr 2015",
    subtitle: "Kaunas University of Technology",
    title: "Junior Research Scientist",
  },
  {
    timeRange: "Jul 2012 - Dec 2014",
    subtitle: "Kaunas University of Technology",
    title: "Project Administrator",
  },
];

const certificates = [
  {
    title: "Kaunas Coding School",
    year: "Jul 2017",
    logo: logoKKS,
  },
  {
    title: "Certified Tester Foundation Level",
    year: "Jul 2016",
    logo: logoISTQB,
  },
];

const technicalSkills = [
  {
    title: "Manual Testing",
    percentage: 100,
  },
  {
    title: "Test Automation (Selenium)",
    percentage: 100,
  },
  {
    title: "Programming (Java, C#, JavaScript, Python)",
    percentage: 100,
  },
  {
    title: "Database testing (SQL, NoSQL)",
    percentage: 100,
  },
  {
    title: "Test Management (xRay)",
    percentage: 100,
  },
  {
    title: "Defect Tracking (Jira, Trello)",
    percentage: 100,
  },
  {
    title: "API testing (Postman, Fiddler)",
    percentage: 100,
  },
  {
    title: "Performance testing (Jmeter)",
    percentage: 100,
  },
];

const profSkills = [
  {
    title: "Communication",
    percentage: 100,
  },
  {
    title: "Analytical Thinking",
    percentage: 100,
  },
  {
    title: "Time Management",
    percentage: 100,
  },
  {
    title: "Attitude",
    percentage: 100,
  },
];

export default function resume() {
  return (
    <div id="main" class="site-main">
      <div id="main-content" class="single-page-content">
        <div id="primary" class="content-area">
          <div class="page-title">
            <h1>Resume</h1>
            <div class="page-subtitle">
              <h4>4.5 Years of Experience</h4>
            </div>
          </div>

          <div
            id="content"
            class="page-content site-content single-post"
            role="main"
          >
            <article
              id="post-171"
              class="post-171 page type-page status-publish hentry"
            >
              <div class="entry-content">
                <div class="fw-page-builder-content">
                  <section class="fw-main-row">
                    <div class="fw-container">
                      <div class="row">
                        <div class="col-xs-12 col-sm-6">
                          <div
                            id="col_inner_id-5ee5f4f9ce2a5"
                            class="fw-col-inner"
                            data-paddings="0px 0px 0px 0px"
                          >
                            <div class="block-title">
                              <h2>Education</h2>
                            </div>

                            <div
                              id="timeline-5ee5f4f9ce5e0"
                              class="timeline clearfix"
                            >
                              {education.map((x) => {
                                return <ListItem {...x} />;
                              })}
                            </div>
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                          <div
                            id="col_inner_id-5ee5f4f9ce723"
                            class="fw-col-inner"
                            data-paddings="0px 0px 0px 0px"
                          >
                            <div class="block-title">
                              <h2>Experience</h2>
                            </div>

                            <div
                              id="timeline-5ee5f4f9ce877"
                              class="timeline clearfix"
                            >
                              {experience.map((x) => {
                                return <ListItem {...x} />;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-xs-12 col-sm-12">
                          <div
                            id="col_inner_id-5ee5f4f9ceac4"
                            class="fw-col-inner"
                            data-paddings="0px 0px 0px 0px"
                          >
                            <div
                              class="fw-divider-space"
                              style={{ paddingTop: "20px" }}
                            ></div>

                            <div class="block-title">
                              <h2>Certificates</h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {certificates.map((x) => {
                          return <Certificate {...x} />;
                        })}
                      </div>

                      <div class="row">
                        <div class="col-xs-12 col-sm-12">
                          <div
                            id="col_inner_id-5ee5f4f9cf3db"
                            class="fw-col-inner"
                            data-paddings="0px 0px 0px 0px"
                          >
                            <div
                              class="fw-divider-space"
                              style={{ paddingTop: "40px" }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-xs-12 col-sm-6">
                          <div
                            id="col_inner_id-5ee5f4f9cf6cd"
                            class="fw-col-inner"
                            data-paddings="0px 0px 0px 0px"
                          >
                            <div class="block-title">
                              <h2>Technical Skills</h2>
                            </div>

                            <div
                              id="skills-5ee5f4f9cf94a"
                              class="skills-info skills-first-style"
                            >
                              {technicalSkills.map((x) => {
                                return <Skill {...x} />;
                              })}
                            </div>
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                          <div
                            id="col_inner_id-5ee5f4f9cf6cd"
                            class="fw-col-inner"
                            data-paddings="0px 0px 0px 0px"
                          >
                            <div class="block-title">
                              <h2>Professional Skills</h2>
                            </div>

                            <div
                              id="skills-5ee5f4f9cf94a"
                              class="skills-info skills-first-style"
                            >
                              {profSkills.map((x) => {
                                return <Skill {...x} />;
                              })}
                            </div>
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
