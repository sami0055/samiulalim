# Md. Samiul Alim - Academic Portfolio

A professional academic portfolio website for PhD applicants, designed with a clean, modern dark theme.

## 🌐 Live Demo

Visit: `https://[your-github-username].github.io/`

## 📁 Project Structure

```
Academic Portfolio/
├── index.html          # Home page with bio and recent news
├── experience.html     # Research, teaching, and education
├── publications.html   # List of publications
├── services.html       # Services, outreach, and awards
├── contact.html        # Contact information
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # JavaScript for mobile navigation
├── images/
│   └── profile.jpg     # Add your profile photo here
└── README.md
```

## 🚀 How to Host on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the **+** icon in the top right and select **New repository**
3. Name the repository: `[your-username].github.io` (e.g., `samiulalim.github.io`)
   - This naming convention automatically enables GitHub Pages
4. Make sure the repository is **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. In your new repository, click **uploading an existing file**
2. Drag and drop all files from this folder
3. Click **Commit changes**

**Option B: Using Git Command Line**
```bash
# Navigate to your portfolio folder
cd "E:\Academic Portfolio"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio upload"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/[your-username]/[your-username].github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages (if not using username.github.io)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait a few minutes for deployment

### Step 4: Access Your Site

Your portfolio will be live at: `https://[your-username].github.io/`

## ✏️ Customizing Your Portfolio

### Update Personal Information

1. **index.html** - Update your name, bio, research interests, and news items
2. **experience.html** - Add your research and teaching experience
3. **publications.html** - Add your publications
4. **services.html** - Update reviewer roles, awards, etc.
5. **contact.html** - Update email and social media links

### Add Your Profile Photo

1. Add your photo to the `images/` folder as `profile.jpg`
2. Recommended size: 280x330 pixels
3. The page will automatically use it

### Change Colors

Edit `css/styles.css`:
- Primary color (orange): Search for `#ffa500`
- Background color: Search for `#1a1a2e`
- Navigation background: Search for `#16213e`

## 📧 Need Help?

Feel free to open an issue on this repository if you encounter any problems.

## 📄 License

This portfolio template is free to use for personal academic websites.
