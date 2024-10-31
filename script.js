function toggleCaseStudy(caseId) {
    const caseStudy = document.getElementById(caseId);
    if (caseStudy.style.display === "none") {
        caseStudy.style.display = "block";
    } else {
        caseStudy.style.display = "none";
    }
}
