import Image from "next/image";
import ExperienceEntry from "@/components/resume/experience-entry";
import data from "@/_data/resume.json";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1>Hello!</h1>
      <div className="p-6 max-w-4xl mx-auto">
      { data["experience"].map((entry, index) => (
        <ExperienceEntry
          key={index}
          title={entry.title}
          company={entry.company}
          location={entry.location}
          duration={entry.duration}
          description={entry.description}
        />
      )) }
      <ExperienceEntry
        title="Software Engineer"
        company="Tech Corp"
        location="San Francisco, CA"
        duration="Jan 2020 - Present"
        description={[
          "Developed and maintained web applications using React and Node.js.",
          "Collaborated with cross-functional teams to deliver high-quality software.",
          "Implemented responsive designs using Tailwind CSS.",
        ]}
      />
      <ExperienceEntry
        title="Frontend Developer"
        company="Design Studio"
        location="New York, NY"
        duration="Jun 2018 - Dec 2019"
        description={[
          "Created interactive UI components with React.",
          "Optimized website performance and accessibility.",
          "Worked closely with designers to implement pixel-perfect designs.",
        ]}
      />
    </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
