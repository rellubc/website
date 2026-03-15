<footer id="footer">
    <div class="footer-details">
        <div class="contact">
            <li><a href="https://github.com/rellubc" aria-label="github"><i class="devicon-github-original"></i></a></li>
            <li><a href="https://linkedin.com/ryantran847" aria-label="linkedin"><i class="devicon-linkedin-plain"></i></a></li>
            <li><a href="mailto:ryan.tran231@gmail.com" aria-label="email"><i class="fa-regular fa-envelope"></i></a></li>
            <li><a href="/website/ryan_tran_resume.pdf" download="ryan_tran_resume" aria-label="resume"><i class="fa-regular fa-file-pdf"></i></a></li>
        </div>
        <div class="right-cluster">
            <li><a href="#Me">Me</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Experience">Experience</a></li>
        </div>
    </div>
</footer>

<style>
    i {
        font-size: 2rem;
        max-width: 2rem;
    }

    li {
        list-style-type: none;
    }
    
    footer {
        display: flex;
        justify-content: center;
    }

    .footer-details {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        padding: 2rem;
        margin: auto;

        box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.2);
    }

    .contact {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    .right-cluster {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        text-align: center;
        gap: 2rem;
    }

    @media (max-width: 640px) {
        .contact {
            grid-template-columns: repeat(2, 1fr);
        }

        .right-cluster {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>