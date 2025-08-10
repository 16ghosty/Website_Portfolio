import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Ready to collaborate on your next data science project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                  <Mail className="text-primary-600 dark:text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-600 dark:text-slate-300">gautammarathe11@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg">
                  <Linkedin className="text-cyan-600 dark:text-cyan-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-slate-600 dark:text-slate-300">linkedin.com/in/gautammarathe</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                  <Phone className="text-green-600 dark:text-green-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-300">+1 (774) 503-9995</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-violet-100 dark:bg-violet-900 p-3 rounded-lg">
                  <MapPin className="text-violet-600 dark:text-violet-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">Dartmouth, MA, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Specializing in:</strong> Predictive Analytics • Accessible Dashboard Design • 
                GDPR Compliance • ETL Pipelines • Machine Learning
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 font-medium">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-6 py-3 font-medium"
                  onClick={() => window.open('mailto:gautammarathe11@gmail.com')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern professional workspace with laptop displaying data analytics dashboard"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
