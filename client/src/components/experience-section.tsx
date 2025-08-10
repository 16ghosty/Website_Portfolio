import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Graduate Analytics Assistant",
    company: "UMass Dartmouth",
    period: "Oct 2024 – Dec 2024",
    color: "bg-primary-600",
    achievements: [
      "Built Python forecasting model (82% accuracy, 20% retention boost)",
      "Developed WCAG 2.2 AA-compliant Power BI dashboards",
      "Engineered ETL pipeline reducing reporting latency by 60%"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Walmart Advanced Systems & Robotics",
    period: "June 2024 – Sept 2024",
    color: "bg-cyan-500",
    achievements: [
      "Created predictive network optimization model (30% risk reduction)",
      "Audited Tableau dashboards for accessibility compliance",
      "Built defect prediction classifier (92% accuracy)"
    ]
  },
  {
    title: "Data Scientist",
    company: "Credit Suisse",
    period: "Sept 2022 – Sept 2023",
    color: "bg-violet-500",
    achievements: [
      "Deployed campaign optimization model ($4.7M annual uplift)",
      "Developed GDPR-compliant customer segmentation",
      "Analyzed 10M+ customer engagement patterns"
    ]
  },
  {
    title: "STEM Intern – Data Science & Governance",
    company: "Goldman Sachs",
    period: "Jan 2022 – July 2022",
    color: "bg-yellow-500",
    achievements: [
      "Created NLP pipeline (28% faster response time)",
      "Built compliance classification model",
      "Delivered accessibility-aware dashboards"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Key roles and achievements in data science
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-slate-300 dark:bg-slate-600"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-center md:justify-between">
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 ${experience.color} rounded-full border-4 border-white dark:border-slate-800`}></div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-5/12 md:text-right' : 'md:w-5/12'} ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                      <p className={`font-medium mb-2 ${experience.color === 'bg-primary-600' ? 'text-primary-600 dark:text-primary-400' : 
                        experience.color === 'bg-cyan-500' ? 'text-cyan-500' :
                        experience.color === 'bg-violet-500' ? 'text-violet-500' :
                        'text-yellow-600 dark:text-yellow-500'}`}>
                        {experience.company}
                      </p>
                      <p className="text-sm text-slate-500 mb-4">{experience.period}</p>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>• {achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {index % 2 === 0 && <div className="hidden md:block md:w-5/12"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
