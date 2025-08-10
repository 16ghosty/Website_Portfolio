import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ExternalLink, DollarSign, Clock, Shield, Wrench } from "lucide-react";

const projects = [
  {
    title: "Student Dropout Prediction Model",
    description: "Built Python-based forecasting model using scikit-learn to predict student dropout risk with 82% accuracy, enabling early intervention strategies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "scikit-learn", "Predictive Analytics"],
    impact: "20% retention boost",
    icon: TrendingUp,
    colors: {
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-800 dark:text-blue-200"
    }
  },
  {
    title: "Walmart Network Optimization",
    description: "Created predictive network optimization model using linear programming to simulate warehouse throughput under demand spikes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "Linear Programming", "Operations Research"],
    impact: "30% risk reduction",
    icon: TrendingUp,
    colors: {
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-800 dark:text-green-200"
    }
  },
  {
    title: "Customer Retention Optimization",
    description: "Deployed multi-channel campaign optimization model in R to boost customer retention at Credit Suisse.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["R", "Campaign Optimization", "GDPR Compliance"],
    impact: "$4.7M annual uplift",
    icon: DollarSign,
    colors: {
      bg: "bg-purple-100 dark:bg-purple-900",
      text: "text-purple-800 dark:text-purple-200"
    }
  },
  {
    title: "NLP Support Ticket Optimization",
    description: "Created Python NLP pipeline to cluster support tickets and recommend triage paths at Goldman Sachs.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "NLP", "Text Classification"],
    impact: "28% faster response",
    icon: Clock,
    colors: {
      bg: "bg-yellow-100 dark:bg-yellow-900",
      text: "text-yellow-800 dark:text-yellow-200"
    }
  },
  {
    title: "Defect Prediction System",
    description: "Built defect prediction classifier using logistic regression in PySpark, identifying 92% of failure cases pre-deployment.",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["PySpark", "Logistic Regression", "Quality Control"],
    impact: "92% detection rate",
    icon: Shield,
    colors: {
      bg: "bg-orange-100 dark:bg-orange-900",
      text: "text-orange-800 dark:text-orange-200"
    }
  },
  {
    title: "Vehicle Dynamics Analytics",
    description: "Led development of regression model to forecast suspension fatigue using historical telemetry data.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "Regression", "Telemetry"],
    impact: "40% failure reduction",
    icon: Wrench,
    colors: {
      bg: "bg-red-100 dark:bg-red-900",
      text: "text-red-800 dark:text-red-200"
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Showcasing data science solutions with measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="project-card bg-slate-50 dark:bg-slate-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />

                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => {
                      const tagColors = [
                        project.colors,
                        { bg: "bg-green-100 dark:bg-green-900", text: "text-green-800 dark:text-green-200" },
                        { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-800 dark:text-purple-200" }
                      ];
                      const colorSet = tagColors[tagIndex % tagColors.length];
                      
                      return (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className={`${colorSet.bg} ${colorSet.text} text-xs`}
                        >
                          {tag}
                        </Badge>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-primary-600 dark:text-primary-400 font-semibold text-sm flex items-center">
                      <IconComponent className="h-4 w-4 mr-1" />
                      {project.impact}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
