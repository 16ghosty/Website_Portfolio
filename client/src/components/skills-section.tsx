import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, BarChart, Brain, Cloud, Database, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    iconColor: "text-primary-600",
    skills: [
      { name: "Python", level: 95, label: "Expert" },
      { name: "R", level: 85, label: "Advanced" },
      { name: "SQL", level: 90, label: "Expert" },
      { name: "PySpark", level: 80, label: "Advanced" },
    ]
  },
  {
    title: "Data Visualization",
    icon: BarChart,
    iconColor: "text-cyan-500",
    skills: [
      { name: "Tableau", level: 92, label: "Expert" },
      { name: "Power BI", level: 88, label: "Expert" },
      { name: "D3.js", level: 70, label: "Intermediate" },
      { name: "Matplotlib/Seaborn", level: 85, label: "Advanced" },
    ]
  },
  {
    title: "Machine Learning",
    icon: Brain,
    iconColor: "text-violet-500",
    skills: [
      { name: "scikit-learn", level: 90, label: "Expert" },
      { name: "TensorFlow", level: 75, label: "Intermediate" },
      { name: "Statistical Modeling", level: 88, label: "Expert" },
      { name: "NLP", level: 82, label: "Advanced" },
    ]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    iconColor: "text-blue-500",
    skills: [
      { name: "AWS", level: 85, label: "Advanced" },
      { name: "Azure", level: 80, label: "Advanced" },
      { name: "GCP", level: 75, label: "Intermediate" },
      { name: "Databricks", level: 78, label: "Advanced" },
    ]
  },
  {
    title: "Data Engineering",
    icon: Database,
    iconColor: "text-green-500",
    skills: [
      { name: "ETL Pipelines", level: 90, label: "Expert" },
      { name: "Airflow", level: 82, label: "Advanced" },
      { name: "Snowflake", level: 85, label: "Advanced" },
      { name: "Kafka", level: 70, label: "Intermediate" },
    ]
  },
  {
    title: "Accessibility & Compliance",
    icon: Shield,
    iconColor: "text-indigo-500",
    skills: [
      { name: "WCAG 2.2 AA", level: 95, label: "Expert" },
      { name: "GDPR Compliance", level: 88, label: "Advanced" },
      { name: "Screen Reader Testing", level: 85, label: "Advanced" },
      { name: "Color Contrast", level: 92, label: "Expert" },
    ]
  }
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Proficiency across the full data science stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-white dark:bg-slate-800 border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <IconComponent className={`${category.iconColor} mr-3 h-5 w-5`} />
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-sm text-slate-500">{skill.label}</span>
                        </div>
                        <Progress 
                          value={isVisible ? skill.level : 0} 
                          className="h-2"
                        />
                      </div>
                    ))}
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
