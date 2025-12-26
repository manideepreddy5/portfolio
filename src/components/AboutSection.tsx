export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-background"
    >
      <div className="section-container">
        <div
          className="
            max-w-5.5xl mx-auto
            border border-border
            border-t-4 border-t-primary
            rounded-2xl
            bg-card
            px-8 sm:px-12 lg:px-16
            py-10
            shadow-sm
            transition-all duration-300
            hover:shadow-md
          "
        >
          {/* TITLE */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              About Me
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Who I am and how I work with data
            </p>

            {/* Accent line */}
            <div className="mt-4 flex justify-center">
              <span className="h-1 w-16 rounded-full bg-primary/70"></span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-primary font-semibold">
                data analyst
              </span>{" "}
              passionate about transforming raw data into meaningful insights
              that support informed decision-making and sustainable business
              growth.
            </p>

            <p>
              I work extensively with Python, SQL, Power BI, and Excel to
              analyze, clean, and visualize data from diverse sources. My
              analytical approach includes data preprocessing, exploratory data
              analysis, and identifying meaningful trends and patterns within
              datasets.
            </p>

            <p>
              I enjoy converting complex analytical findings into clear
              dashboards and reports that are easy to understand for both
              technical and non-technical stakeholders. I place strong emphasis
              on data accuracy, logical reasoning, and practical relevance.
            </p>

            <p>
              I am seeking an{" "}
              <span className="text-primary font-semibold">
                entry-level Data Analyst
              </span>{" "}
              role where I can contribute to data-driven initiatives,
              collaborate with experienced professionals, and continue building
              strong analytical expertise in a real-world business environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
