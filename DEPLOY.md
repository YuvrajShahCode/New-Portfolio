# How to Deploy Your Portfolio for Free

Since your portfolio is a static site (HTML/CSS/JS), you can host it for free on several platforms. Here are the two easiest methods:

## Option 1: GitHub Pages (Recommended for Developers)
Since you already have a GitHub account, this is the best option to build your profile.

1.  **Create a Repository**:
    *   Go to [GitHub.com](https://github.com) and create a new repository (e.g., `my-portfolio`).
    *   Make sure it is **Public**.
    *   Check "Initialize with a README" (optional).

2.  **Upload Files**:
    *   Open your new repository.
    *   Click **Add file** > **Upload files**.
    *   Drag and drop your `index.html` and `profile.jpg`.
    *   (If you are using the separate CSS/JS files, upload `style.css`, `script.js`, and `three-bg.js` too. If you are using the single-file `index.html` I created, you only need that and the image).
    *   Click **Commit changes**.

3.  **Activate Pages**:
    *   Go to the repository **Settings**.
    *   Click **Pages** in the left sidebar.
    *   Under **Build and deployment** > **Branch**, select `main` (or `master`) and `/ (root)`.
    *   Click **Save**.

4.  **Done!**
    *   Wait a minute or two. GitHub will give you a link (e.g., `https://yourusername.github.io/my-portfolio/`).

## Option 2: Netlify (Easiest / No Code)
Perfect if you just want it online instantly without using Git.

1.  Go to [Netlify.com](https://www.netlify.com/) and sign up (you can use your GitHub account).
2.  Once logged in, you will see a box that says **"Drag and drop your site output folder here"**.
3.  Put your `index.html` and `profile.jpg` into a folder on your computer (if they aren't already isolated).
4.  Drag that folder onto the Netlify page.
5.  **Done!** Netlify will give you a random URL (e.g., `https://cool-site-123.netlify.app`). You can change the site name in "Site Settings".

## Option 3: Vercel
Similar to Netlify, very fast and developer-friendly.

1.  Go to [Vercel.com](https://vercel.com/).
2.  Install the Vercel CLI (`npm i -g vercel`) OR import your GitHub repository.
3.  Follow the prompts to deploy.
