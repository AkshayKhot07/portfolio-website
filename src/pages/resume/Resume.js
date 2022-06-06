import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-left-section">
        <div className="about">
          <h2>About</h2>
          <div className="about-details">
            <div className="title">About Me</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa
              quas, animi facere delectus consequuntur impedit ratione, rem unde
              repellendus, quasi ab eveniet sequi ad minus sapiente voluptates
              recusandae! Voluptatibus.
            </p>
          </div>
        </div>

        <div className="education">
          <h2>Education</h2>
          <div className="education-details">
            <div className="title">Batch of 2016</div>
            <h4>B.E, Computer Engineering</h4>
            <p>RCOE, University of Mumbai</p>
            <div className="cgpa">CGPA: 6.11</div>
          </div>
        </div>

        <div className="internship">
          <h2>Internships</h2>
          <div className="internship-details">
            <div className="title">Sept'16 - Jan'17</div>
            <h4>Network Engineer</h4>
            <p>Reliance Jio, Mumbai</p>
            <div className="desp">
              Working with network build team for creating IP/MPLS network to be
              used for LTE, FTTX and Wifi services. Operating Acceptance test
              processing-1B and hand over to operations team on RAD L2 switches.
              Fault and Alarm analysis for access points and aggregation
              switches.
            </div>
          </div>

          <div className="internship-details">
            <div className="title">May'18 - Jun'18</div>
            <h4>Marketing Executive</h4>
            <p>Kowrk.com, Mumbai</p>
            <div className="desp">
              Implemented social media strategies and maintained strong social
              media and brand presence across Twitter, Facebook, LinkedIn and
              Instagram. Executed off-page SEO strategies and created backlinks
              to assure better indexing by search engines. Provided strategic
              support and guidance for email marketing campaigns thereby
              generating leads.
            </div>
          </div>
        </div>
      </div>

      <div className="resume-right-section">
        <div className="work-experience">
          <h2>Work Experience</h2>

          <div className="work-experience-details">
            <div className="title">April'19 - November'21</div>
            <h4>Performance Marketing, Associate & Analyst</h4>
            <p>Performics (Publicis Groupe), Mumbai</p>
            <ul className="desp">
              <p>Associate (August'20 - November'21)</p>
              <li>
                Established and cultivated relationship with the company’s
                clients. Providing on-site support and telephone support to
                clients
              </li>
              <li>
                Implemented social media strategies and maintained a strong
                social media presence for the clients
              </li>
              <p>Analyst (April'19 - July'20)</p>
              <li>
                Proactively introduced new products to the clients thereby
                ensuring up-selling activities. Resolved client queries and
                founded solutions to client issues such as billing and new
                project requirements
              </li>
              <li>
                Managed the account internal processes and deliverables from
                start to end of the projects assigned, thereby negotiating and
                closing contracts and delivering customer values
              </li>
            </ul>
          </div>

          <div className="work-experience-details">
            <div className="title">July'18 - March'19</div>
            <h4>Client Servicing Executive</h4>
            <p>PostBox Communications, Mumbai</p>
            <ul className="desp">
              <li>
                Established and cultivated relationship with the company’s
                clients. Providing on-site support and telephone support to
                clients
              </li>
              <li>
                Implemented social media strategies and maintained a strong
                social media presence for the clients
              </li>
              <li>
                Proactively introduced new products to the clients thereby
                ensuring up-selling activities. Resolved client queries and
                founded solutions to client issues such as billing and new
                project requirements
              </li>
              <li>
                Managed the account internal processes and deliverables from
                start to end of the projects assigned, thereby negotiating and
                closing contracts and delivering customer values
              </li>
            </ul>
          </div>

          <div className="work-experience-details">
            <div className="title">Feb'17 - April'18</div>
            <h4>L1 Network Engineer</h4>
            <p>Acesoft Labs, Mumbai </p>
            <ul className="desp">
              <li>
                Deployment, Implementation and Maintenance of IP/MPLS network on
                Reliance 4G LTE project
              </li>
              <li>
                Developed skills in installation, commissioning, operation and
                maintenance of various equipment there by, minimizing downtime
                and enhanching operational effectiveness of equipment
              </li>
              <li>
                Coordinating with circle/field team for critical faults and
                following up pending cases
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
