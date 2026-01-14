<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nabil Muntasir | Frontend Developer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        dark: {
                            bg: '#050505',      // Deepest Black background
                            card: '#121212',    // Slightly lighter for cards
                            border: '#262626',  // Subtle borders
                        },
                        accent: {
                            purple: '#8b5cf6',  // Vibrant Purple
                            blue: '#3b82f6',    // Electric Blue
                        }
                    },
                    animation: {
                        'slow-blob': 'blob 10s infinite alternate',
                    },
                    keyframes: {
                        blob: {
                            '0%': { transform: 'translate(0px, 0px) scale(1)' },
                            '100%': { transform: 'translate(50px, -50px) scale(1.1)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #050505;
            color: #e5e7eb;
        }
        .grain-overlay {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            background: url('https://grainy-gradients.vercel.app/noise.svg');
            opacity: 0.03;
            pointer-events: none;
            z-index: 1;
        }
        .glass-card {
            background: rgba(18, 18, 18, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-card-hover:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: rgba(139, 92, 246, 0.3);
            transform: translateY(-5px);
        }
    </style>
</head>
<body class="antialiased selection:bg-accent-purple selection:text-white relative">

    <div class="grain-overlay"></div>

    <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div class="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-accent-purple/10 rounded-full blur-[100px] animate-slow-blob opacity-30"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-accent-blue/10 rounded-full blur-[100px] animate-slow-blob animation-delay-2000 opacity-30"></div>
    </div>

    <nav class="fixed w-full z-50 top-0 px-6 py-4 relative z-20">
        <div class="max-w-6xl mx-auto flex justify-between items-center glass-card px-6 py-3 rounded-full">
            <a href="#" class="text-lg font-bold tracking-tight text-white">Nabil<span class="text-accent-purple">.</span></a>
            <div class="hidden md:flex gap-6 text-sm font-medium text-slate-400">
                <a href="#services" class="hover:text-white transition">Services</a>
                <a href="#work" class="hover:text-white transition">Work</a>
                <a href="#about" class="hover:text-white transition">About</a>
            </div>
            <a href="#contact" class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-accent-purple hover:text-white text-sm font-semibold rounded-full transition border border-white/10">
                Let's Talk <i class="ph-bold ph-arrow-right"></i>
            </a>
        </div>
    </nav>

    

</body>
</html>