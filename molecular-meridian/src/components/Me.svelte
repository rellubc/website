<section id="Me">
    <div class="me-main">
        <div class="me-intro">
            <div class="me-intro-name">
                <h1>Hi! <span class="wave">&#128075;</span> I'm</h1>
                <h1 class="name">Ryan <span class="smile">&#128522;</span></h1>
            </div>
            <div class="me-intro-image">
                <img src="/website/me.jpg" alt="ryan tran" />
            </div>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
    }

    .me-main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .me-intro {
        width: 100%;
        max-height: 70vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8rem;

        margin-top: 10%;
        margin-bottom: 35%;

        h1 {
            margin: 0;
        }
    }

    .me-intro-name {
        display: flex;
        flex-direction: column;
    }

    .wave {
        display: inline-block;
        animation: rotate 0.5s ease-in-out infinite;
    }
    
    .name {
        font-size: 4rem;
    }

    .smile {
        display: inline-block;
        animation: bounce 2s infinite;
    }

    .me-intro-image {
        width: min(25rem, 100%);
        aspect-ratio: 1 / 1;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #ddd;
        border-radius: 100%;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }

    @media (max-width: 1000px) {
        .me-intro {
            flex-direction: column;
            gap: 2rem;
        }
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @keyframes rotate {
        0%, 100% {
            transform: rotate(5deg);
        }
        50% {
            transform: rotate(-5deg);
        }
    }
</style>