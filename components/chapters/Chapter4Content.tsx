const PROFILE_ROWS = [
  ["Student Name", "Paderes, John Joseph T."],
  ["Program/Course", "BS Information Technology"],
  ["Internship Start Date", "January 26, 2026"],
  ["Company", "PDME OFFICE ( OMSC )"],
  ["Supervisor", "Engr. Abigail N. Gonazales, MSEE"],
  ["Student ID", "MA22-IT-02663"],
  ["Academic Year", "2026-2026"],
  ["Internship End Date", "April 27, 2026"],
  ["Department", ""],
  ["Position", "On-The-Job Trainee"],
] as const;

const RATING_ROWS = [
  ["SR — Student Self-Rating", "285"],
  ["PR — Peer Rating", "285"],
  ["SICR — Student Internship Coordinator Rating", "277"],
  ["ASR — Agency Supervisor Rating", "274"],
] as const;

const RATED_BY = [
  ["Student Intern", "JOHN JOSEPH T. PADERES"],
  ["Peer", "REA ALYZA B. DELA CRUZ"],
  ["Student Internship Coordinator", "MARITES D. ESCULTOR"],
  ["Agency Supervisor", "ENGR. ABIGAIL N. GONAZALES, MSEE"],
] as const;

export function Chapter4Content() {
  return (
    <>
      <h1 className="mb-10 border-b border-black/10 pb-10 text-balance text-3xl font-semibold text-black sm:text-4xl">
        Chapter 4
      </h1>

      <section aria-labelledby="ch4-main-heading">
        <h2
          id="ch4-main-heading"
          className="mb-2 text-xl font-semibold text-black sm:text-2xl"
        >
          A. Student Internship Evaluation Form
        </h2>
        <p className="mb-8 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
          Student Internship Performance Evaluation - Planning, Development,
          Monitoring and Evaluation Office x Occidental Mindoro State College
        </p>
      </section>

      <section aria-labelledby="ch4-eval-heading">
        <h2
          id="ch4-eval-heading"
          className="mb-4 text-xl font-semibold text-black sm:text-2xl"
        >
          Student Internship Performance Evaluation
        </h2>

        <div className="mb-10 overflow-x-auto border border-black/15">
          <table className="w-full border-collapse text-left">
            <tbody>
              {PROFILE_ROWS.map(([label, value]) => (
                <tr key={label}>
                  <th className="w-[38%] border border-black/15 bg-black/4 px-3 py-2 text-sm font-semibold text-black">
                    {label}
                  </th>
                  <td className="border border-black/15 px-3 py-2 text-sm text-black">
                    {value || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="ch4-summary-heading" className="mt-12">
        <h2
          id="ch4-summary-heading"
          className="mb-4 text-xl font-semibold text-black sm:text-2xl"
        >
          Performance Evaluation Summary
        </h2>
        <p className="mb-4 text-base font-semibold text-black">Ratings Overview</p>
        <div className="mb-8 overflow-x-auto border border-black/15">
          <table className="w-full border-collapse text-left">
            <tbody>
              {RATING_ROWS.map(([label, score]) => (
                <tr key={label}>
                  <td className="border border-black/15 px-3 py-2 text-sm text-black">
                    {label}
                  </td>
                  <td className="w-24 border border-black/15 px-3 py-2 text-sm font-semibold text-black">
                    {score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-4 text-base font-semibold text-black">Rated By</p>
        <div className="overflow-x-auto border border-black/15">
          <table className="w-full border-collapse text-left">
            <tbody>
              {RATED_BY.map(([role, name]) => (
                <tr key={role}>
                  <th className="w-[38%] border border-black/15 bg-black/4 px-3 py-2 text-sm font-semibold text-black">
                    {role}
                  </th>
                  <td className="border border-black/15 px-3 py-2 text-sm text-black">
                    {name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
