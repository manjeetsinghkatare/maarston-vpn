# 🛡️ MaarstOn VPN — Official Web Portal & Windows Client

A minimalist, high-speed, and secure VPN platform engineered with Apple & Samsung-inspired monochromatic aesthetics. Bundles a direct **Windows 10/11 Desktop Client Setup Installer (.EXE)** and is pre-configured for 1-click global deployment to **Vercel** and **GitHub**.

---

## 🚀 Key Features

* **Monochromatic Minimalist Web Portal:** Built with clean blacks, pure whites, and titanium grays with soft radial glows. Supports persistent Dark and Light modes.
* **Official Windows Desktop Setup (.EXE):**
  * Direct NSIS setup installer (`downloads/MaarstOn-VPN-Desktop-1.0.0-setup-x64.exe`).
  * 693 verified high-speed nodes across 42 countries pre-bundled.
  * Kernel-level TUN/TAP OpenVPN network interface for 100% full PC system traffic routing.
  * 10-second connection timeout watchdog & automatic node failover.
  * System tray background protection with minimal memory footprint (~60 MB RAM).
* **Worldwide High-Speed Coverage:** Clean regional showcase featuring official SVG flag icons across 42 countries (USA, Canada, Germany, Singapore, Japan, UK, France, etc.).
* **1-Click Vercel & GitHub Ready:** Includes `vercel.json` with security headers for instant CDN deployment.

---

## 📁 Repository Structure

```
maarston-vpn/
├── assets/
│   ├── flags/                    # Crisp SVG country flag graphics (41+ countries)
│   ├── icon.ico                  # Multi-resolution Windows app icon
│   └── logo.png                  # High-resolution 3D isometric emblem logo
├── downloads/
│   └── MaarstOn-VPN-Desktop-1.0.0-setup-x64.exe  # Official Windows 10/11 Setup Installer
├── index.html                    # Official Web Portal Landing Page
├── style.css                     # Minimalist Monochromatic Theme CSS (Dark & Light)
├── app.js                        # Theme Switcher & Smooth Navigation Controller
├── servers.json                  # 693 Verified Online Nodes Database
├── vercel.json                   # Vercel CDN deployment configuration
└── package.json                  # Web project manifest
```

---

## ⚡ How to Run Locally

To test the website locally:
1. Open PowerShell or Terminal in the `maarston-vpn` folder.
2. Run:
   ```bash
   npx serve .
   ```
3. Open `http://localhost:3000` in your browser.

Or simply double-click `index.html` to view it in Chrome, Edge, or Brave!

---

## 🌐 How to Deploy to GitHub & Vercel

### Step 1: Upload to GitHub
1. Create a new repository on [github.com](https://github.com) named `maarston-vpn`.
2. In PowerShell / Terminal inside `maarston-vpn/`, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of MaarstOn VPN official portal and client"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/maarston-vpn.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (Free 1-Click Hosting)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** → **"Import Git Repository"**.
3. Select your `maarston-vpn` repository.
4. Leave all settings at default (Framework: Other, Root Directory: `./`).
5. Click **"Deploy"**!
6. In ~15 seconds, your website will be live globally at `https://maarston-vpn.vercel.app` (or your custom domain).

---

## ⚖️ License
MIT License. © 2026 MaarstOn VPN Team.
