const Header = () => {
  return (
    <div class="antialiased selection:bg-accent-purple selection:text-white relative">
      <div class="grain-overlay"></div>

      <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div class="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-accent-purple/10 rounded-full blur-[100px] animate-slow-blob opacity-30"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-accent-blue/10 rounded-full blur-[100px] animate-slow-blob animation-delay-2000 opacity-30"></div>
      </div>
      <nav class="fixed w-full z-50 top-0 px-6 py-4 relative z-20">
        <div class="max-w-6xl mx-auto flex justify-between items-center glass-card px-6 py-3 rounded-full">
          <a href="#" class="text-lg font-bold tracking-tight text-white">
            Nabil<span class="text-accent-purple">.</span>
          </a>
          <div class="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#services" class="hover:text-white transition">
              Services
            </a>
            <a href="#work" class="hover:text-white transition">
              Work
            </a>
            <a href="#about" class="hover:text-white transition">
              About
            </a>
          </div>
          <a
            href="#contact"
            class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-accent-purple hover:text-white text-sm font-semibold rounded-full transition border border-white/10"
          >
            Let's Talk <i class="ph-bold ph-arrow-right"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
