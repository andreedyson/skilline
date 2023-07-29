import {google, netflix, airbnb, amazon, facebook, grab, grid, front, users, invoice, calendar, userswhite, features2, features3, features4, features5, onedrive, dropbox, drive, teams, testi1, testi2, testi3, testi1text, testi2text, testi3text, blog2, blog3, blog4, instructors, students} from '../assets/assetsData';

export const navLinks = [
    {
        id: "home",
        title: "Home"
    }, 
    {
        id: "careers",
        title: "Careers"
    },
    {
        id: "about",
        title: "About Us"
    },
    {
        id: "blog",
        title: "Blog"
    }
];

export const companies = [
    {
        id: "google",
        img: google
    },
    {
        id: "netflix",
        img: netflix
    },
    {
        id: "airbnb",
        img: airbnb
    },
    {
        id: "amazon",
        img: amazon
    },
    {
        id: "facebook",
        img: facebook
    },
    {
        id: "grab",
        img: grab
    }
];

export const customers = [
    {
        id: "instructors",
        name: "For Instructors",
        img: instructors,
        button: "Start a class today"
    },
    {
        id: "students",
        name: "For Students",
        img: students,
        button: "Enter access code"
    }
];

export const benefits = [
    {
        id: "benefit1",
        icon: invoice,
        title: "Online Billing, Invoicing, & Contracts",
        description: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
    },
    {
        id: "benefit2",
        icon: calendar,
        title: "Easy Scheduling & Attendance Tracking",
        description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
    },
    {
        id: "benefit3",
        icon: userswhite,
        title: "Customer Tracking",
        description: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
    }
];

export const featuresList = [
    {
        id: "list1",
        icon: grid,
        content: "Teachers don’t get lost in the grid view and have a dedicated Podium space."
    },
    {
        id: "list2",
        icon: front,
        content: "TA’s and presenters can be moved to the front of the class."
    },
    {
        id: "list3",
        icon: users,
        content: "Teachers can easily see all students and class data at one time."
    }
];

export const features = [
    {
        id: "features2",
        title: "Tools For Teachers And Learners",
        description: "Class has a dynamic set of teaching tools built to be deployed and used during class.Teachers can handout assignments in real-time for students to complete and submit.",
        img: features2
    },
    {
        id: "features3",
        title: "Assessments, Quizzes, Tests",
        description: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
        img: features3
    },
    {
        id: "features4",
        title: "Class Management Tools for Educators",
        description: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
        img: features4
    },
    {
        id: "features5",
        title: "One-on-One Discussions",
        description: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
        img: features5
    }
];

export const integrations = [
    {
        id: "onedrive",
        img: onedrive
    },
    {
        id: "dropbox",
        img: dropbox
    },
    {
        id: "drive",
        img: drive
    },
    {
        id: "teams",
        img: teams
    }
];

export const testimonals = [
    {
        id: "testi1",
        img: testi1,
        text: testi1text
    },
    {
        id: "testi2",
        img: testi2,
        text: testi2text
    },
    {
        id: "testi3",
        img: testi3,
        text: testi3text
    }
];

export const blogsSmall = [
    {
        img: blog2,
        type: "Press Release",
        title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
        description: "Class Technologies Inc., the company that created Class,..."
    },
    {
        img: blog3,
        type: "News",
        title: "Zoom’s earliest investors are betting millions on a better Zoom for schools",
        description: "Zoom was never created to be a consumer product. Nonetheless, the..."
    },
    {
        img: blog4,
        type: "News",
        title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
        description: "This year, investors have reaped big financial returns from betting on Zoom..."
    }
]
            