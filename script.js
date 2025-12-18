// Sample data for our resources with tags
const events = [
    {
        title: "Women Techmakers Summit",
        date: "October 15, 2023",
        description: "Annual conference for women in technology featuring keynote speakers, workshops, and networking opportunities.",
        link: "#",
        type: "event"
    },
    {
        title: "Girls Who Code Hackathon",
        date: "November 5-6, 2023",
        description: "A 24-hour hackathon focused on building projects that address social issues.",
        link: "#",
        type: "event"
    },
    {
        title: "Women in AI Conference",
        date: "December 2, 2023",
        description: "Exploring the role of women in artificial intelligence and machine learning.",
        link: "#",
        type: "event"
    }
];

const scholarships = [
    {
        title: "Adobe Women in Technology Scholarship",
        deadline: "December 31, 2023",
        amount: "$10,000",
        description: "Scholarship for female students pursuing computer science or related technical fields.",
        link: "#",
        type: "scholarship"
    },
    {
        title: "Google Women Techmakers Scholarship",
        deadline: "January 15, 2024",
        amount: "$10,000",
        description: "Financial assistance and community support for women in technology.",
        link: "#",
        type: "scholarship"
    },
    {
        title: "Microsoft Women's Scholarship Program",
        deadline: "February 1, 2024",
        amount: "$5,000",
        description: "Supporting women pursuing careers in technology.",
        link: "#",
        type: "scholarship"
    }
];

const mentorshipPrograms = [
    {
        title: "Women Who Code Mentorship",
        duration: "6 months",
        description: "One-on-one mentorship pairing experienced tech professionals with those early in their careers.",
        link: "#",
        type: "mentorship"
    },
    {
        title: "Girls in Tech Mentorship",
        duration: "3 months",
        description: "Group mentorship program focusing on specific tech skills and career development.",
        link: "#",
        type: "mentorship"
    },
    {
        title: "AnitaB.org Mentorship",
        duration: "1 year",
        description: "Comprehensive mentorship program with a focus on leadership development.",
        link: "#",
        type: "mentorship"
    }
];

const resources = [
    {
        title: "How to Negotiate Your Tech Salary",
        source: "TechCrunch",
        link: "#"
    },
    {
        title: "Imposter Syndrome in Tech",
        source: "Medium",
        link: "#"
    },
    {
        title: "Building Your Personal Brand",
        source: "Forbes",
        link: "#"
    },
    {
        title: "Women in Tech Statistics 2023",
        source: "Women Who Code",
        link: "#"
    },
    {
        title: "Career Switching into Tech",
        source: "LinkedIn Learning",
        link: "#"
    },
    {
        title: "Safe Tech Communities for Women",
        source: "CodeLikeAGirl",
        link: "#"
    }
];

// Affirmations data
const affirmations = [
    "I am capable of solving complex problems",
    "My voice and ideas matter in tech",
    "I belong in the technology industry",
    "I am constantly growing my skills",
    "My unique perspective adds value to every project",
    "I overcome challenges with creativity and resilience",
    "I support and uplift other women in tech",
    "My technical abilities are strong and growing",
    "I am a leader in my field",
    "I deserve success and recognition",
    "I learn from my mistakes and grow stronger",
    "I am confident in my ability to code and create",
    "I attract opportunities that align with my goals",
    "My contributions to technology make a difference",
    "I am resilient in the face of challenges"
];

// SVG icons for our details
const calendarIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>';
const deadlineIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>';
const dollarIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>';
const durationIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 17.97 22 15.05 22 12c0-5.18-3.95-9.45-9-9.95zM11 2c-1.95.2-3.8.96-5.32 2.21L7.1 5.63C8.23 4.75 9.58 4.15 11 4v.05v-2zm-7 7c-.26 1.15-.41 2.3-.41 3.41C3.62 16.57 7.07 20 11.5 20c.43 0 .86-.03 1.28-.09l1.56 1.56c-1.15.26-2.3.41-3.41.41C6.33 22 2 17.67 2 12c0-1.78.47-3.45 1.27-4.9L5.63 7.1C4.75 8.23 4.15 9.58 4 11H2.05v.05H2z"/></svg>';
const arrowIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>';

// Function to create cards with tags
function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    let tagClass = '';
    let detailsContent = '';
    
    if (item.type === 'event') {
        tagClass = 'event';
        detailsContent = `<div class="card-details">${calendarIcon} ${item.date}</div>`;
    } else if (item.type === 'scholarship') {
        tagClass = 'scholarship';
        detailsContent = `
            <div class="card-details deadline">${deadlineIcon} Deadline: ${item.deadline}</div>
            <div class="card-details">${dollarIcon} Amount: ${item.amount}</div>
        `;
    } else if (item.type === 'mentorship') {
        tagClass = 'mentorship';
        detailsContent = `<div class="card-details duration">${durationIcon} Duration: ${item.duration}</div>`;
    }
    
    card.innerHTML = `
        <span class="card-tag ${tagClass}">${item.type}</span>
        <h3>${item.title}</h3>
        ${detailsContent}
        <p>${item.description}</p>
        <a href="${item.link}" class="card-link">Learn More ${arrowIcon}</a>
    `;
    
    return card;
}

// Function to display events
function displayEvents() {
    const eventsContainer = document.querySelector('#events .cards-container');
    
    events.forEach(event => {
        const card = createCard(event);
        eventsContainer.appendChild(card);
    });
}

// Function to display scholarships
function displayScholarships() {
    const scholarshipsContainer = document.querySelector('#scholarships .cards-container');
    
    scholarships.forEach(scholarship => {
        const card = createCard(scholarship);
        scholarshipsContainer.appendChild(card);
    });
}

// Function to display mentorship programs
function displayMentorshipPrograms() {
    const mentorshipContainer = document.querySelector('#mentorship .cards-container');
    
    mentorshipPrograms.forEach(program => {
        const card = createCard(program);
        mentorshipContainer.appendChild(card);
    });
}

// Function to create resource links
function displayResources() {
    const resourcesContainer = document.querySelector('.resources-container');
    
    resources.forEach(resource => {
        const resourceLink = document.createElement('a');
        resourceLink.classList.add('resource-link');
        resourceLink.href = resource.link;
        
        resourceLink.innerHTML = `
            <h4>${resource.title}</h4>
            <p>Source: ${resource.source}</p>
        `;
        
        resourcesContainer.appendChild(resourceLink);
    });
}

// Function to get a random affirmation
function getRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    return affirmations[randomIndex];
}

// Function to display a new affirmation
function displayNewAffirmation() {
    const affirmationElement = document.getElementById('current-affirmation');
    
    // Add fade out effect
    affirmationElement.style.opacity = 0;
    
    setTimeout(() => {
        const newAffirmation = getRandomAffirmation();
        affirmationElement.textContent = newAffirmation;
        
        // Add fade in effect
        affirmationElement.classList.remove('fade-in');
        void affirmationElement.offsetWidth; // Trigger reflow
        affirmationElement.classList.add('fade-in');
        affirmationElement.style.opacity = 1;
    }, 300);
}

// Function to set up affirmation functionality
function setupAffirmations() {
    const button = document.getElementById('new-affirmation');
    button.addEventListener('click', displayNewAffirmation);
    
    // Display initial affirmation
    displayNewAffirmation();
}

// Mobile navigation toggle
function setupMobileNav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const nav = document.querySelector('.nav-links');
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                }
            }
        });
    });
}

// Forum interaction functionality (optional)
function setupForumInteractions() {
    // Add click handlers for discussion items
    const discussionItems = document.querySelectorAll('.discussion-item');
    discussionItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('This would open the discussion thread in a real implementation. For a real forum, you would integrate with a platform like Discourse, Discord, or create a custom solution.');
        });
    });
    
    // Add click handler for forum button
    const forumButton = document.querySelector('.forum-button');
    if (forumButton) {
        forumButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This would open a registration form for forum access. In a real implementation, this would connect to your authentication system.');
        });
    }
}

// Then add this to your initialization function:
document.addEventListener('DOMContentLoaded', () => {
    // ... all your existing initialization code ...
    setupForumInteractions(); // Add this line
});

// Contact form functionality
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real implementation, you would send this data to a server
            alert(`Thank you for your message, ${name}! We'll get back to you soon at ${email}.`);
            
            // Reset form
            this.reset();
        });
    }
}

// Then add this to your initialization function:
document.addEventListener('DOMContentLoaded', () => {
    // ... all your existing initialization code ...
    setupContactForm(); // Add this line
});
// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
    displayScholarships();
    displayMentorshipPrograms();
    displayResources();
    setupMobileNav();
    setupSmoothScrolling();
    
    setupAffirmations(); // Add this line
    
    // Add animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
    });
});
