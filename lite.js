document.addEventListener("DOMContentLoaded", async function () {
    try {
        const skillsResponse = await fetch("data/skills.json");
        const skillsData = await skillsResponse.json();
        document.getElementById("skills-content").innerHTML = createSkillsHTML(skillsData);

        const workResponse = await fetch("data/experience.json");
        const workData = await workResponse.json();
        document.getElementById("experience-content").innerHTML = createWorkExperienceHTML(workData);

        const educationResponse = await fetch("data/education.json");
        const educationData = await educationResponse.json();
        document.getElementById("education-content").innerHTML = createEducationHTML(educationData);

        const projectsResponse = await fetch("data/projects.json");
        const projectsData = await projectsResponse.json();
        document.getElementById("projects-content").innerHTML = createProjectsHTML(projectsData);

        const certificationsResponse = await fetch("data/certification.json");
        const certificationsData = await certificationsResponse.json();
        document.getElementById("certifications-content").innerHTML = createCertificationsHTML(certificationsData);
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
});

// Function to create a more compact Skills section (removing Productivity & Office Tools, Operating Systems)
function createSkillsHTML(data) {
    return `
        <h3>Programming Languages</h3>
        <ul>${data.programmingLanguages.map(lang => `<li>${lang}</li>`).join("")}</ul>

        <h3>Frameworks & Tools</h3>
        <ul>${data.frameworksAndTools.map(tool => `<li>${tool}</li>`).join("")}</ul>

        <h3>Development Tools</h3>
        <ul>${data.developmentTools.map(tool => `<li>${tool}</li>`).join("")}</ul>

        <h3>Hardware & Embedded Systems</h3>
        <ul>${data.hardwareAndEmbeddedSystems.map(system => `<li>${system}</li>`).join("")}</ul>
    `;
}

// Function to limit work experience to the most recent 3 jobs
function createWorkExperienceHTML(data) {
    return data.jobs.slice(0, 3).map(job => `
        <div class="job">
            <h3>${job.position} - ${job.company}</h3>
            <p><strong>${job.type}</strong> | ${job.date}</p>
            <ul>
                ${job.description.map(point => `<li>${point}</li>`).join("")}
            </ul>
        </div>
    `).join("");
}

// Function to display all education details
function createEducationHTML(data) {
    return `<ul>${data.map(edu => `
        <li>
            <strong>${edu.degree}</strong> - ${edu.institution} (${edu.date})<br>
            ${edu.cgpa}
        </li>`).join("")}
    </ul>`;
}

// Function to limit the number of displayed projects to 5
function createProjectsHTML(data) {
    return data.slice(0, 5).map(project => `
        <div class="project">
            <h3>${project.name} <span>${project.Date}</span></h3>
            <p>${project.description}</p>
            <ul>${project.tools_used.map(tool => `<li>${tool}</li>`).join("")}</ul>
        </div>
    `).join("");
}

// Function to limit certifications to the most recent 3
function createCertificationsHTML(data) {
    return data.slice(0, 3).map(cert => `<p>${cert.name} - ${cert.date}</p>`).join("");
}
