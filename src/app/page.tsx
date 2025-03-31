import Image from "next/image";
import ExperienceEntry from "@/components/resume/experience-entry";
import data from "@/_data/resume.json";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Headshot and About Me Section */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-8">
          <Image
            src="/headshot.jpg" // Path to the image in the public directory
            alt="Headshot"
            width={150}
            height={150}
            className="rounded-full border-2 border-gray-300"
          />
          <p className="text-center sm:text-left text-gray-700 mt-4 sm:mt-0 max-w-lg">
            Hi, I'm [Your Name], a passionate software engineer with experience in building modern web applications. 
            I specialize in React, Next.js, and Tailwind CSS, and I enjoy creating user-friendly and performant solutions. 
            Welcome to my portfolio!
          </p>
        </div>

        {/* Experience Section */}
        <div className="p-6 max-w-4xl mx-auto">
          {data["experience"].map((entry, index) => (
            <ExperienceEntry
              key={index}
              title={entry.title}
              company={entry.company}
              location={entry.location}
              duration={entry.dates}
              description={entry.description}
            />
          ))}
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
        {/* Footer content can go here */}
      </footer>
    </div>
  );
}
