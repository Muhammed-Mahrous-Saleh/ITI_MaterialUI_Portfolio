import "./App.css";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

function App() {
    const projects = [
        {
            title: "Project One",
            description: "This is a description of project one.",
            image: "https://via.placeholder.com/400",
            date: "2023-01-01",
        },
        {
            title: "Project Two",
            description: "This is a description of project two.",
            image: "https://via.placeholder.com/400",
            date: "2023-02-01",
        },

        {
            title: "Project Three",
            description: "This is a description of project three.",
            image: "https://via.placeholder.com/400",
            date: "2023-03-01",
        },
        {
            title: "Project Four",
            description: "This is a description of project four.",
            image: "https://via.placeholder.com/400",
            date: "2023-04-01",
        },
    ];
    return (
        <>
            <Landing />
            <Projects projects={projects} />
            <ContactMe />
            <Footer />
        </>
    );
}

export default App;
