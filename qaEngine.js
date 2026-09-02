/**
 * Abstracted Q&A Engine for Project Knowledge
 * Designed to provide local verified answers and seamlessly integrate
 * with an AI/LLM API route in the future.
 */

export function answerProjectQuestion(project, userQuestion) {
  if (!project || !userQuestion) return null;

  const normalizedQuery = userQuestion.trim().toLowerCase();

  // 1. Check exact or high-confidence match in predefined FAQ
  if (project.faq && Array.isArray(project.faq)) {
    const faqMatch = project.faq.find(
      (item) => item.q.toLowerCase() === normalizedQuery
    );
    if (faqMatch) {
      return {
        answer: faqMatch.a,
        source: "Verified Project Knowledge Base",
        confidence: "High"
      };
    }

    // Partial keyword match against FAQ questions
    const fuzzyMatch = project.faq.find((item) => {
      const qWords = item.q.toLowerCase().split(/\s+/);
      const queryWords = normalizedQuery.split(/\s+/).filter((w) => w.length > 3);
      return queryWords.some((qw) => qWords.includes(qw));
    });

    if (fuzzyMatch) {
      return {
        answer: fuzzyMatch.a,
        source: "Project Knowledge Base",
        confidence: "Medium"
      };
    }
  }

  // 2. Keyword analysis across project fields
  if (normalizedQuery.includes("tech") || normalizedQuery.includes("stack") || normalizedQuery.includes("language")) {
    return {
      answer: `The ${project.title} project is built using: ${project.technologies.join(", ")}.`,
      source: "Project Technical Specs",
      confidence: "High"
    };
  }

  if (normalizedQuery.includes("problem") || normalizedQuery.includes("why")) {
    return {
      answer: project.problem,
      source: "Project Problem Statement",
      confidence: "High"
    };
  }

  if (normalizedQuery.includes("solution") || normalizedQuery.includes("how")) {
    return {
      answer: project.solution || project.overview,
      source: "Project Architecture",
      confidence: "High"
    };
  }

  if (normalizedQuery.includes("learn") || normalizedQuery.includes("challenge")) {
    return {
      answer: project.learning,
      source: "Developer Post-Mortem",
      confidence: "High"
    };
  }

  if (normalizedQuery.includes("feature")) {
    return {
      answer: `Key features include: ${project.features.join("; ")}.`,
      source: "Project Feature Specification",
      confidence: "High"
    };
  }

  // 3. Fallback response based on project documentation
  return {
    answer: `Regarding ${project.title}: ${project.overview} Key technologies utilized include ${project.technologies.join(", ")}. (Note: An AI LLM endpoint can be connected here for open-ended queries).`,
    source: "Project Summary",
    confidence: "Standard"
  };
}
