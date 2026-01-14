import Images from "../Images";
import Ami from "/src/assets/ami.png";
import NM from "/src/assets/nm.png";
import Lpage from "/src/assets/lpage.png";
import Ecom from "/src/assets/ecom.png";

const Banner = () => {
  return (
    <>
      <section class="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 relative z-10">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 text-center md:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-bold mb-6 uppercase tracking-wider">
              <span class="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></span>
              Front-End Developer
            </div>
            <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight ">
              Crafting digital <></>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue ">
                experiences.
              </span>
            </h1>
            <p class="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I'm Nabil Muntasir. A passionate developer focused on building
              smooth, accessible, and modern web interfaces using React &
              Tailwind CSS.
            </p>
            <div class="flex gap-4 justify-center md:justify-start">
              <a
                href="#work"
                class="px-8 py-4 bg-white text-dark-bg font-bold rounded-full hover:scale-105 transition shadow-lg shadow-white/10"
              >
                See My Work
              </a>
              <a
                href="#services"
                class="p-4 glass-card rounded-full hover:bg-white/10 transition text-xl flex items-center justify-center"
              >
                <i class="ph-bold ph-arrow-down"></i>
              </a>
            </div>
          </div>

          <div class="order-1 md:order-2 flex justify-center relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-accent-purple to-accent-blue blur-[80px] opacity-20 rounded-full transform scale-90 md:scale-110 -z-10"></div>
            <div class="w-[300px] h-[300px] md:w-[450px] md:h-[550px] rounded-[3rem] overflow-hidden border-2 border-white/5 shadow-2xl relative z-10 bg-dark-card/50">
              <Images
                imgSrc={Ami}
                alt="Nabil Muntasir"
                class="w-full h-full object-cover hover:scale-105 transition duration-700 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="border-y border-white/5 bg-white/[0.01] py-10 relative z-10">
        <div class="max-w-6xl mx-auto px-6 flex justify-center md:justify-between flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition duration-500 text-slate-300 font-bold text-xl tracking-tight">
          <span class="flex items-center gap-2">
            <i class="ph-fill ph-atom text-accent-blue"></i> React JS
          </span>
          <span class="flex items-center gap-2">
            <i class="ph-fill ph-paint-brush text-accent-purple"></i> Tailwind
          </span>
          <span class="flex items-center gap-2">
            <i class="ph-bold ph-file-js text-yellow-500"></i> JavaScript
          </span>
          <span class="flex items-center gap-2">
            <i class="ph-fill ph-git-branch text-orange-500"></i> Git
          </span>
        </div>
      </div>

      <section id="services" class="py-24 px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-white mb-4">
              What I Bring to the Table
            </h2>
            <p class="text-slate-400 max-w-2xl mx-auto">
              I don't just write code; I build solutions that help your business
              grow.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="glass-card glass-card-hover p-8 rounded-3xl transition duration-300">
              <div class="w-14 h-14 rounded-full bg-accent-purple/20 flex items-center justify-center mb-6 text-accent-purple text-2xl">
                <i class="ph-fill ph-layout"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">
                Responsive Design
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                I create websites that look perfect on any device—mobile,
                tablet, or desktop. No broken layouts.
              </p>
            </div>
            <div class="glass-card glass-card-hover p-8 rounded-3xl transition duration-300 border-accent-blue/30 relative">
              <div class="absolute top-0 right-0 p-4 opacity-10">
                <i class="ph-fill ph-code text-6xl"></i>
              </div>
              <div class="w-14 h-14 rounded-full bg-accent-blue/20 flex items-center justify-center mb-6 text-accent-blue text-2xl">
                <i class="ph-fill ph-brackets-curly"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">
                Frontend Development
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                Building interactive user interfaces with React.js. Clean code,
                reusable components, and fast loading.
              </p>
            </div>
            <div class="glass-card glass-card-hover p-8 rounded-3xl transition duration-300">
              <div class="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-500 text-2xl">
                <i class="ph-fill ph-rocket-launch"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">
                Performance & SEO
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                Optimizing websites for speed and search engines so your clients
                can find you easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="py-12 px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-white mb-12 border-l-4 border-accent-purple pl-4">
            Selected Works
          </h2>

          <div class="grid gap-16">
            <div class="glass-card rounded-3xl overflow-hidden grid md:grid-cols-2 group hover:border-white/20 transition duration-500">
              <div class="h-[300px] md:h-auto overflow-hidden relative">
                <Images
                  imgSrc={Ecom}
                  class="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  alt="Project 1"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-50"></div>
              </div>
              <div class="p-8 md:p-12 flex flex-col justify-center">
                <h3 class="text-3xl font-bold text-white mb-4">
                  E-Commerce Dashboard
                </h3>
                <p class="text-slate-400 leading-relaxed mb-8">
                  A modern, dark-themed dashboard for managing sales data.
                  Features real-time charts and responsive tables.
                </p>
                <div class="flex gap-3 mb-10 text-sm font-medium font-mono text-accent-purple">
                  <span>_React</span>
                  <span>_Tailwind</span>
                  <span>_Recharts</span>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all"
                >
                  View Project <i class="ph-bold ph-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="glass-card rounded-3xl overflow-hidden grid md:grid-cols-2 group hover:border-white/20 transition duration-500">
              <div class="h-[300px] md:h-auto overflow-hidden relative md:order-2">
                <Images
                  imgSrc={Lpage}
                  class="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  alt="Project 2"
                />
              </div>
              <div class="p-8 md:p-12 flex flex-col justify-center md:order-1">
                <h3 class="text-3xl font-bold text-white mb-4">
                  Agency Landing Page
                </h3>
                <p class="text-slate-400 leading-relaxed mb-8">
                  High-performance landing page designed to convert visitors.
                  Smooth scroll animations and clean typography.
                </p>
                <div class="flex gap-3 mb-10 text-sm font-medium font-mono text-accent-blue">
                  <span>_HTML5</span>
                  <span>_CSS3</span>
                  <span>_JavaScript</span>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all"
                >
                  View Project <i class="ph-bold ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="py-24 px-6 relative z-10">
        <div class="max-w-4xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-bold text-white mb-6">More About Me</h2>
              <p class="text-slate-400 mb-6 leading-relaxed">
                I started my journey with a curiosity for how websites work, and
                now I build them. I believe in clean code and user-centric
                design.
              </p>
              <p class="text-slate-400 mb-6 leading-relaxed">
                When I'm not coding, I'm exploring new UI trends or contributing
                to open-source projects.
              </p>
              <Images
                imgSrc={NM}
                class="rounded-full w-12 h-12 inline-block shadow-lg"
                alt="Signature"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-dark-bg p-6 rounded-2xl border border-white/5 text-center">
                <span class="block text-3xl font-bold text-accent-purple mb-1">
                  10+
                </span>
                <span class="text-xs text-slate-500 uppercase tracking-widest">
                  Projects
                </span>
              </div>
              <div class="bg-dark-bg p-6 rounded-2xl border border-white/5 text-center">
                <span class="block text-3xl font-bold text-accent-blue mb-1">
                  100%
                </span>
                <span class="text-xs text-slate-500 uppercase tracking-widest">
                  Commitment
                </span>
              </div>
              <div class="bg-dark-bg p-6 rounded-2xl border border-white/5 text-center col-span-2">
                <span class="block text-3xl font-bold text-white mb-1">
                  24/7
                </span>
                <span class="text-xs text-slate-500 uppercase tracking-widest">
                  Available Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="py-24 px-6 text-center relative z-10">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-white mb-6">
            Ready to collaborate?
          </h2>
          <p class="text-slate-400 text-lg mb-10">
            I am currently open for freelance projects or full-time
            opportunities.
          </p>
          <a
            href="mailto:nabil@email.com"
            class="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue hover:opacity-80 transition pb-2 border-b-2 border-transparent hover:border-accent-purple"
          >
            nabil@example.com
          </a>

          <div class="flex justify-center gap-8 mt-12 text-slate-500 text-2xl">
            <a
              href="#"
              class="hover:text-white transition hover:-translate-y-1"
            >
              <i class="ph-fill ph-github-logo"></i>
            </a>
            <a
              href="#"
              class="hover:text-blue-500 transition hover:-translate-y-1"
            >
              <i class="ph-fill ph-linkedin-logo"></i>
            </a>
            <a
              href="#"
              class="hover:text-blue-400 transition hover:-translate-y-1"
            >
              <i class="ph-fill ph-twitter-logo"></i>
            </a>
          </div>
        </div>
        <p class="text-slate-600 text-sm mt-20">
          © 2026 Nabil Muntasir. Built with{" "}
          <span class="text-accent-purple">♥</span> and Code.
        </p>
      </section>
    </>
  );
};

export default Banner;
