import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="pt-16 pb-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
              Peekaboo Interactive Games
            </h1>
            <div className="text-6xl mb-4" role="img" aria-label="Pig emoji">
              🐷
            </div>
            <p className="text-lg text-slate-600 font-medium">PIG</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <section className="text-center space-y-8">
            {/* Support Message */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Need Support?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                If you need support for any of the Peekaboo games, we're here to help.
              </p>
            </div>

            {/* Contact Card */}
            <Card className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800">
                    Contact Support
                  </h3>
                  <p className="text-slate-600">
                    Please email us at:
                  </p>
                  <div className="pt-2">
                    <a 
                      href="mailto:info@bhhc.us" 
                      className="inline-flex items-center text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1"
                    >
                      info@bhhc.us
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            © 2024 Peekaboo Interactive Games
          </p>
        </div>
      </footer>
    </div>
  );
}
