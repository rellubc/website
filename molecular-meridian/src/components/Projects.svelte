<script>
  import Project from "./projects/Project.svelte";

</script>

<section id="Projects">
    <h2>Projects</h2>
    <div class="projects-listings">
        <Project 
            title="Sydney Transport Realtime Tracker"
            descriptions={[
                "A real time tracker for the Sydney Trains and Sydney Metro networks, including real time stopping patterns, schedules and occupancies for both vehicles and stations.", 
                "Inspired by my interest in Sydney's public transport network."
            ]}
            period="January 2026 - Present"
            techStack={["Angular", "ASP.NET Core", "MySQL"]}
            shortName="transport"
            images=1
        />
        <Project 
            title="Baked By Dora: Bakery & Cafe"
            descriptions={[
                "A full stack web application for Baked By Dora, featuring a menu page and an online ordering system through email orders.",
                "To be officially launched."
            ]}
            roles="Full Stack Lead"
            period="December 2025 - Present"
            techStack={["Next.js", "Supabase", "Tailwind CSS"]}
            shortName="bbd"
            images=1
        />
        <Project 
            title="EcoM Dashboard"
            descriptions={[
                "An ESG dashboard web application assisting businesses and investors in exploring, monitoring and reporting ESG metrics.",
                "Completed as part of the capstone project for my degree."
            ]}
            roles="Scrum Master | Frontend Lead"
            period="September 2024 - November 2024"
            techStack={["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"]}
            shortName="ecom"
            images=4
        />
        <Project
            title="When2Eat"
            descriptions={[
                "A full stack web application for users to organise group meals with dining times and establishments based on user availability.",
                "Completed as part of the UNSW DevSoc Training Program."
            ]}
            roles="Training Lead"
            period="July 2025 - September 2025"
            techStack={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
            shortName="w2e"
            images=1
        />
        <Project
            title="Website Portfolio"
            descriptions={[
                "This site here, made to showcase projects I have undertaken using various technologies.",
                "Static site deployed to GitHub Pages."
            ]}
            period="March 2026"
            techStack={["HTML", "CSS", "Svelte"]}
            shortName="website"
            images=1
        />
    </div>
</section>

<style>
    .projects-listings {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 30vh;
    }
</style>
