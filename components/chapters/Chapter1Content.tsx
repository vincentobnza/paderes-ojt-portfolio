export function Chapter1Content() {
  return (
    <>
      <h1 className="mb-10 border-b border-black/10 pb-10 text-balance text-3xl font-semibold text-black sm:text-4xl">
        Chapter 1
      </h1>

      <h2
        id="introduction"
        className="mb-6 text-xl font-semibold text-black sm:text-2xl"
      >
        Introduction
      </h2>

      <section aria-labelledby="importance-heading" className="mb-10">
        <h3
          id="importance-heading"
          className="mb-4 text-lg font-semibold text-black"
        >
          A. Importance of Internship
        </h3>
        <div className="space-y-4 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          <p>
            An internship plays a crucial role in the development of an IT student,
            as it links classroom learning to real-life work experience. Although
            schools focus on teaching theories and concepts, internships allow
            students to put this knowledge into practice and deal with real
            challenges that go beyond what textbooks can offer.
          </p>
          <p>
            Aside from enhancing technical abilities, internships also contribute
            to personal growth. Students learn how to collaborate with others,
            manage their time effectively, communicate clearly, and handle
            pressure in a professional setting. It also helps them determine which
            field in IT suits their interests best, whether it be hardware,
            networking, or system support.
          </p>
          <p>
            Ultimately, internships help shape students into well-rounded
            individuals, preparing them for both their careers and personal
            growth. They gain a clearer vision of their future and the confidence
            needed to succeed in the IT industry.
          </p>
        </div>
      </section>

      <section aria-labelledby="objectives-heading" className="mb-10">
        <h3
          id="objectives-heading"
          className="mb-4 text-lg font-semibold text-black"
        >
          B. Objectives of Internship
        </h3>
        <p className="mb-6 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          The On-the-Job Training program aims to develop industry-ready IT
          professionals through practical, hands-on experience. The specific
          objectives include:
        </p>
        <dl className="space-y-6">
          <div>
            <dt className="mb-2 font-semibold text-black">
              Technical Experience
            </dt>
            <dd className="text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
              Acquire practical experience in printer maintenance, network wiring,
              hardware troubleshooting, and data encoding within a real office
              environment.
            </dd>
          </div>
          <div>
            <dt className="mb-2 font-semibold text-black">
              Problem-Solving Skills
            </dt>
            <dd className="text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
              Develop analytical skills through the identification and resolution of
              actual hardware and network problems in a professional setting.
            </dd>
          </div>
          <div>
            <dt className="mb-2 font-semibold text-black">
              Documentation Skills
            </dt>
            <dd className="text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
              Enhance skills in creating technical documentation, generating
              reports, and keeping precise records of work performed.
            </dd>
          </div>
          <div>
            <dt className="mb-2 font-semibold text-black">
              Professional Growth
            </dt>
            <dd className="text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
              Develop a strong work ethic, enhance workplace communication
              skills, and prepare for a career in information technology.
            </dd>
          </div>
          <div>
            <dt className="mb-2 font-semibold text-black">
              Collaboration Experience
            </dt>
            <dd className="text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
              Collaborate with IT professionals, office personnel, and supervisors
              while learning and adapting to standard industry workflows.
            </dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="time-place-heading">
        <h3
          id="time-place-heading"
          className="mb-4 text-lg font-semibold text-black"
        >
          C. Time and Place of Internship
        </h3>
        <p className="mb-6 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          The On-the-Job Training was conducted on-site at the Planning,
          Development, Monitoring, and Evaluation Office of Occidental Mindoro
          State College.
        </p>
        <ul className="space-y-3 border border-black shadow-[4px_4px_0px_black] bg-lime-100 p-4 text-sm text-black sm:text-base font-bold">
          <li>
            <span className="font-semibold text-black">Role: </span>
            On-the-Job Trainee
          </li>
          <li>
            <span className="font-semibold text-black">Total hours: </span>
            486 hours
          </li>
          <li>
            <span className="font-semibold text-black">Location: </span>
            Planning, Development, Monitoring, and Evaluation Office
          </li>
        </ul>
      </section>
    </>
  );
}
