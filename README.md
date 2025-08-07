# 🎬 MovieFlix Spotlight

A sleek, modern movie search app using the [OMDb API](http://www.omdbapi.com/) — styled with a Netflix-inspired UI featuring blur effects, spotlight interactions, and responsive design.

---

## 🚀 Features

- 🔍 **Search** for movies using keywords
- 🖼️ **Responsive grid layout** for posters
- 🌫️ **Blurred background** that updates on search
- 💡 **Spotlight effect** on movie hover
- 🧊 Frosted-glass-style movie cards
- 🎨 Beautiful **Netflix-style dark theme**

---

## 🔗 OMDb API Endpoints Used

- **Search endpoint:**

  ```
  https://www.omdbapi.com/?s={SEARCH_TERM}&apikey={YOUR_API_KEY}
  ```

- *(Optional for future use)* **Detail endpoint:**

  ```
  https://www.omdbapi.com/?i={IMDB_ID}&apikey={YOUR_API_KEY}
  ```

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/movieflix-spotlight.git
cd movieflix-spotlight
```

### 2. Insert your OMDb API key

- Open `app.js`
- Replace `YOUR_API_KEY` with your actual key from [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

```javascript
const apiKey = "YOUR_API_KEY";
```

### 3. Run the app

Open the `index.html` file in any modern browser.

---

## 💡 How to Use

1. Enter a movie name in the input box (e.g., `Inception`, `Avengers`)
2. Click the **Search** button
3. Browse the results — hover to get the **spotlight effect**
4. The background will blur using the first poster result

---

## 📱 Responsive Design

| Device           | Layout         |
|------------------|----------------|
| 📱 Mobile         | 1 column       |
| 💻 Tablet/Desktop | 2–4 columns    |

---

## ❗ Challenges Faced

- Handling `"N/A"` posters with a proper placeholder
- Building a real-time **blurred background**
- Ensuring **smooth spotlight animations**
- Maintaining responsiveness across all screen sizes

---

## 🧪 Tested On

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Microsoft Edge
- ✅ Android Browser



## 👨‍💻 Author

**Dharma Selvaraj**  
GitHub: [@your-username](https://github.com/your-username)

---

## ⭐ Like the Project?

Star the repository on GitHub to show support!  
[https://github.com/your-username/movieflix-spotlight](https://github.com/your-username/movieflix-spotlight)