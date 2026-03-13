<script lang="ts">
    import TechStack from "./projects/TechStack.svelte";

    const languages: string[] = ["HTML", "CSS", "C", "JavaScript", "TypeScript", "Java", "Shell", "Python", "Rust", "C++", "C#"]

    const frameworks: string[] = ["Node.js", "Express", "React", "Tailwind CSS", "Angular", "Next.js", "ASP.NET Core", "Svelte"]

    const tools: string[] = ["GitHub", "PostgreSQL", "Docker", "Jira", "Confluence", "MongoDB", "Supabase", "MySQL"]
</script>

<section id="About">
    <div class="about-main">
        <div class="about-me">
            <h2>Computer Science Graduate. Aspiring Software Engineer</h2>
            <p>I have a strong interest in full stack development with a focus on backend development.</p>
            <p>I love exercising in all forms, particularly calisthenics, bouldering and tennis. I also enjoy being surrounded by nature.</p>
            <div class="about-me-images">
                <img src="/website/kiama.jpg" alt="kiama lighthouse"/>
                <img src="/website/sun.jpg" alt="sydney sunset"/>
                <img src="/website/struggle.png" alt="bouldering"/>
            </div>
            <p>I love learning and working with new technologies. Some technologies I have used so far:</p>
        </div>
        <div class="tech">
            <TechStack techStack={languages} />
            <TechStack techStack={frameworks} />
            <TechStack techStack={tools} />
        </div>
    </div>
</section>

<style>
    section {
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    .about-me {
        width: 100%;
        display: flex;
        flex-direction: column;

        p {
            font-size: large;
            margin-top: 0;
        }
    }

    .about-me-images {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;

        padding-bottom: 1rem;

        img {
            width: 15rem;
        }
    }

    .tech {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
</style>