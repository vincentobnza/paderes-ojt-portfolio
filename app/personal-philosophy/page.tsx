import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Philosophy",
  description: "Quick overview of my personal philosophy.",
};

const philosophyLines = [
  "I believe that the greatest growth often begins in the most difficult moments. As a student and as a person, I choose to face challenges that feel bigger than me, knowing that they are shaping me into who I am meant to become.",
  "From the very beginning of life, we've all learned through trial and error crawling, stumbling, walking, and eventually running. Every fall taught us balance. Every mistake became a stepping stone. It’s a reminder that failure is not the end it’s a necessary part of learning.",
  "I’ve made my fair share of mistakes, but I’ve learned to value them. They’ve taught me patience, persistence, and problem-solving. They’ve helped me grow not just in skill, but in mindset. I’ve learned to observe those ahead of me, to stay open to new approaches, and to step out of my comfort zone, even when it's uncomfortable.",
  "To me, failure isn’t failure at all its feedback. It shows me that something can be done differently. Each setback pushes me to reflect, revise, and return stronger. The process of falling and rising again builds resilience, and with each attempt, I grow wiser and more prepared.",
  "I remind myself that growth is not a race. It’s okay to go slow, as long as I keep moving forward. Every small step, every new experience, adds up to something greater. I believe that real success lies not in perfection, but in progress measured by how much I learn, how far I’ve come, and how willing I am to keep trying.",
  "In the end, I choose to see life as an adventure of continuous learning. Challenges don’t block my path they are the path.",
] as const;

export default function PersonalPhilosophyPage() {
  return (
    <article className="w-full">
      <header className="mb-10 border-b border-black/10 pb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase text-black">
          Quick Overview
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          Personal Philosophy
        </h1>
      </header>

      <section aria-labelledby="philosophy-statement">
        <h2
          id="philosophy-statement"
          className="mb-4 text-xl font-semibold tracking-tight text-black sm:text-2xl"
        >
          &quot;Embracing obstacles as opportunities for growth&quot;
        </h2>
        <div className="space-y-4">
          {philosophyLines.map((line) => (
            <p
              key={line}
              className="text-base leading-relaxed tracking-tight text-black sm:text-[17px] sm:leading-[1.75]"
            >
              {line}
            </p>
          ))}
        </div>
      </section>
    </article>
  );
}
