import { Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl text-white mb-4">Gautam Marathe</h3>
            <p className="text-slate-400 mb-4">
              Data Scientist passionate about turning complex data into actionable insights 
              and creating accessible, impactful solutions.
            </p>
            <div className="flex space-x-4">
              <button className="text-slate-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="text-slate-400 hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </button>
              <button className="text-slate-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Expertise</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Predictive Analytics</li>
              <li>Machine Learning</li>
              <li>Data Visualization</li>
              <li>Accessibility Compliance</li>
              <li>ETL Pipeline Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Education</h4>
            <div className="space-y-3 text-slate-400">
              <div>
                <p className="font-medium text-slate-300">MS Data Science</p>
                <p className="text-sm">UMass Dartmouth (4.0 GPA)</p>
              </div>
              <div>
                <p className="font-medium text-slate-300">BS Mechanical Engineering</p>
                <p className="text-sm">Manipal Institute of Technology</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Gautam Marathe. All rights reserved. • Built with accessibility and modern web standards in mind.</p>
        </div>
      </div>
    </footer>
  );
}
