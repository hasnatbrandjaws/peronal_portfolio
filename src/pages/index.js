import React, { useContext } from "react";
import { CursorContext } from "./_app";
import Link from "next/link";

export default function Index() {
  const { textEnter, textLeave } = useContext(CursorContext);

  return (
    <>
      <main className="max-w-[800px] mx-auto space-y-10">
        {/* Banner */}
        <section>
          <h2>Hi, I'm Dillion👋</h2>
          <h6>
            Software Engineer turned Entrepreneur. I love building things and
            helping people. Very active on Twitter.
          </h6>
        </section>
        {/* About */}
        <section>
          <h5>About</h5>
          <p>
            At the end of 2022, I quit my job as a software engineer to go
            fulltime into building and scaling my own SaaS businesses. In the
            past, I pursued a double degree in computer science and business,
            interned at big tech companies in Silicon Valley, and competed in
            over 21 hackathons for fun. I also had the pleasure of being a part
            of the first ever in-person cohort of buildspace called buildspace
            sf1.
          </p>
        </section>
        {/* Work Experience */}
        <section>
          <h5>Work Experience</h5>
          <div>
            <h6> Brand</h6>
            <div>May 2021 - Oct 2022</div>
            <p>
              Implemented the Bitcoin discreet log contract (DLC) protocol
              specifications as an open source Typescript SDK. Dockerized all
              microservices and setup production kubernetes cluster. Architected
              a data lake using AWS S3 and Athena for historical backtesting of
              bitcoin trading strategies. Built a mobile app using react native
              and typescript.
            </p>
          </div>
        </section>

        {/* Education */}
        <section>
          <h5>Education</h5>
          <div>
            <h6>Bachelors</h6>
            <div>May 2021 - Oct 2022</div>
            <p>
              Implemented the Bitcoin discreet log contract (DLC) protocol
              specifications as an open source Typescript SDK. Dockerized all
              microservices and setup production kubernetes cluster. Architected
              a data lake using AWS S3 and Athena for historical backtesting of
              bitcoin trading strategies. Built a mobile app using react native
              and typescript.
            </p>
          </div>
        </section>
        {/* Skills */}
        <section>
          <h5>Skills</h5>
          <div>
            <div>Html</div>
            <div>css</div>
            <div>jquery</div>
            <div>bootstrap</div>
            <div>tailwind</div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
            <div>
              <div className="px-2">
                <div className="space-y-1">
                  <p className="mt-1 text-base">Svarn</p>
                  <time className="font-sans text-xs">2023</time>
                  <div className="hidden font-sans text-xs underline print:visible"></div>
                  Real Estate Development
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="">
                Want to chat? Just shoot me a dm{" "}
                <Link href="#." className="text-blue-500 hover:underline">
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </div>
        </section>
      </main>
      <section className="w-full h-screen bg-[#def31c] flex items-center">
        <h2
          className="w-full font-bold "
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Hello World
        </h2>
      </section>      
    </>
  );
}
