import { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import "./Experience.css";

const Experience = ({ state }) => {
  
  const [certificate, setCertificate] = useState("");



  useEffect(() => {
    const { contract } = state;
    const certificateDetails = async () => {
      const certificate = await contract.methods.allCertificate().call();
      setCertificate(certificate);
    };
    contract && certificateDetails();
  }, [state]);

  return (
    <section className="exp-section">
      <h1 className="title">Certificates </h1>
      <p>Connect Wallet to access</p>

      <div className="container">
        {/* <div className="education">
          <h1 className="edu-tittle">Education</h1>
          {education !== "" &&
            education.map((edu) => {
              return (
                <div className="edu-card">
                  <p className="card-text1">
                    <SlCalender className="icon" /> {edu.date}
                  </p>
                  <h3 className="card-text2">{edu.degree}</h3>
                  <p className="card-text3">{edu.field}</p>
                  <p className="card-text4">{edu.institutionName}</p>
                </div>
              );
            })}
        </div> */}
        {/* experience */}
        <div className="education">
          <h1 className="edu-tittle">Certificates</h1>
          {certificate !== "" &&
            certificate.map((certi) => {
              return (
                <div className="edu-card">
                  <p className="card-text1">
                    <SlCalender className="icon" /> {certi.date}
                  </p>
                  <a href={certi.link} target="_blank">Link</a>
                  <h3 className="card-text2">{certi.subject}</h3>
                  <p className="card-text3">{certi.platform}</p>
                  {/* <p className="card-text4">{certi.image}</p> */}
                </div>
              );
            })}
          {/* <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> March 2013 - Present
            </p>
            <h3 className="card-text2">Blockchain Developer Intern</h3>
            <p className="card-text3">
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className="card-text4">Code Eater</p>
          </div>
          // {/* card2 */}
          {/* <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> March 2013 - Present
            </p>
            <h3 className="card-text2">Blockchain Developer Intern</h3>
            <p className="card-text3">
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className="card-text4">Code Eater</p>
          </div> */}
          {/* card3 */}
          {/* <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> March 2013 - Present
            </p>
            <h3 className="card-text2">Blockchain Developer Intern</h3>
            <p className="card-text3">
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className="card-text4">Code Eater</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
