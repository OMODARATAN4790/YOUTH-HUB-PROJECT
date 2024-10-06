// Profile Form Handling
document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const business = document.getElementById('business').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;

    const profileData = `
        <h3>Profile</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills/Needs:</strong> ${skills}</p>
    `;

    document.getElementById('profileOutput').innerHTML = profileData;
});

// Display Mentors
const mentors = [
    { name: "John Doe", expertise: "Marketing and Business Strategy" },
    { name: "Jane Smith", expertise: "Financial Planning and Startups" }
];

function displayMentors() {
    const mentorList = document.querySelector('.mentor-list');
    mentorList.innerHTML = mentors.map(mentor => `
        <div class="mentor">
            <h3>${mentor.name}</h3>
            <p>Expertise: ${mentor.expertise}</p>
            <button onclick="connect('${mentor.name}')">Connect</button>
        </div>
    `).join('');
}

function connect(name) {
    alert(`You have connected with ${name}`);
}

displayMentors();

// Funding Opportunities (Example Data)
const fundingOpportunities = [
    { name: "Startup Fund A", description: "Funding for tech startups." },
    { name: "Small Business Grant B", description: "Grants for small business owners." }
];

function displayFunding() {
    const fundingList = document.getElementById('fundingList');
    fundingList.innerHTML = fundingOpportunities.map(funding => `
        <li><strong>${funding.name}:</strong> ${funding.description}</li>
    `).join('');
}

displayFunding();
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address');
    } else {
        emailInput.setCustomValidity('');
    }
});
document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const business = document.getElementById('business').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;

    const profile = { name, business, email, skills };
    localStorage.setItem('userProfile', JSON.stringify(profile));

    const profileData = `
        <h3>Profile</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills/Needs:</strong> ${skills}</p>
    `;

    document.getElementById('profileOutput').innerHTML = profileData;
});

// Load the profile on page load if available
window.onload = function() {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
        const profile = JSON.parse(storedProfile);
        const profileData = `
            <h3>Profile</h3>
            <p><strong>Name:</strong> ${profile.name}</p>
            <p><strong>Business:</strong> ${profile.business}</p>
            <p><strong>Email:</strong> ${profile.email}</p>
            <p><strong>Skills/Needs:</strong> ${profile.skills}</p>
        `;
        document.getElementById('profileOutput').innerHTML = profileData;
    }
};
