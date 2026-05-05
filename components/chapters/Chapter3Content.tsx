import { ImageAlbum } from "@/components/ImageAlbum";
import type { AlbumSlide } from "@/components/ImageAlbum";

type MonthReport = {
  id: string;
  month: string;
  summary: string;
  items: readonly string[];
  slides: readonly AlbumSlide[];
};

type ProgressRow = {
  objective: string;
  status: string;
  problem: string;
};

type AnalysisCard = {
  title: string;
  body: string;
};

const REPORTS: readonly MonthReport[] = [
  {
    id: "m1",
    month: "January/February",
    summary:
      "Performed administrative and office support tasks such as encoding documents, organizing files, printing, scanning, photocopying, laminating, and preparing office documents using Microsoft Word and Excel. Assisted office staff and supervisors in daily office operations, coordinated document processing and signing, operated office equipment, and completed assigned tasks with professionalism, responsibility, and discipline.",
    items: [
      "Performed administrative and office support tasks such as encoding documents, organizing files, printing, scanning, photocopying, laminating, and preparing office documents using Microsoft Word and Excel.",
      "Assisted office staff and supervisors in daily office operations and document preparation.",
      "Coordinated document processing, printing, signing, and filing with office personnel.",
      "Operated office equipment including printers, scanners, photocopiers, and laminating machines.",
      "Completed assigned tasks with professionalism, responsibility, discipline, and proper time management during office operations.",
    ],
    slides: [
      { src: "/monthly_accom_report/m1/m1-1.png", alt: "M1 report page 1" },
      { src: "/monthly_accom_report/m1/m1-2.png", alt: "M1 report page 2" },
      { src: "/monthly_accom_report/m1/m1-3.png", alt: "M1 report page 3" },
      { src: "/monthly_accom_report/m1/m1-4.png", alt: "M1 report page 4" },
      { src: "/monthly_accom_report/m1/m1-5.png", alt: "M1 report page 5" },
    ],
  },
  {
    id: "m2",
    month: "March",
    summary:
      "Assisted in preparing, organizing, decorating, laminating, and finalizing hardbound office documents and materials while supporting office staff in completing assigned tasks and document submissions on time.",
    items: [
      "Assisted in preparing, organizing, decorating, and finalizing hardbound office documents and materials.",
      "Cut decorative materials and prepared covers and layouts for office document presentations.",
      "Performed laminating, photocopying, and other document preparation tasks using office equipment.",
      "Assisted office staff and supervisors in completing office-related activities and document submissions.",
      "Applied creativity, attention to detail, responsibility, patience, and teamwork in completing assigned tasks on time.",
    ],
    slides: [
      { src: "/monthly_accom_report/m2/m2-1.png", alt: "M2 report page 1" },
      { src: "/monthly_accom_report/m2/m2-2.png", alt: "M2 report page 2" },
      { src: "/monthly_accom_report/m2/m2-3.png", alt: "M2 report page 3" },
    ],
  },
  {
    id: "m3",
    month: "April",
    summary:
      "Assisted in the distribution, organization, monitoring, and updating of Citizen Charter and EODB documents and materials while coordinating with different school offices and ensuring accurate office transactions.",
    items: [
      "Distributed and secured received copies of updated Citizen Charter and EODB documents from different school offices.",
      "Organized, monitored, and processed office documents for submission and receiving.",
      "Ensured accuracy and completeness of received documents, signatures, and office records.",
      "Assisted in posting and updating 2026 Citizen Charter and EODB stickers in designated offices.",
      "Coordinated with office staff and supervisors during office transactions and document processing.",
      "Improved communication, teamwork, and professionalism in handling office-related tasks.",
      "Managed multiple assignments and deadlines during daily office operations.",
    ],
    slides: [
      { src: "/monthly_accom_report/m3/m3-1.png", alt: "M3 report page 1" },
      { src: "/monthly_accom_report/m3/m3-2.png", alt: "M3 report page 2" },
      { src: "/monthly_accom_report/m3/m3-3.png", alt: "M3 report page 3" },
    ],
  },
] as const;

const DTR_SLIDES: readonly AlbumSlide[] = [
  { src: "/daily_time_record/dtr1.png", alt: "Daily time record page 1" },
  { src: "/daily_time_record/dtr2.png", alt: "Daily time record page 2" },
  { src: "/daily_time_record/dtr3.png", alt: "Daily time record page 3" },
  { src: "/daily_time_record/dtr4.png", alt: "Daily time record page 4" },
] as const;

const PROGRESS_ROWS: readonly ProgressRow[] = [
  {
    objective: "Develop office and administrative skills in a professional environment",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Improve document handling, encoding, printing, and processing skills",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Enhance communication and coordination skills with office staff",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Gain experience in operating office equipment and computer systems",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Apply responsibility, discipline, and professionalism in office tasks",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Develop creativity and organizational skills in preparing office documents",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Improve document preparation and finishing skills",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Enhance attention to detail and patience in office-related activities",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Gain experience in preparing and updating office materials",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Develop communication and coordination in office transactions",
    status: "Accomplished",
    problem: "None",
  },
  {
    objective: "Apply teamwork and professionalism in office operations",
    status: "Accomplished",
    problem: "None",
  },
] as const;

const ANALYSIS_CARDS: readonly AnalysisCard[] = [
  {
    title: "Settings",
    body: "The internship was conducted in a professional office environment within the school, where various administrative and office-related tasks were assigned daily. This setting provided valuable hands-on experience in document processing, office coordination, operating office equipment, and assisting staff and supervisors. The internship also helped improve communication, responsibility, teamwork, and time management skills while balancing assigned tasks and meeting office deadlines.",
  },
  {
    title: "Supervisor",
    body: "The internship was supervised by the assigned office supervisor who guided and monitored all daily tasks, provided instructions for document processing, and ensured that all work was completed properly and on time. The supervisor also assisted in improving my skills in encoding, organizing documents, operating office equipment, and maintaining professionalism in the workplace.",
  },
  {
    title: "Environmental Conditions or Events",
    body: "I worked in a professional office environment within the school where I was able to perform my OJT duties effectively. The daily office setting helped me develop discipline and adaptability while handling administrative tasks. I was also able to interact and coordinate with office staff and supervisors, which made me feel more confident and engaged in completing my responsibilities.",
  },
  {
    title: "Self-Assessment",
    body: "I learned how to effectively manage my time and multitask by balancing my internship responsibilities and academic requirements such as my capstone project. Despite challenges, I was able to stay organized, adapt to different tasks, and consistently produce quality outputs in both areas.",
  },
  {
    title: "General",
    body: "This internship contributed significantly to my personal and professional development by enhancing my skills in communication, responsibility, and teamwork. It also helped me gain valuable experience in office work and develop a stronger sense of discipline and professionalism that I can apply in my future career and personal growth.",
  },
] as const;

export function Chapter3Content() {
  return (
    <>
      <h1 className="mb-10 border-b border-black/10 pb-10 text-balance text-3xl font-semibold text-black sm:text-4xl">
        Chapter 3
      </h1>

      <p className="mb-8 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
        Monthly accomplishment reports with summaries, key accomplishments, and
        supporting document scans per month.
      </p>

      <div className="space-y-12">
        {REPORTS.map((report) => (
          <section key={report.id} aria-labelledby={`${report.id}-heading`}>
            <h2
              id={`${report.id}-heading`}
              className="mb-2 text-xl font-semibold text-black sm:text-2xl"
            >
              Monthly Accomplishment Report
            </h2>
            <p className="mb-5 text-sm font-semibold uppercase  text-black/70">
              {report.month}
            </p>

            <p className="mb-6 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
              {report.summary}
            </p>

            <p className="mb-3 text-base font-semibold uppercase text-black">
              Key Accomplishments
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-5 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
              {report.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ImageAlbum slides={[...report.slides]} />
          </section>
        ))}
      </div>

      <section aria-labelledby="dtr-heading" className="mt-14">
        <h2 id="dtr-heading" className="mb-6 text-xl font-semibold text-black sm:text-2xl">
          Daily Time Record
        </h2>
        <ImageAlbum slides={[...DTR_SLIDES]} />
      </section>

      <section aria-labelledby="ipr-heading" className="mt-14">
        <h2 id="ipr-heading" className="mb-6 text-xl font-semibold text-black sm:text-2xl">
          Internship Progress Report
        </h2>

        <div className="mb-8 space-y-2 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          <p>Complete record of internship details, objectives, and accomplishments.</p>
          <p><span className="font-semibold">Name:</span> Paderes, John Joseph T.</p>
          <p><span className="font-semibold">Course:</span> Bachelor of Science in Information Technology</p>
          <p><span className="font-semibold">Agency:</span> Occidental Mindoro State College</p>
          <p><span className="font-semibold">Period Covered:</span> January 26, 2026 to April 27, 2026</p>
          <p><span className="font-semibold">Total Hours:</span> 486 hours</p>
        </div>

        <div className="overflow-x-auto border border-black/15">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-black/4">
                <th className="border border-black/15 px-3 py-2 text-sm font-semibold text-black">Objectives</th>
                <th className="border border-black/15 px-3 py-2 text-sm font-semibold text-black">Work Status</th>
                <th className="border border-black/15 px-3 py-2 text-sm font-semibold text-black">Problems Met</th>
              </tr>
            </thead>
            <tbody>
              {PROGRESS_ROWS.map((row) => (
                <tr key={row.objective}>
                  <td className="border border-black/15 px-3 py-2 align-top text-sm text-black">{row.objective}</td>
                  <td className="border border-black/15 px-3 py-2 align-top text-sm text-black">{row.status}</td>
                  <td className="border border-black/15 px-3 py-2 align-top text-sm text-black">{row.problem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="iar-heading" className="mt-14">
        <h2 id="iar-heading" className="mb-6 text-xl font-semibold text-black sm:text-2xl">
          Internship Analysis Report
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ANALYSIS_CARDS.map((card) => (
            <article key={card.title} className="border border-black/15 bg-neutral-50 p-4">
              <p className="mb-2 text-base font-semibold uppercase text-black">
                {card.title}
              </p>
              <p className="text-sm leading-relaxed text-black sm:text-base">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
