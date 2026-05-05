import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STP",
  description: "Student Trainee Prayer.",
};

const prayer = [
  "Thank You for this new day and for the opportunity to grow and learn through my training. Guide my hands, my thoughts, and my heart as I take on each task today. Grant me the patience to listen, the wisdom to understand, and the strength to overcome any challenges that come my way.",
  "Help me to be respectful, diligent, and committed in all that I do. May I learn not just with my mind, but also with humility and integrity. Let the people I work with be kind and supportive, and may I be a blessing to them in return.",
  "Lord, mold me into someone prepared for the future responsible, skilled, and grounded in values. I offer You this journey as a student trainee, and I trust that You will lead me every step of the way.",
  "Bless my mentors, supervisors, and everyone I will work with. May we grow together in purpose and passion. I offer this to You, Lord. May it be a step closer to the future You have planned for me.",
] as const;

export default function StpPage() {
  return (
    <article className="w-full">
      <header className="mb-10 border-b border-black/10 pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          Student Trainee Prayer
        </h1>
      </header>

      <section aria-labelledby="student-trainee-prayer">
        <p className="mb-4 text-base leading-relaxed tracking-tight text-black sm:text-[17px] sm:leading-[1.75]">
          Dear Lord,
        </p>
        <div className="space-y-4">
          {prayer.map((line) => (
            <p
              key={line}
              className="text-base leading-relaxed tracking-tight text-black sm:text-[17px] sm:leading-[1.75]"
            >
              {line}
            </p>
          ))}
        </div>
        <p className="mt-4 text-base leading-relaxed tracking-tight text-black sm:text-[17px] sm:leading-[1.75]">
          Amen
        </p>
      </section>
    </article>
  );
}
