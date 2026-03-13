<header id="header">
    <nav id="nav">
        <div class="logo">
            <li><a href="/">RT</a></li>
        </div>
        <div class="right-cluster">
            <li><a href="#Me">Me</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Experience">Experience</a></li>
        </div>
    </nav>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;

        display: flex;
        justify-content: center;

        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    nav {
        background-color: white;
        height: 4rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 2rem 0 2rem;
    }

    li {
        list-style-type: none;
    }

    .right-cluster {
        display: flex;
        gap: 2rem;
    }
</style>