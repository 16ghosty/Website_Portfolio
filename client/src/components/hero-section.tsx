import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Building } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">
              Data Scientist & Analytics Expert
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Transforming complex data into actionable insights through advanced analytics, 
              machine learning, and accessible visualizations. Specialized in predictive modeling 
              and accessibility-compliant dashboard design.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                <GraduationCap className="text-primary-600 h-4 w-4" />
                <span className="text-sm font-medium">MS Data Science, UMass Dartmouth</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                <Building className="text-cyan-500 h-4 w-4" />
                <span className="text-sm font-medium">Ex-Walmart, Credit Suisse, Goldman Sachs</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 font-medium"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-3 font-medium"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern analytics workspace with multiple monitors showing data dashboards"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
