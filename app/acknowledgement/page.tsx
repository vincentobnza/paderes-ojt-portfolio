import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acknowledgement",
  description: "Acknowledgement.",
};

const acknowledgements = [
  "To our OJT Adviser, Leiza Linda L. Pelayo, for guiding and showing us the courage to work hard and better in our chosen office and giving us an advice to work professionally.",
  "To the IQA office family thank you for the acceptance, for the support and for giving me permission on performing my On-the-Job-Training at your office. To the employee’s and teachers who trusting, guided, support me and imparting my skills and knowledge, also for treating me for being a part of your OJT staff to discover new ideas to your office, thank you for believing.",
  "Thanks to my Friends, for helping me and sharing my problems, also when I needed help, and for making me happy in times of difficulty and giving me color in my college life.",
  "To my Parents, for the understanding, for working hard to support in financially and my study, for guiding me in every decision I’d made and thank you for everlasting love that I’ve felt.",
  "The Almighty God, for waking me up every day for all the blessing we received every day and for what we are going to received more, for guidance, strength, patient, wisdom, understanding, and knowledge to accomplish this chapter of my life.",
] as const;

export default function AcknowledgementPage() {
  return (
    <article className="w-full">
      <header className="mb-10 border-b border-black/10 pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          Acknowledgement
        </h1>
      </header>

      <section aria-labelledby="acknowledgement-content">
        <h2
          id="acknowledgement-content"
          className="mb-4 text-xl font-semibold tracking-tight text-black sm:text-2xl"
        >
          Acknowledgement
        </h2>
        <p className="text-base leading-relaxed tracking-tight text-black sm:text-[17px] sm:leading-[1.75]">
          The completion of this undertaking could not have been possible without
          the participation and assistance of so many people whose names may not all
          be enumerated. Their contributions are sincerely appreciated and
          gratefully acknowledged. However, the group would like to express their
          deep appreciation and indebtedness particularly to the following:
        </p>
        <div className="mt-6 space-y-4">
          {acknowledgements.map((item) => (
            <p
              key={item}
              className="text-base leading-relaxed tracking-tight text-black sm:text-[17px] sm:leading-[1.75]"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

    </article>
  );
}
