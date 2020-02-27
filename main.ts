let favoritefood = ["Pizza", "Ice Cream", "Cookies", "Rice", "Chicken"];
game.splash(favoritefood[0]);
game.splash(favoritefood[2]);
game.splash(favoritefood[4]);
game.splash(favoritefood[Math.randomRange(0, favoritefood.length - 1)]);
game.reset()