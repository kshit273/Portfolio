import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                atque ab saepe deserunt aut obcaecati asperiores consequatur,
                possimus consectetur odit.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis minima iusto rem. Doloribus quaerat totam quod
                consectetur commodi placeat officiis harum sed ea dignissimos
                dolorum necessitatibus, unde distinctio perspiciatis amet
                impedit, deserunt tempora inventore? Dignissimos ab quia quaerat
                maiores assumenda aperiam, similique sapiente eius nulla
                voluptas totam consequuntur enim doloribus.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Library management" />
              </div>
              <h2>Library Managment Platform</h2>
            </div>
            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC directory" />
              </div>
              <h2>Library Managment Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
