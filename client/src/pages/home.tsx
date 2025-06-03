// File: d:\1Projects\PeekabooWebsite\client\src\pages\home.tsx
// Author: Cascade (AI Assistant) Gemini 2.5 Pro via Windsurf
// Date: 2025-06-02
// Description: This file defines the Home page component for the Peekaboo Interactive Games website.
// It displays information about the company, its legacy, values, and contact details.
// This page serves as the main landing page for visitors.
//
//

import pigLogoPath from "@assets/IMG_8259.png";
import pigFarmPath from "@assets/IMG_8260.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="pt-16 pb-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Legendary Design Meets Modern Innovation
            </h1>
            <div className="mb-6">
              <img 
                src={pigLogoPath} 
                alt="Peekaboo Interactive Games - Pig Logo" 
                className="w-48 h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Welcome to Peekaboo Interactive Games, where the timeless artistry of renowned children's illustrator Brianne Baker lives on through cutting-edge educational technology designed for the next generation.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-16">
        <div className="max-w-2xl mx-auto space-y-12">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">The Brianne Baker Legacy</h2>
            <div className="my-8 flex justify-center">
              <img 
                src={pigFarmPath} 
                alt="Peekaboo Farm Scene with Pig, Chickens, and Barn" 
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Since 2008, Brianne Baker's distinctive illustrations have defined childhood wonder for millions of families worldwide. Her intuitive understanding of early development, paired with her extraordinary artistic vision, has created some of the most beloved characters in children's digital media. From the gentle farm animals of Peekaboo Barn to the magical forest creatures inspired by Charley Harper's aesthetic, Baker's work transcends mere illustration—it captures the essence of childhood curiosity and transforms it into meaningful learning experiences.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Baker's artistic philosophy centers on respect for developing minds. Every curve, color, and character emerges from deep understanding of what captivates young hearts while supporting cognitive growth. Her geometric precision and vibrant palette create visual experiences that engage without overwhelming, educate without lecturing, and delight without distraction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">A New Chapter in Educational Excellence</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Peekaboo Interactive Games proudly carries forward this extraordinary creative legacy, breathing new life into beloved classics while maintaining the artistic integrity that has made these apps treasured by educators, therapists, and families globally. Our mission extends beyond preservation—we're reimagining these timeless experiences for modern devices and evolving educational needs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">Complete Privacy Protection</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              In an era where children's digital privacy has become increasingly precious, we stand as unwavering guardians of safe play experiences. Every app maintains zero data collection, complete offline functionality, and absolute freedom from advertising. Our COPPA-compliant design ensures pure educational exploration that honors childhood development above all else.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">Trusted by Professionals Worldwide</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our comprehensive collection serves thousands of classrooms, therapy centers, and special education programs. From early intervention specialists to ESL educators, professionals trust our research-based designs to support children with diverse learning needs through engaging, therapeutic interactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">Innovation Rooted in Excellence</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              While honoring Brianne Baker's artistic vision, we're pioneering new approaches to educational technology. Our complete app rebuilds utilize cutting-edge frameworks designed for longevity and institutional reliability, ensuring these cherished experiences will serve generations of learners ahead.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">Independent Studio Values</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              As a woman-led indie kids educational studio, every creation reflects our dedication to meaningful childhood experiences. We believe exceptional children's technology emerges from love, expertise, and unwavering commitment to developmental appropriateness—not corporate algorithms or market trends.
            </p>
          </section>

          <section className="text-center space-y-4 pt-8">
            <p className="text-md text-slate-600">
              Legacy information available at <a href="https://www.nightandday.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">nightandday.co</a>
            </p>
            <p className="text-md text-slate-600">
              Contact us at <a href="mailto:support@peekaboointeractive.com" className="text-blue-600 hover:text-blue-700 underline">support@peekaboointeractive.com</a> to learn more about institutional licensing and educational partnerships.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Peekaboo Interactive Games
            <span className="mx-2">|</span>
            <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
