const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
