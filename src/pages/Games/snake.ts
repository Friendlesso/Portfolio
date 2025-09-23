export function startGame(
  boardId: string,
  instructionTextId: string,
  scoreId: string,
  highScoreId: string
) {
  const board = document.getElementById(boardId);
  const instructionText = document.getElementById(instructionTextId);
  const scoreElement = document.getElementById(scoreId);
  const highScoreElement = document.getElementById(highScoreId);

  const gridSize = 20;
  let snake: { x: number; y: number }[] = [{ x: 10, y: 10 }];
  let food = generateFood();
  let highScore = 0;
  let direction: 'up' | 'down' | 'left' | 'right' = 'right';
  let nextDirection: 'up' | 'down' | 'left' | 'right' = 'right';
  let gameInterval: number | null = null;
  let gameSpeedDelay = 200;
  let gameStarted = false;

  function draw() {
    if (!board) return;
    board.innerHTML = '';
    drawSnake();
    drawFood();
    updateScore();
  }

  function drawSnake() {
    snake.forEach((segment) => {
      const snakeElement = document.createElement('div');
      snakeElement.className = 'snake';
      snakeElement.style.gridColumn = segment.x.toString();
      snakeElement.style.gridRow = segment.y.toString();
      snakeElement.style.backgroundColor = 'black';
      board?.appendChild(snakeElement);
    });
  }

  function drawFood() {
    const foodElement = document.createElement('div');
    foodElement.className = 'food';
    foodElement.style.gridColumn = food.x.toString();
    foodElement.style.gridRow = food.y.toString();
    foodElement.style.backgroundColor = 'white';
    board?.appendChild(foodElement);
  }

  function generateFood() {
    let x: number, y: number, collision: boolean;
    do {
      x = Math.floor(Math.random() * gridSize) + 1;
      y = Math.floor(Math.random() * gridSize) + 1;
      collision = snake.some((s) => s.x === x && s.y === y);
    } while (collision);
    return { x, y };
  }

  function move() {
    direction = nextDirection;
    const head = { ...snake[0] };
    switch (direction) {
      case 'up': head.y--; break;
      case 'down': head.y++; break;
      case 'left': head.x--; break;
      case 'right': head.x++; break;
    }

    if (checkCollision(head)) return;

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      food = generateFood();
      increaseSpeed();
    } else {
      snake.pop();
    }

    draw();
  }

  function gameLoop() {
    move();
  }

  function beginGame() {
    if (gameStarted) return;

    stopGame(); // clear any old interval

    snake = [{ x: 10, y: 10 }];
    food = generateFood();
    direction = 'right';
    nextDirection = 'right';
    gameSpeedDelay = 200;
    gameStarted = true;

    if (instructionText) instructionText.style.display = 'none';

    gameInterval = window.setInterval(gameLoop, gameSpeedDelay);
    draw();
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (!gameStarted && (event.code === 'Space' || event.key === ' ')) {
      beginGame();
    } else {
      switch (event.key) {
        case 'w':
        case 'ArrowUp': if (direction !== 'down') nextDirection = 'up'; break;
        case 's':
        case 'ArrowDown': if (direction !== 'up') nextDirection = 'down'; break;
        case 'a':
        case 'ArrowLeft': if (direction !== 'right') nextDirection = 'left'; break;
        case 'd':
        case 'ArrowRight': if (direction !== 'left') nextDirection = 'right'; break;
      }
    }
  }

  document.addEventListener('keydown', handleKeyPress);

  function increaseSpeed() {
    if (gameSpeedDelay > 150) gameSpeedDelay -= 5;
    else if (gameSpeedDelay > 100) gameSpeedDelay -= 3;
    else if (gameSpeedDelay > 50) gameSpeedDelay -= 2;

    // Clear and restart interval with new speed
    if (gameInterval !== null) {
      clearInterval(gameInterval);
      gameInterval = window.setInterval(gameLoop, gameSpeedDelay);
    }
  }

  function checkCollision(head: { x: number; y: number }): boolean {
    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
      resetGame();
      return true;
    }

    if (snake.some((s, i) => i > 0 && s.x === head.x && s.y === head.y)) {
      resetGame();
      return true;
    }

    return false;
  }

  function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{ x: 10, y: 10 }];
    food = generateFood();
    direction = 'right';
    nextDirection = 'right';
    gameSpeedDelay = 200;
    draw();
  }

  function updateScore() {
    if (scoreElement) scoreElement.textContent = (snake.length - 1).toString().padStart(3, '0');
  }

  function stopGame() {
    if (gameInterval !== null) clearInterval(gameInterval);
    gameInterval = null;
    gameStarted = false;
    if (instructionText) instructionText.style.display = 'block';
  }

  function updateHighScore() {
    const currentScore = snake.length - 1;
    if (currentScore > highScore) {
      highScore = currentScore;
      if (highScoreElement) highScoreElement.textContent = highScore.toString().padStart(3, '0');
    }
  }

  draw();
}
