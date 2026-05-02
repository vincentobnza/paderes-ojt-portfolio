import Image from "next/image";

export function Chapter2Content() {
  return (
    <>
      <h1 className="mb-10 border-b border-black/10 pb-10 text-balance text-3xl font-semibold text-black sm:text-4xl">
        Chapter 2
      </h1>

      <section aria-labelledby="nature-heading" className="mb-10">
        <h2
          id="nature-heading"
          className="mb-4 text-xl font-semibold text-black sm:text-2xl"
        >
          Nature of Agency
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          <p>
            Occidental Mindoro State College (OMSC) is a state-funded higher
            education institution located in Occidental Mindoro, Philippines. It
            offers various degree programs in education, technology, agriculture,
            and other disciplines.
          </p>
          <p>
            The Planning, Development, Monitoring, and Evaluation Office of OMSC
            is responsible for coordinating and supporting the institution&apos;s
            planning, policy development, program monitoring, and evaluation
            activities. It plays a key role in ensuring that institutional goals
            and objectives are properly implemented and assessed. The office also
            handles data collection, documentation, and reporting to support
            evidence-based decision-making across different departments of the
            college.
          </p>
        </div>
      </section>

      <section aria-labelledby="mission-vision-heading" className="mb-10">
        <h2
          id="mission-vision-heading"
          className="mb-6 text-xl font-semibold text-black sm:text-2xl"
        >
          Mission and Vision
        </h2>

        <h3 id="vision-heading" className="mb-3 text-lg font-semibold text-black">
          Vision
        </h3>
        <p className="mb-8 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          A premier higher education institution that develops globally competitive,
          locally responsive, innovative professionals, and life-long learners.
        </p>

        <h3 id="mission-heading" className="mb-3 text-lg font-semibold text-black">
          Mission
        </h3>
        <p className="text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          OMSC is committed to produce intellectual and human capital by developing
          excellent graduates through outcomes-based instruction, relevant research,
          responsive technical advisory services, community engagement, and
          sustainable production.
        </p>
      </section>

      <section aria-labelledby="goals-heading" className="mb-10">
        <h2
          id="goals-heading"
          className="mb-4 text-xl font-semibold text-black sm:text-2xl"
        >
          Goals &amp; Objectives
        </h2>
        <ol className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          <li>To continually increase access to quality education;</li>
          <li>
            To ensure a high completion rate of students admitted in respective
            programs;
          </li>
          <li>
            To improve the adequacy of facilities and infrastructure that is in
            line with specified regulations and requirements.
          </li>
          <li>
            To progressively increase internal research funding and dissemination
            of research findings that positively impact communities.
          </li>
          <li>
            To improve recruitment of qualified staff and continuously enhance
            their skills, expertise, and competencies.
          </li>
          <li>To attain students&apos; satisfaction; and</li>
          <li>To achieve set of performance targets.</li>
        </ol>
      </section>

      <section aria-labelledby="institutional-quality-heading" className="mb-10">
        <h2
          id="institutional-quality-heading"
          className="mb-4 text-xl font-semibold text-black sm:text-2xl"
        >
          Institutional Quality Objectives
        </h2>
        <ol className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          <li>To continually increase access to quality education;</li>
          <li>
            To ensure a high completion rate of students admitted in respective
            programs;
          </li>
          <li>
            To improve the adequacy of facilities and infrastructure that is in
            line with specified regulations and requirements;
          </li>
          <li>
            To progressively increase internal research findings that positively
            impact communities.
          </li>
          <li>
            To improve the recruitment of qualified staff and continuously
            enhance their skills, expertise and competency;
          </li>
          <li>To attain student satisfaction; and</li>
          <li>To achieve set performance targets.</li>
        </ol>
      </section>

      <section aria-labelledby="office-quality-heading" className="mb-10">
        <h2
          id="office-quality-heading"
          className="mb-4 text-xl font-semibold text-black sm:text-2xl"
        >
          Office Quality Policy Objectives
        </h2>
        <ol className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          <li>
            Constantly improve the quality of projects in the planning stage
            proposed by OMSC to the National Government;
          </li>
          <li>Provide quality assistance to the National Government;</li>
          <li>Improve the quality strategic plan for the Institution;</li>
          <li>Develop a quality strategic plan for the Institution;</li>
          <li>
            Periodic monitoring and evaluation of the Institution&apos;s plans,
            objectives, services, performance, and accomplishments;
          </li>
          <li>Institutional program, training, and activity evaluation; and</li>
          <li>
            Development of monitoring and evaluation tools and procedures tailored
            to the needs of the activity.
          </li>
        </ol>
      </section>



      <section aria-labelledby="history-heading">
        <h2
          id="history-heading"
          className="mb-4 text-xl font-semibold text-black sm:text-2xl"
        >
          History / Background
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          <p>
            Occidental Mindoro State College has a long history of providing quality
            education to the people of Occidental Mindoro. Over the years, it has
            expanded its programs and facilities to meet the growing educational
            needs of the province.
          </p>
          <p>
            The Planning, Development, Monitoring, and Evaluation Office was
            established to support the institution in ensuring effective planning,
            implementation, monitoring, and evaluation of its programs and projects.
            It serves as a key unit in aligning institutional goals with
            development plans and in providing data-driven reports to support
            decision-making across different offices of the college.
          </p>
        </div>
      </section>


      <section aria-labelledby="org-structure-heading" className="mb-10">
        <h2
          id="org-structure-heading"
          className="mb-4 text-xl font-semibold text-black sm:text-2xl"
        >
          Organizational Structure
        </h2>
        <figure className="mx-auto max-w-full">
          <Image
            src="/organizational_structure.png"
            alt="Organizational structure of Occidental Mindoro State College"
            width={544}
            height={336}
            className="h-auto w-full rounded-none border border-black/10"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </figure>
      </section>
    </>
  );
}
