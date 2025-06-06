// File: d:\1Projects\PeekabooWebsite\client\src\pages\research.tsx
// Author: Cascade (AI Assistant)
// Date: 2025-06-06
// Description: This file defines the Research page component for the Peekaboo Interactive Games website.
// It provides access to research papers that support the educational value of Peekaboo's applications.
// The page links to the Kocurek & Miller (2017) research paper that validates the approach.

// No imports needed for links, using standard anchor tags instead

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="pt-16 pb-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Research & Validation
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              The educational approach and effectiveness of Peekaboo Interactive Games is supported by academic research.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-16">
        <div className="max-w-2xl mx-auto space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Key Research Papers</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Kocurek & Miller (2017)</h3>
              <p className="text-md text-slate-600 mb-4">
                This influential paper examines the effectiveness of interactive applications like Peekaboo in early childhood development, 
                demonstrating significant positive outcomes in learning engagement and knowledge retention.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/assets/Kocurek+&+Miller+(2017)-small.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Research Paper (PDF)
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Peekaboo Interactive Games
            <span className="mx-2">|</span>
            <a href="/" className="text-blue-600 hover:text-blue-700 underline">Home</a>
            <span className="mx-2">|</span>
            <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
