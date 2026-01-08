# Rock Paper Scissors Game

A modern, interactive Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript. Challenge the computer to a best-of-5 match with a sleek, animated interface.

![Game Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Features

- **Modern UI Design**: Clean, responsive interface with smooth animations and transitions
- **Real-time Score Tracking**: Live scoreboard showing player vs CPU scores
- **Visual Feedback**: Animated weapon choices and round results
- **Choice Display**: See both your choice and the CPU's choice after each round
- **Game Reset**: Easily reset the game and start a new match
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Animations**:
  - Slide-down header animation
  - Pop-in weapon button animations
  - Pulse effect on feedback messages
  - Hover effects on interactive elements
- **Best of 5 Rounds**: First to reach 5 wins takes the match

## How to Play

1. Choose your weapon by clicking one of the three buttons:
   - Rock
   - Paper
   - Scissors

2. The CPU will randomly choose its weapon

3. The winner of each round is determined by classic rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock

4. First player to reach 5 wins becomes the champion

5. Click the "Reset Game" button to start a new match

## Installation

### Clone the Repository

```bash
git clone https://github.com/jperez331/RPS-Game.git
cd RPS-Game
```

### Run Locally

Simply open the `index.html` file in your web browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Project Structure

```
RPS-Game/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── rpsLogic.js         # Game logic and functionality
├── img/                # Image assets
│   ├── Rock.png
│   ├── paper.png
│   └── scissors.png
└── README.md           # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**:
  - CSS Variables for theming
  - Flexbox for layouts
  - CSS Grid
  - Keyframe animations
  - Media queries for responsive design
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Game state management
- **Font Awesome**: Icons for social media links
- **Google Fonts**: Roboto Mono and Montserrat Alternates

## Color Palette

The game uses a modern green color scheme:

- `--green1: #04401e` - Dark green (backgrounds)
- `--green2: #045929` - Medium dark green
- `--green3: #048c3f` - Medium green (accents)
- `--green4: #0cf287` - Bright green (text highlights)
- `--green5: #06bf69` - Light green (borders)
- `--white: #bdead5` - Off-white (primary text)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add sound effects for button clicks and round results
- [ ] Implement different difficulty levels for CPU
- [ ] Add game statistics (win rate, total games played)
- [ ] Include additional game modes (best of 3, best of 7)
- [ ] Add player name customization
- [ ] Implement Rock-Paper-Scissors-Lizard-Spock variant
- [ ] Add animation for weapon battle sequence
- [ ] Include dark/light theme toggle
- [ ] Add multiplayer mode (local or online)

## Contributing

Contributions are welcome! If you'd like to improve the game:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Cloggy Labs**

- GitHub: [@cloggy](https://github.com/cloggylabs)
- LinkedIn: [jperez331](https://www.linkedin.com/in/jperez331/)

## Acknowledgments

- Thanks to The Odin Project for project inspiration
- Font Awesome for icon library
- Google Fonts for typography

---

Made with ❤️ by cloggy | 2022

**Enjoy the game and may the best player win!**
