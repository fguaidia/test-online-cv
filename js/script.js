// Definir el objeto JSON dentro del archivo JavaScript
const data = {
    "profile": {
      "name": "Fabio Andrés Guaidia Ruiz",
      "role": "Software Engineer",
      "email": "fabio.a.guaidia@gmail.com",
      "phone": "+573213187473",
      "linkedin": "https://www.linkedin.com/in/fabioguaidia/"
    },
    "summary": "Experienced software engineer with 6 years of experience in various industries, including banking and e-commerce. Strong understanding of back-end technologies. Demonstrated ability to deliver high-quality software solutions.",
    "skills": ["Java", "Spring Boot", "AWS (Amazon Web Services)"],
    "work_experience": [
      {
        "role": "Software Engineer",
        "company": "Mercado Libre",
        "period": "Apr 2021 – Apr 2022",
        "description": "Technologies: Java • Spring Boot • AWS • Guice • Web applications spring/spark",
        "achievements": [
          "Led the design and implementation of scalable microservices using Spring Boot and Spark.",
          "Developed comprehensive manual and automated testing strategies.",
          "Collaborated with cross-functional international teams to deliver cutting-edge features."
        ]
      },
      {
        "role": "Software Engineer",
        "company": "Banco de Bogotá",
        "period": "Aug 2017 – Mar 2021",
        "description": "Technologies: Java • Node.js • Angular • Spring Boot • AWS",
        "achievements": [
          "Designed and developed microservices for the Digital Personal Loan project.",
          "Spearheaded CI/CD pipeline integrations with CircleCi and Terraform.",
          "Utilized AWS for robust and scalable solutions."
        ]
      }
    ],
    "education": {
      "degree": "Bachelor's degree: Systems Engineering",
      "institution": "Fundación Universitaria Juan de Castellanos",
      "location": "Tunja, Colombia",
      "duration": "Jan 2009 – Dec 2013"
    },
    "languages": {
      "spanish": "Native or bilingual proficiency",
      "english": "Professional working proficiency"
    }
  };
  
  // Función para poblar los datos en la página
  function populateData(data) {
      // Poblar la sección de perfil
      document.querySelector('h1').textContent = data.profile.name;
      document.querySelector('.text-base').textContent = data.profile.role;
      document.querySelector('.text-xl').innerHTML = `${data.profile.email} • ${data.profile.phone}<br><a href="${data.profile.linkedin}" class="text-indigo-600 hover:text-indigo-500">LinkedIn Profile</a>`;
  
      // Poblar la sección de resumen
      document.querySelector('.summary').textContent = data.summary;
  
      // Poblar la sección de habilidades
      document.querySelector('.skills').textContent = data.skills.join(' • ');
  
      // Poblar la experiencia laboral
      const workExperienceContainer = document.querySelector('.work-experience');
      data.work_experience.forEach(job => {
          const jobElement = document.createElement('li');
          jobElement.innerHTML = `
              <h3 class="font-semibold text-gray-900">${job.role} at ${job.company}</h3>
              <p class="text-sm">${job.period}</p>
              <p>${job.description}</p>
              <ul class="mt-2 space-y-2 list-disc list-inside">
                  ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
              </ul>
          `;
          workExperienceContainer.appendChild(jobElement);
      });
  
      // Poblar la educación
      const educationElement = document.querySelector('.education');
      educationElement.innerHTML = `
          <p class="text-gray-700">
              <span class="font-semibold">${data.education.degree}</span><br>
              ${data.education.institution}<br>
              ${data.education.location}<br>
              ${data.education.duration}
          </p>
      `;
  
      // Poblar la sección de idiomas
      const languagesElement = document.querySelector('.languages');
      languagesElement.innerHTML = `
          <p class="text-gray-700">
              Spanish (${data.languages.spanish})<br>
              English (${data.languages.english})
          </p>
      `;
  }
  
  // Llamar a la función para poblar los datos
  populateData(data);
  