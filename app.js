const SUPABASE_URL =
  "https://ezxiynzzeomcbjfzzlqb.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_MFTBKiQxmw0FHC3g-TT0zw_-rLiSrmQ";

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );

const screens = {
  auth:
    document.getElementById(
      "auth-screen"
    ),

  menu:
    document.getElementById(
      "menu-screen"
    ),

  game:
    document.getElementById(
      "game-screen"
    ),

  double:
    document.getElementById(
      "double-screen"
    ),

  end:
    document.getElementById(
      "end-screen"
    ),

  watches:
    document.getElementById(
      "watch-screen"
    ),

  redemption:
  document.getElementById(
    "redemption-screen"
  ),

  stats:
    document.getElementById(
      "stats-screen"
    )
};

const authTitle =
  document.getElementById(
    "auth-title"
  );

const authEmail =
  document.getElementById(
    "auth-email"
  );

const authUsername =
  document.getElementById(
    "auth-username"
  );

const authPassword =
  document.getElementById(
    "auth-password"
  );

const authConfirmPassword =
  document.getElementById(
    "auth-confirm-password"
  );

const authMainButton =
  document.getElementById(
    "auth-main-button"
  );

const authSwitchButton =
  document.getElementById(
    "auth-switch-button"
  );

const authMessage =
  document.getElementById(
    "auth-message"
  );

let authMode = "login";

const playerCashEl = document.getElementById("player-cash");
const usernameButton = document.getElementById("username-button");
const watchNameEl = document.getElementById("watch-name");
const watchValueEl = document.getElementById("watch-value");
const equippedWatchDisplay = document.querySelector(".watch-image-placeholder");

const playButton = document.getElementById("play-button");
const statsButton = document.getElementById("stats-button");
const watchCard = document.getElementById("watch-card");

const gameBoard = document.getElementById("game-board");
const runScoreEl = document.getElementById("run-score");
const cashOutButton = document.getElementById("cash-out-button");

const endWrap = document.querySelector(".end-wrap");
const endTitle = document.getElementById("end-title");
const endScore = document.getElementById("end-score");
const endMessage = document.getElementById("end-message");

const newGameButton = document.getElementById("new-game-button");
const menuButton = document.getElementById("menu-button");

const watchBackButton = document.getElementById("watch-back-button");
const statsBackButton = document.getElementById("stats-back-button");
const watchList = document.getElementById("watch-list");

const usernameModal = document.getElementById("username-modal");
const usernameInput = document.getElementById("username-input");
const saveUsernameButton = document.getElementById("save-username-button");
const cancelUsernameButton = document.getElementById("cancel-username-button");

const statBestRun = document.getElementById("stat-best-run");
const statLifetime = document.getElementById("stat-lifetime");
const statRuns = document.getElementById("stat-runs");
const statBusts = document.getElementById("stat-busts");
const statJackpots = document.getElementById("stat-jackpots");
const statWatchValue = document.getElementById("stat-watch-value");

const redemptionBoard =
  document.getElementById("redemption-board");

const redemptionCount =
  document.getElementById("redemption-count");

const redemptionMessage =
  document.getElementById("redemption-message");

const PAID_CLASSIC_ENTRY_FEE = 5000;

const dailyDay =
  document.getElementById("daily-day");

const dailyStreak =
  document.getElementById("daily-streak");

const dailyTarget =
  document.getElementById("daily-target");

const dailyProgressFill =
  document.getElementById("daily-progress-fill");

const dailyProgressText =
  document.getElementById("daily-progress-text");

const dailyAttempts =
  document.getElementById("daily-attempts");

const BOARD_SIZE = 25;
const BOMB_COUNT = 4;
const MULTIPLIER_COUNT = 4;
const JACKPOT_AMOUNT = 1000000;

const modeModal = document.getElementById("mode-modal");

const classicModeButton =
  document.getElementById("classic-mode-button");

const doubleModeButton =
  document.getElementById("double-mode-button");

const cancelModeButton =
  document.getElementById("cancel-mode-button");

const doubleBalance =
  document.getElementById("double-balance");

const doubleBetMenu =
  document.getElementById("double-bet-menu");

const doubleGameArea =
  document.getElementById("double-game-area");

const betHalfButton =
  document.getElementById("bet-half-button");

const betAllButton =
  document.getElementById("bet-all-button");

const halfBetAmount =
  document.getElementById("half-bet-amount");

const allBetAmount =
  document.getElementById("all-bet-amount");

const doubleCurrentBet =
  document.getElementById("double-current-bet");

const doubleBoxes =
  document.getElementById("double-boxes");

const doubleResult =
  document.getElementById("double-result");

const doubleResultButtons =
  document.getElementById("double-result-buttons");

const doubleAgainButton =
  document.getElementById("double-again-button");

const doubleMenuButton =
  document.getElementById("double-menu-button");

const doubleBackButton =
  document.getElementById("double-back-button");

const watches = [
  {
  id: "starter",
  name: "Starter",
  price: 0,
  image: "assets/watches/starter.png"
  },

  {
    id: "metro",
    name: "Metro",
    price: 5000,
    image: "assets/watches/metro.png"
  },
  {
    id: "slate",
    name: "Slate",
    price: 15000,
    image: "assets/watches/slate.png"
  },
  {
    id: "sterling",
    name: "Sterling",
    price: 35000,
    image: "assets/watches/sterling.png"
  },
  {
    id: "meridian",
    name: "Meridian",
    price: 75000,
    image: "assets/watches/meridian.png"
  },
  {
    id: "nocturne",
    name: "Nocturne",
    price: 150000,
    image: "assets/watches/nocturne.png"
  },
  {
    id: "regent",
    name: "Regent",
    price: 300000,
    image: "assets/watches/regent.png"
  },
  {
    id: "aurum",
    name: "Aurum",
    price: 600000,
    image: "assets/watches/aurum.png"
  },
  {
    id: "monarch",
    name: "Monarch",
    price: 1200000,
    image: "assets/watches/monarch.png"
  },
  {
    id: "obsidian",
    name: "Obsidian",
    price: 2500000,
    image: "assets/watches/obsidian.png"
  },
  {
    id: "imperial",
    name: "Imperial",
    price: 5000000,
    image: "assets/watches/imperial.png"
  },

  {
    id: "frost",
    name: "Frost",
    price: 8000000,
    image: "assets/watches/frost.png"
  },
  {
    id: "emerald",
    name: "Emerald",
    price: 12000000,
    image: "assets/watches/emerald.png"
  },
  {
    id: "phantom",
    name: "Phantom",
    price: 18000000,
    image: "assets/watches/phantom.png"
  },
  {
    id: "dynasty",
    name: "Dynasty",
    price: 25000000,
    image: "assets/watches/dynasty.png"
  },
  {
    id: "sovereign",
    name: "Sovereign",
    price: 35000000,
    image: "assets/watches/sovereign.png"
  },

  {
    id: "eclipse",
    name: "Eclipse",
    price: 50000000,
    image: "assets/watches/eclipse.png"
  },
  {
    id: "celestial",
    name: "Celestial",
    price: 70000000,
    image: "assets/watches/celestial.png"
  },
  {
    id: "reverence",
    name: "Reverence",
    price: 95000000,
    image: "assets/watches/reverence.png"
  },
  {
    id: "majesty",
    name: "Majesty",
    price: 125000000,
    image: "assets/watches/majesty.png"
  },
  {
    id: "imperium",
    name: "Imperium",
    price: 160000000,
    image: "assets/watches/imperium.png"
  },
  {
    id: "eternum",
    name: "Eternum",
    price: 200000000,
    image: "assets/watches/eternum.png"
  },
  {
    id: "ascendant",
    name: "Ascendant",
    price: 250000000,
    image: "assets/watches/ascendant.png"
  },
  {
    id: "dominion",
    name: "Dominion",
    price: 325000000,
    image: "assets/watches/dominion.png"
  },
  {
    id: "paragon",
    name: "Paragon",
    price: 400000000,
    image: "assets/watches/paragon.png"
  },
  {
    id: "the_crown",
    name: "The Crown",
    price: 500000000,
    image: "assets/watches/the_crown.png"
  }
];

const defaultSave = {
  username: "PLAYER",
  cash: 0,
  equippedWatch: "starter",
  ownedWatches: ["starter"],
  bestRun: 0,
  lifetimeEarnings: 0,
  runsPlayed: 0,
  busts: 0,
  jackpots: 0
};

let saveData = loadSave();

let runScore = 0;
let boardData = [];
let revealedSafeTiles = 0;
let runActive = false;
let classicRunType = "free";
let doubleBet = 0;
let doubleRoundActive = false;
let doubleBoard = [];

function loadSave() {
  const stored = localStorage.getItem("oddsSave");

  if (!stored) {
    return { ...defaultSave };
  }

  try {
    const parsed = JSON.parse(stored);

    return {
      ...defaultSave,
      ...parsed,
      ownedWatches: Array.isArray(parsed.ownedWatches)
        ? parsed.ownedWatches
        : ["starter"]
    };
  } catch {
    return { ...defaultSave };
  }
}

function saveGame() {
  localStorage.setItem(
    "oddsSave",
    JSON.stringify(saveData)
  );

  saveCloudProfile();
}

function formatMoney(value) {
  return "$" + Math.floor(value).toLocaleString("en-US");
}

function showScreen(name) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove("active");
  });

  screens[name].classList.add("active");
}

function getEquippedWatch() {
  return (
    watches.find(watch => watch.id === saveData.equippedWatch) ||
    watches[0]
  );
}

function updateMenu() {
  usernameButton.textContent = "@" + saveData.username.toUpperCase();
  playerCashEl.textContent = formatMoney(saveData.cash);

  const watch = getEquippedWatch();

  watchNameEl.textContent = watch.name;
  watchValueEl.textContent = formatMoney(watch.price);

  equippedWatchDisplay.innerHTML = "";

  if (watch.image) {
    const img = document.createElement("img");
    img.src = watch.image;
    img.alt = watch.name;
    equippedWatchDisplay.appendChild(img);
  } else {
    equippedWatchDisplay.textContent = watch.icon || "⌚";
  }
}

function randomMoneyAmount() {
  const roll = Math.random() * 100;

  if (roll < 24) return 100;
  if (roll < 44) return 250;
  if (roll < 60) return 500;
  if (roll < 72) return 1000;
  if (roll < 82) return 2500;
  if (roll < 89) return 5000;
  if (roll < 94) return 10000;
  if (roll < 97) return 25000;
  if (roll < 99) return 50000;

  return 100000;
}

function randomMultiplier() {
  const roll = Math.random() * 100;

  if (roll < 55) return 2;
  if (roll < 80) return 3;
  if (roll < 95) return 5;

  return 10;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function generateBoard() {
  const board = [];

  for (let i = 0; i < BOMB_COUNT; i++) {
    board.push({
      type: "bomb",
      revealed: false
    });
  }

  for (let i = 0; i < MULTIPLIER_COUNT; i++) {
    board.push({
      type: "multiplier",
      value: randomMultiplier(),
      revealed: false
    });
  }

  const remainingMoneyTiles =
    BOARD_SIZE - BOMB_COUNT - MULTIPLIER_COUNT;

  for (let i = 0; i < remainingMoneyTiles; i++) {
    board.push({
      type: "money",
      value: randomMoneyAmount(),
      revealed: false
    });
  }

  return shuffle(board);
}

function startGame(type = "free") {
  classicRunType = type;
  
  runScore = 0;
  revealedSafeTiles = 0;
  runActive = true;

  boardData = generateBoard();

  saveData.runsPlayed += 1;
  saveGame();

  runScoreEl.textContent = formatMoney(runScore);

  renderBoard();
  showScreen("game");
}

function renderBoard() {
  gameBoard.innerHTML = "";

  boardData.forEach((tileData, index) => {
    const tile = document.createElement("button");

    tile.className = "tile";
    tile.textContent = "?";

    tile.addEventListener("click", () => {
      revealTile(index, tile);
    });

    gameBoard.appendChild(tile);
  });
}

function revealTile(index, tileElement) {
  if (!runActive) return;

  const tileData = boardData[index];

  if (tileData.revealed) return;

  tileData.revealed = true;
  tileElement.classList.add("revealed");

  if (tileData.type === "bomb") {
    tileElement.classList.add("bomb");
    tileElement.textContent = "💣";

    bustRun();

    return;
  }

  revealedSafeTiles += 1;

  if (tileData.type === "money") {
    tileElement.classList.add("money");
    tileElement.textContent = "+" + formatMoney(tileData.value);

    runScore += tileData.value;
  }

  if (tileData.type === "multiplier") {
    tileElement.classList.add("multiplier");
    tileElement.textContent = "×" + tileData.value;

    runScore *= tileData.value;
  }

  runScoreEl.textContent = formatMoney(runScore);

  const totalSafeTiles = BOARD_SIZE - BOMB_COUNT;

  if (revealedSafeTiles >= totalSafeTiles) {
    triggerJackpot();
  }
}

function cashOut() {
  if (!runActive) return;
  if (classicRunType === "free") {
  runActive = false;

  finishFreeClassicRun(runScore)
    .then(() => {
      endWrap.classList.remove(
        "busted",
        "jackpot"
      );

      endTitle.textContent =
        "CASHED OUT";

      endScore.textContent =
        formatMoney(runScore);

      endMessage.textContent =
        "Daily attempt completed.";

      showScreen("end");
    })
    .catch(error => {
      console.error(error);

      alert(
        "Unable to save daily attempt."
      );
    });

  return;
}

  runActive = false;

  saveData.cash += runScore;
  saveData.lifetimeEarnings += runScore;

  if (runScore > saveData.bestRun) {
    saveData.bestRun = runScore;
  }

  saveGame();

  endWrap.classList.remove("busted", "jackpot");

  endTitle.textContent = "CASHED OUT";
  endScore.textContent = formatMoney(runScore);
  endMessage.textContent = "Added to your balance.";

  showScreen("end");
}

function bustRun() {
  runActive = false;
  if (classicRunType === "free") {
  finishFreeClassicRun(0)
    .then(() => {
      revealBombs();

      setTimeout(() => {
        endWrap.classList.remove(
          "jackpot"
        );

        endWrap.classList.add(
          "busted"
        );

        endTitle.textContent =
          "BUST";

        endScore.textContent =
          "$0";

        endMessage.textContent =
          "Daily attempt used.";

        showScreen("end");
      }, 450);
    })
    .catch(error => {
      console.error(error);

      alert(
        "Unable to save daily attempt."
      );
    });

  return;
}

  saveData.busts += 1;
  saveGame();

  revealBombs();

  setTimeout(() => {
    endWrap.classList.remove("jackpot");
    endWrap.classList.add("busted");

    endTitle.textContent = "BUST";
    endScore.textContent = formatMoney(runScore);
    endMessage.textContent = "Run lost. Your balance is safe.";

    showScreen("end");
  }, 450);
}

function triggerJackpot() {
  if (!runActive) return;

  runActive = false;
  if (classicRunType === "free") {
  runScore += JACKPOT_AMOUNT;

  finishFreeClassicRun(runScore)
    .then(() => {
      endWrap.classList.remove(
        "busted"
      );

      endWrap.classList.add(
        "jackpot"
      );

      endTitle.textContent =
        "JACKPOT";

      endScore.textContent =
        formatMoney(runScore);

      endMessage.textContent =
        "Daily attempt completed.";

      showScreen("end");
    })
    .catch(error => {
      console.error(error);

      alert(
        "Unable to save daily attempt."
      );
    });

  return;
}

  runScore += JACKPOT_AMOUNT;

  saveData.cash += runScore;
  saveData.lifetimeEarnings += runScore;
  saveData.jackpots += 1;

  if (runScore > saveData.bestRun) {
    saveData.bestRun = runScore;
  }

  saveGame();

  runScoreEl.textContent = formatMoney(runScore);

  endWrap.classList.remove("busted");
  endWrap.classList.add("jackpot");

  endTitle.textContent = "JACKPOT";
  endScore.textContent = formatMoney(runScore);
  endMessage.textContent =
    "+$1,000,000 board-clear bonus added.";

  setTimeout(() => {
    showScreen("end");
  }, 500);
}

function revealBombs() {
  const tileElements = [...gameBoard.children];

  boardData.forEach((tileData, index) => {
    if (tileData.type === "bomb") {
      const tile = tileElements[index];

      tile.classList.add("revealed", "bomb");
      tile.textContent = "💣";
    }
  });
}

function renderWatchShop() {
  watchList.innerHTML = "";

  watches.forEach(watch => {
    const owned = saveData.ownedWatches.includes(watch.id);
    const equipped = saveData.equippedWatch === watch.id;

    const card = document.createElement("div");
    card.className = "watch-shop-card";

    const image = document.createElement("div");
image.className = "watch-shop-image";

if (watch.image) {
  const img = document.createElement("img");
  img.src = watch.image;
  img.alt = watch.name;
  image.appendChild(img);
} else {
  image.textContent = watch.icon;
}

    const details = document.createElement("div");
    details.className = "watch-shop-details";

    const name = document.createElement("span");
    name.className = "watch-shop-name";
    name.textContent = watch.name;

    const price = document.createElement("span");
    price.className = "watch-shop-price";
    price.textContent = formatMoney(watch.price);

    const action = document.createElement("button");
    action.className = "watch-shop-action";

    if (equipped) {
      action.textContent = "EQUIPPED";
      action.classList.add("equipped");
    } else if (owned) {
      action.textContent = "EQUIP";
      action.classList.add("owned");

      action.addEventListener("click", () => {
        saveData.equippedWatch = watch.id;
        saveGame();
        renderWatchShop();
        updateMenu();
      });
    } else {
      action.textContent = "BUY";

      action.addEventListener("click", () => {
        buyWatch(watch);
      });
    }

    details.appendChild(name);
    details.appendChild(price);
    details.appendChild(action);

    card.appendChild(image);
    card.appendChild(details);

    watchList.appendChild(card);
  });
}

async function buyWatch(watch) {
  if (saveData.cash < watch.price) {
    alert("Not enough cash.");
    return;
  }

  const {
    data: userData,
    error: userError
  } =
    await supabaseClient.auth.getUser();

  if (
    userError ||
    !userData.user
  ) {
    alert(
      "Unable to verify your account."
    );
    return;
  }

  const user =
    userData.user;

  const {
    error: itemError
  } =
    await supabaseClient
      .from("player_items")
      .insert({
        user_id:
          user.id,

        item_type:
          "watch",

        item_id:
          watch.id,

        purchased_price:
          watch.price
      });

  if (itemError) {
    console.error(
      itemError
    );

    alert(
      "Unable to purchase watch."
    );

    return;
  }

  saveData.cash -=
    watch.price;

  saveData.ownedWatches.push(
    watch.id
  );

  saveData.equippedWatch =
    watch.id;

  saveGame();

  renderWatchShop();
  updateMenu();
}

function openModeMenu() {
  modeModal.classList.add("active");
}

function closeModeMenu() {
  modeModal.classList.remove("active");
}


function openDoubleMode() {
  closeModeMenu();

  updateDoubleScreen();

  doubleBetMenu.style.display = "block";
  doubleGameArea.classList.remove("active");
  doubleResultButtons.classList.remove("active");

  showScreen("double");
}


function updateDoubleScreen() {
  const half = Math.floor(saveData.cash / 2);

  doubleBalance.textContent =
    formatMoney(saveData.cash);

  halfBetAmount.textContent =
    formatMoney(half);

  allBetAmount.textContent =
    formatMoney(saveData.cash);

  betHalfButton.disabled =
    saveData.cash < 2;

  betAllButton.disabled =
    saveData.cash <= 0;
}


function startDoubleRound(amount) {
  if (amount <= 0) {
    alert("You don't have enough cash.");
    return;
  }

  if (amount > saveData.cash) {
    return;
  }

  doubleBet = amount;
  doubleRoundActive = true;

  doubleBetMenu.style.display = "none";
  doubleGameArea.classList.add("active");

  doubleCurrentBet.textContent =
    formatMoney(doubleBet);

  doubleResult.textContent = "";
  doubleResult.className = "double-result";

  doubleResultButtons.classList.remove("active");

  createDoubleBoard();
}


function createDoubleBoard() {
  doubleBoard = [
    "bomb",
    "bomb",
    "win"
  ];

  shuffle(doubleBoard);

  doubleBoxes.innerHTML = "";

  doubleBoard.forEach((result, index) => {
    const box = document.createElement("button");

    box.className = "double-box";
    box.textContent = "?";

    box.addEventListener("click", () => {
      revealDoubleBox(index, box);
    });

    doubleBoxes.appendChild(box);
  });
}


function revealDoubleBox(index, boxElement) {
  if (!doubleRoundActive) return;

  doubleRoundActive = false;

  const result = doubleBoard[index];

  if (result === "bomb") {
    saveData.cash -= doubleBet;

    doubleResult.textContent =
      "-" + formatMoney(doubleBet);

    doubleResult.classList.add("lose");
  }

  if (result === "win") {
    /*
      The original bet stays in the player's balance.

      Winning a 2x wager means they PROFIT an additional
      amount equal to their bet.

      Example:
      $100,000 balance
      $50,000 bet
      Win -> $150,000 balance
    */

    saveData.cash += doubleBet;

    saveData.lifetimeEarnings += doubleBet;

    doubleResult.textContent =
      "+" + formatMoney(doubleBet);

    doubleResult.classList.add("win");
  }

  saveGame();

  revealDoubleBoard(index);

  doubleBalance.textContent =
    formatMoney(saveData.cash);

  doubleResultButtons.classList.add("active");
}


function revealDoubleBoard(selectedIndex) {
  const boxes = [...doubleBoxes.children];

  doubleBoard.forEach((result, index) => {
    const box = boxes[index];

    box.classList.add("revealed");

    if (result === "bomb") {
      box.textContent = "💣";
      box.classList.add("lose");
    }

    if (result === "win") {
      box.textContent = "×2";
      box.classList.add("win");
    }

    if (index === selectedIndex) {
      box.style.transform = "scale(1.04)";
    }
  });
}


function resetDoubleMode() {
  updateDoubleScreen();

  doubleBet = 0;
  doubleRoundActive = false;

  doubleBetMenu.style.display = "block";

  doubleGameArea.classList.remove("active");

  doubleBoxes.innerHTML = "";

  doubleResult.textContent = "";
  doubleResult.className = "double-result";

  doubleResultButtons.classList.remove("active");
}

function updateAuthScreen() {
  authMessage.textContent = "";

  authPassword.value = "";
  authConfirmPassword.value = "";

  if (authMode === "login") {
    authTitle.textContent =
      "WELCOME BACK";

    authMainButton.textContent =
      "LOG IN";

    authSwitchButton.textContent =
      "Create an account";

    authEmail.style.display =
      "none";

    authConfirmPassword.style.display =
      "none";

    authPassword.autocomplete =
      "current-password";
  } else {
    authTitle.textContent =
      "CREATE ACCOUNT";

    authMainButton.textContent =
      "CREATE ACCOUNT";

    authSwitchButton.textContent =
      "Already have an account?";

    authEmail.style.display =
      "block";

    authConfirmPassword.style.display =
      "block";

    authPassword.autocomplete =
      "new-password";
  }
}

async function createODDSAccount() {
  const username =
    authUsername.value
      .trim()
      .toLowerCase()
      .replace(
        /[^a-z0-9_]/g,
        ""
      )
      .slice(0, 16);

  const email =
    authEmail.value
      .trim()
      .toLowerCase();

  const password =
    authPassword.value;

  const confirmPassword =
    authConfirmPassword.value;

  if (username.length < 3) {
    throw new Error(
      "Username must be at least 3 characters."
    );
  }

  if (!email) {
    throw new Error(
      "Enter your email."
    );
  }

  if (password.length < 6) {
    throw new Error(
      "Password must be at least 6 characters."
    );
  }

  if (
    password !== confirmPassword
  ) {
    throw new Error(
      "Passwords do not match."
    );
  }

  const {
  data,
  error
} =
  await supabaseClient.auth.signUp({
    email,
    password,

    options: {
      data: {
        username
      }
    }
  });

  if (error) {
    throw error;
  }

  authMessage.style.color =
    "var(--green)";

  if (!data.session) {
    authMessage.textContent =
      "Account created. Check your email to confirm it, then log in with your username.";
  } else {
    await loadCloudProfile();
    showScreen("menu");
  }
}

async function loginWithUsername() {
  const username =
    authUsername.value
      .trim()
      .toLowerCase();

  const password =
    authPassword.value;

  if (!username || !password) {
    throw new Error(
      "Enter your username and password."
    );
  }

  const {
    data,
    error
  } =
    await supabaseClient.functions.invoke(
      "username-login",
      {
        body: {
          username,
          password
        }
      }
    );

  if (error) {
    throw new Error(
      "Invalid username or password."
    );
  }

  if (
    !data?.access_token ||
    !data?.refresh_token
  ) {
    throw new Error(
      data?.error ||
      "Invalid username or password."
    );
  }

  const {
    error: sessionError
  } =
    await supabaseClient.auth.setSession({
      access_token:
        data.access_token,

      refresh_token:
        data.refresh_token
    });

  if (sessionError) {
    throw sessionError;
  }

  await loadCloudProfile();

  showScreen("menu");
}

async function handleAuth() {
  authMessage.textContent = "";

  authMessage.style.color =
    "var(--red)";

  authMainButton.disabled = true;

  try {
    if (authMode === "signup") {
      await createODDSAccount();
    } else {
      await loginWithUsername();
    }
  } catch (error) {
    authMessage.textContent =
      error.message ||
      "Something went wrong.";
  }

  authMainButton.disabled = false;
}

async function loadCloudProfile() {
  const {
    data: userData,
    error: userError
  } =
    await supabaseClient.auth.getUser();

  if (
    userError ||
    !userData.user
  ) {
    throw new Error(
      "Unable to load account."
    );
  }

  const user =
    userData.user;

  const {
    data: profile,
    error: profileError
  } =
    await supabaseClient
      .from("profiles")
      .select(`
        username,
        cash,
        current_streak,
        longest_streak,
        best_run,
        lifetime_earnings,
        equipped_watch
      `)
      .eq("id", user.id)
      .single();

  if (profileError) {
    throw profileError;
  }

  const {
    data: items,
    error: itemError
  } =
    await supabaseClient
      .from("player_items")
      .select("item_id")
      .eq("user_id", user.id)
      .eq("item_type", "watch");

  if (itemError) {
    throw itemError;
  }

  saveData.username =
    profile.username;

  saveData.cash =
    Number(profile.cash);

  saveData.currentStreak =
    profile.current_streak;

  saveData.longestStreak =
    profile.longest_streak;

  saveData.bestRun =
    Number(profile.best_run);

  saveData.lifetimeEarnings =
    Number(
      profile.lifetime_earnings
    );

  saveData.equippedWatch =
    profile.equipped_watch;

  saveData.ownedWatches =
    items.length
      ? items.map(
          item => item.item_id
        )
      : ["starter"];

  saveGame();
  updateMenu();
  await loadDailyChallenge();
}

async function saveCloudProfile() {
  const {
    data: userData,
    error: userError
  } =
    await supabaseClient.auth.getUser();

  if (
    userError ||
    !userData.user
  ) {
    console.error(
      "No authenticated user for cloud save."
    );
    return;
  }

  const user =
    userData.user;

  const {
    error
  } =
    await supabaseClient
      .from("profiles")
      .update({
        cash:
          saveData.cash,

        current_streak:
          saveData.currentStreak || 0,

        longest_streak:
          saveData.longestStreak || 0,

        best_run:
          saveData.bestRun,

        lifetime_earnings:
          saveData.lifetimeEarnings,

        equipped_watch:
          saveData.equippedWatch,

        updated_at:
          new Date().toISOString()
      })
      .eq("id", user.id);

  if (error) {
    console.error(
      "Cloud profile save failed:",
      error
    );
  }
}

async function startRedemption() {
  try {
    const { data, error } =
      await supabaseClient.rpc(
        "start_odds_redemption"
      );

    if (error) throw error;

    redemptionCount.textContent =
      data.safe_picks + " / 15";

    redemptionMessage.textContent =
      "Reveal 15 safe tiles. One bomb ends it.";

    redemptionBoard.innerHTML = "";

    for (let i = 0; i < 25; i++) {
      const tile =
        document.createElement("button");

      tile.className = "tile";
      tile.textContent = "?";

      redemptionBoard.appendChild(tile);
    }

    showScreen("redemption");

  } catch (error) {
    console.error(error);

    alert(
      "Unable to start Redemption."
    );
  }
}

async function handleDailyStatusAfterRun() {
  try {
    const {
      data,
      error
    } =
      await supabaseClient.rpc(
        "get_today_odds_challenge"
      );

    if (error) {
      throw error;
    }

    const completed =
      Boolean(data.completed);

    const attemptsLeft =
      Number(data.attempts_left || 0);

    const redemptionPending =
      Boolean(data.redemption_pending);

    if (completed) {
      return;
    }

    if (
      attemptsLeft <= 0 &&
      redemptionPending
    ) {
      alert(
        "Daily challenge failed. Redemption required."
      );
    }
  } catch (error) {
    console.error(
      "Daily status check failed:",
      error
    );
  }
}

function updateStats() {
  const watch = getEquippedWatch();

  statBestRun.textContent =
    formatMoney(saveData.bestRun);

  statLifetime.textContent =
    formatMoney(saveData.lifetimeEarnings);

  statRuns.textContent =
    saveData.runsPlayed.toLocaleString("en-US");

  statBusts.textContent =
    saveData.busts.toLocaleString("en-US");

  statJackpots.textContent =
    saveData.jackpots.toLocaleString("en-US");

  statWatchValue.textContent =
    formatMoney(watch.price);
}

playButton.addEventListener("click", openModeMenu);

cashOutButton.addEventListener("click", cashOut);

newGameButton.addEventListener("click", startGame);

menuButton.addEventListener("click", () => {
  updateMenu();
  showScreen("menu");
});

watchCard.addEventListener("click", () => {
  renderWatchShop();
  showScreen("watches");
});

watchBackButton.addEventListener("click", () => {
  updateMenu();
  showScreen("menu");
});

authMainButton.addEventListener(
  "click",
  handleAuth
);

authSwitchButton.addEventListener(
  "click",
  () => {
    authMode =
      authMode === "login"
        ? "signup"
        : "login";

    updateAuthScreen();
  }
);

authPassword.addEventListener(
  "keydown",
  event => {
    if (
      event.key === "Enter" &&
      authMode === "login"
    ) {
      handleAuth();
    }
  }
);

async function finishFreeClassicRun(winnings) {
  const {
    data,
    error
  } =
    await supabaseClient.rpc(
      "finish_free_classic_attempt",
      {
        run_winnings: winnings
      }
    );

  if (error) {
    throw error;
  }
  
 await loadCloudProfile();
await loadDailyChallenge();
await handleDailyStatusAfterRun();

return data;
}

async function loadDailyChallenge() {
  try {
    const {
      data,
      error
    } =
      await supabaseClient.rpc(
        "get_today_odds_challenge"
      );

    if (error) {
      throw error;
    }

    const progress =
      Number(data.progress || 0);

    const target =
      Number(data.target || 0);

    const attemptsUsed =
      Number(data.attempts_used || 0);

    const attemptsLeft =
      Math.max(5 - attemptsUsed, 0);

    dailyDay.textContent =
      "DAY " + data.challenge_day;

    dailyStreak.textContent =
      "🔥 " + (saveData.currentStreak || 0);

    dailyTarget.textContent =
      formatMoney(target);

    dailyProgressText.textContent =
      formatMoney(progress) +
      " / " +
      formatMoney(target);

    const percent =
      target > 0
        ? Math.min(
            (progress / target) * 100,
            100
          )
        : 0;

    dailyProgressFill.style.width =
      percent + "%";

    let dots = "";

    for (let i = 0; i < 5; i++) {
      dots +=
        i < attemptsLeft
          ? "● "
          : "○ ";
    }

    dailyAttempts.textContent =
      dots.trim();
  } catch (error) {
    console.error(
      "Daily challenge load failed:",
      error
    );
  }
}

classicModeButton.addEventListener("click", async () => {
  closeModeMenu();

  try {
    const {
      data,
      error
    } =
      await supabaseClient.rpc(
        "get_today_odds_challenge"
      );

    if (error) {
      throw error;
    }

    const attemptsUsed =
      Number(data.attempts_used || 0);

    const challengeCompleted =
      Boolean(data.completed);

    const redemptionPending =
      Boolean(data.redemption_pending);

    if (redemptionPending) {
      alert(
        "You must complete Redemption first."
      );
      return;
    }

    // Free Classic attempts are available
    // until all 5 have been used.
    if (attemptsUsed < 5) {
      startGame("free");
      return;
    }

    // If all 5 were used without completing
    // the challenge, paid Classic is locked.
    if (!challengeCompleted) {
      alert(
        "Daily challenge failed. Redemption required."
      );
      return;
    }

    // Challenge completed + freebies used:
    // Classic now costs money.
    if (
      saveData.cash <
      PAID_CLASSIC_ENTRY_FEE
    ) {
      alert(
        "You need " +
        formatMoney(
          PAID_CLASSIC_ENTRY_FEE
        ) +
        " to play Classic."
      );
      return;
    }

    saveData.cash -=
      PAID_CLASSIC_ENTRY_FEE;

    saveGame();
    updateMenu();

    startGame("paid");

  } catch (error) {
    console.error(error);

    alert(
      "Unable to start Classic."
    );
  }
});

doubleModeButton.addEventListener("click", () => {
  openDoubleMode();
});

cancelModeButton.addEventListener("click", () => {
  closeModeMenu();
});

modeModal.addEventListener("click", event => {
  if (event.target === modeModal) {
    closeModeMenu();
  }
});

betHalfButton.addEventListener("click", () => {
  const amount = Math.floor(saveData.cash / 2);

  startDoubleRound(amount);
});

betAllButton.addEventListener("click", () => {
  startDoubleRound(saveData.cash);
});

doubleAgainButton.addEventListener("click", () => {
  resetDoubleMode();
});

doubleMenuButton.addEventListener("click", () => {
  updateMenu();
  showScreen("menu");
});

doubleBackButton.addEventListener("click", () => {
  updateMenu();
  showScreen("menu");
});

statsButton.addEventListener("click", () => {
  updateStats();
  showScreen("stats");
});

statsBackButton.addEventListener("click", () => {
  showScreen("menu");
});

usernameButton.addEventListener("click", () => {
  usernameInput.value = saveData.username;
  usernameModal.classList.add("active");
  usernameInput.focus();
});

saveUsernameButton.addEventListener("click", () => {
  const cleaned = usernameInput.value
    .trim()
    .replace(/[^a-zA-Z0-9_]/g, "")
    .slice(0, 16);

  if (!cleaned) {
    return;
  }

  saveData.username = cleaned;
  saveGame();
  updateMenu();

  usernameModal.classList.remove("active");
});

cancelUsernameButton.addEventListener("click", () => {
  usernameModal.classList.remove("active");
});

usernameModal.addEventListener("click", event => {
  if (event.target === usernameModal) {
    usernameModal.classList.remove("active");
  }
});

usernameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    saveUsernameButton.click();
  }
});

async function initializeODDS() {
  updateAuthScreen();

  try {
    const {
      data,
      error
    } =
      await supabaseClient.auth.getSession();

    if (
      !error &&
      data.session
    ) {
      await loadCloudProfile();

      showScreen("menu");

      return;
    }
  } catch (error) {
    console.error(
      "Session restore failed:",
      error
    );
  }

  showScreen("auth");
}

initializeODDS();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(registration => {
        console.log("ODDS service worker registered.");

        registration.update();
      })
      .catch(error => {
        console.error(
          "ODDS service worker registration failed:",
          error
        );
      });
  });
}

async function checkForUpdates() {
  try {
    const response = await fetch("./version.json", {
      cache: "no-store"
    });

    const data = await response.json();

    const currentVersion =
      localStorage.getItem("oddsVersion");

    if (!currentVersion) {
      localStorage.setItem(
        "oddsVersion",
        data.version
      );

      return;
    }

    if (currentVersion !== data.version) {
      localStorage.setItem(
        "oddsVersion",
        data.version
      );

      window.location.reload();
    }
  } catch (error) {
    console.log(
      "ODDS update check unavailable."
    );
  }
}

window.addEventListener("load", () => {
  checkForUpdates();
});
