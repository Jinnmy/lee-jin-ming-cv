document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Fetch JSON data for various section
        /* const personalResponse = await fetch('data/personal_info.json');
        const personalData = await personalResponse.json();
        document.getElementById("personal-content").innerHTML = createPersonalHTML(personalResponse); */

        const skillsResponse = await fetch('data/skills.json');
        const skillsData = await skillsResponse.json();
        document.getElementById("skills-content").innerHTML = createSkillsHTML(skillsData);

        const workResponse = await fetch('data/experience.json');
        const workData = await workResponse.json();
        document.getElementById("experience-content").innerHTML = createWorkExperienceHTML(workData);

        const educationResponse = await fetch('data/education.json');
        const educationData = await educationResponse.json();
        document.getElementById("education-content").innerHTML = createEducationHTML(educationData);

        const projectsResponse = await fetch('data/projects.json');
        const projectsData = await projectsResponse.json();
        document.getElementById("projects-content").innerHTML = createProjectsHTML(projectsData);

        const certificationsResponse = await fetch('data/certification.json');
        const certificationsData = await certificationsResponse.json();
        document.getElementById("certifications-content").innerHTML = createCertificationsHTML(certificationsData);

        const referencesResponse = await fetch('data/references.json');
        const referencesData = await referencesResponse.json();
        document.getElementById("references-content").innerHTML = createReferencesHTML(referencesData);

    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
});

// Functions to create HTML content for each section dynamically
function createSkillsHTML(data) {
    return `
        <h3>Programming Languages</h3>
        <ul>
            ${data.programmingLanguages.map(lang => `<li>${lang}</li>`).join('')}
        </ul>
        <h3>Frameworks & Tools</h3>
        <ul>
            ${data.frameworksAndTools.map(tool => `<li>${tool}</li>`).join('')}
        </ul>
        <h3>Development Tools</h3>
        <ul>
            ${data.developmentTools.map(tool => `<li>${tool}</li>`).join('')}
        </ul>
        <h3>Hardware & Embedded Systems</h3>
        <ul>
            ${data.hardwareAndEmbeddedSystems.map(system => `<li>${system}</li>`).join('')}
        </ul>
        <h3>Productivity & Office Tools</h3>
        <ul>
            ${data.ProductivityAndOfficeTools.map(system => `<li>${system}</li>`).join('')}
        </ul>
        <h3>Operating Systems</h3>
        <ul>
            ${data.OperatingSystems.map(system => `<li>${system}</li>`).join('')}
        </ul>
    `;
}

function createWorkExperienceHTML(data) {
    return data.jobs.map(job => `
        <div class="job">
            <h3>${job.position} - ${job.company} </h3>
            <p><strong>${job.type}</strong> | ${job.date}</p>
            <ul>
                ${job.description.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function createEducationHTML(data) {
    return `
            <ul>
                ${data.map(edu => `
                    <li>
                        <strong>${edu.degree}</strong> - ${edu.institution} (${edu.date})<br>
                        ${edu.cgpa}
                    </li>
                `).join('')}
            </ul>
        
    `;
}


function createProjectsHTML(data) {
    return data.map(project => `
        <div class="project">
            <h3>${project.name} <span>${project.Date}</span></h3>
            <p>${project.description}</p> 
            <ul>
                ${project.tools_used.map(tool => `<li>${tool}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function createCertificationsHTML(data) {
    return data.map(cert => `
        <div class="certification-item">
            <h3>${cert.name}</h3>
            <p><strong>Issued by:</strong> ${cert.organization}</p>
            <p><strong>Date:</strong> ${cert.date}</p>
            <p><strong>Credential ID:</strong> ${cert.credID}</p>
            <p><strong>Verification Link:</strong> <a href="${cert.url}" target="_blank">${cert.url}</a></p>
        </div>
    `).join('');
}

function createReferencesHTML(data) {
    return `<p>${data.references}</p>`;
}

function downloadPDFlite() {
    window.location.href = "data/Lee Jin Ming CVlite.pdf"; // Replace with your PDF file path
}
function downloadPDF() {
    window.location.href = "data/Lee Jin Ming CV.pdf"; // Replace with your PDF file path
}