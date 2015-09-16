function Pen(size, color, material, ink, inkColor) {
    this.type = "pen",
    this.size = size,
    this.color = color,
    this.material = material,
    this.inkType = ink,
    this.inkColor = inkColor,
    this.write = function () {
        console.log("I'am writing!!!");
    },
    this.getType = function () {
        console.log("You create " + this.material + " " + this.size + " " + this.color + " " + this.type + " " + "with " + this.inkType + " ink and " + this.inkColor + " color");    
    };
}

var pen = new Pen("big", "red", "metal", "gel", "black");
pen.getType();
pen.write();

function autoPen() { 
    Pen.apply(this, ["medium", "black", "metal", "oil", "green"]);
    this.type = "autopen";
    this.openClose = function () {
        var status = prompt("Want to write something? Yes or No");
        if(status == "yes") {
            console.log("Ready to write something");
            this.write();
        }
        else if (status == "no") {
            console.log("Maybe another time...");
        }
    };
}

autoPen.prototype = Object.create(Pen.prototype);
var autopen = new autoPen();
autopen.getType();
autopen.openClose();

function autoPencil() {
    autoPen.apply(this, ["small", "brown", "wood"]);
    this.type = "autopencil";
    this.replaceRod = function (newRod) {
        this.inkType = newRod;
        this.inkColor = "grey";
        console.log("Pencil is ready to draw or write!");
    };
}

autoPencil.prototype = Object.create(autoPen.prototype);
var autopencil = new autoPencil();
autopencil.replaceRod("graphite");
autopencil.getType();
autopencil.openClose();

function coloredPen() {
    autoPencil.apply(this, ["medium", "black", "metal", "oil"]);
    this.type = "colored pen";
    this.setManyColors = function(color1, color2, color3, color4) {
        this.inkColor = color1;
        this.inkColor2 = color2;
        this.inkColor3 = color3;
        this.inkColor4 = color4;
    };
    this.getType = function () {
        console.log("You create " + this.material + " " + this.size + " " + this.color + " " + this.type + " " + "with " + this.inkType + " ink and " + 
        this.inkColor + " " + this.inkColor2 + " " + this.inkColor3 + " " + this.inkColor4 + " color");    
    };
}

coloredPen.prototype = Object.create(autoPencil.prototype);
var colored_pen = new coloredPen();
colored_pen.setManyColors("blue", "red", "green", "orange");
colored_pen.getType();
colored_pen.openClose();