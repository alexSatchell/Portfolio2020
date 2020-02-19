const alex = {
    schoolYear: 'Junior', 
    skills: ['Javascript', "Python", 'HTML 5', 'CSS & SASS', 'Java', 'SQL', 'Sheer desire to learn'],
    wantsToLearn: ['More Python', 'Node.JS', 'JS Frameworks'],
    hobbies: ['Piano', 'Reading', 'Baking'],
    interestedIn: {
        job: 'Software Developer',
        role: ['Font-End', 'Back-End', 'Full-Stack'],
        perks: ['Mentorship', 'Full Time Employment'],
    }
};

const hireIntern = (canidate) => {
    canidate.schoolYear === 'Junior' &&
    canidate.skills.includes('Sheer desire to learn') ? hire() : next();
}

hireIntern(alex);