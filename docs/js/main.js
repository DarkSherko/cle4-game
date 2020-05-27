class Code {
    constructor() {
        this.createCode();
    }
    createCode() {
        this.code = document.createElement("code");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.code);
        this.x = 0;
        this.y = 0;
        this.code.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Enemy1 {
    constructor() {
        this.leftspeed = 0;
        this.rightspeed = 0;
        this.enemy1 = document.createElement("enemy1");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.enemy1);
        this.leftkey = 65;
        this.rightkey = 68;
        this.x = 1000;
        this.y = 630;
        console.log(this.enemy1.clientWidth);
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    onKeyDown(e) {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftspeed = 10;
                break;
            case this.rightkey:
                this.rightspeed = 10;
                break;
        }
    }
    onKeyUp(e) {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftspeed = 0;
                break;
            case this.rightkey:
                this.rightspeed = 0;
                break;
        }
    }
    update() {
        let newX = this.x - this.leftspeed + this.rightspeed;
        if (newX > 0 && newX + 100 < (1440 - this.enemy1.clientWidth)) {
            this.x = newX;
        }
        this.enemy1.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Game {
    constructor() {
        this.canvas = document.createElement("canvas");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.canvas);
        this.robot = new Robot;
        this.tree = new Tree;
        this.enemy1 = new Enemy1;
        this.code = new Code;
        this.gameLoop();
    }
    gameLoop() {
        this.enemy1.update();
        this.robot.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => new Game());
class Robot {
    constructor() {
        this.jumping = true;
        this.left = false;
        this.right = false;
        this.space = false;
        this.x_velo = 0;
        this.y_velo = 0;
        this.robot = document.createElement("robot");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.robot);
        this.leftKey = 37;
        this.rightKey = 39;
        this.spaceKey = 32;
        this.x = 200;
        this.y = 630;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    onKeyDown(e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.left = true;
                break;
            case this.rightKey:
                this.right = true;
                break;
            case this.spaceKey:
                this.space = true;
                break;
        }
    }
    onKeyUp(e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.left = false;
                break;
            case this.rightKey:
                this.right = false;
                break;
            case this.spaceKey:
                this.space = false;
                break;
        }
    }
    update() {
        if (this.space && this.jumping == false) {
            this.y_velo -= 40;
            this.jumping = true;
        }
        if (this.left) {
            this.x_velo -= 1;
        }
        if (this.right) {
            this.x_velo += 1;
        }
        this.y_velo += 1.7;
        this.x += this.x_velo;
        this.y += this.y_velo;
        this.x_velo *= 0.9;
        this.y_velo *= 0.9;
        if (this.y > 550 - 16 - 32) {
            this.jumping = false;
            this.y = 550 - 16 - 32;
            this.y_velo = 0;
        }
        if (this.x < -200) {
            this.x = 1240;
        }
        else if (this.x > 1240) {
            this.x = -200;
        }
        console.log(this.left);
        console.log(this.robot.style.transform);
        this.robot.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Tree {
    constructor() {
        this.tree = document.createElement("tree");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.tree);
        this.x = 500;
        this.y = 400;
        this.tree.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=main.js.map