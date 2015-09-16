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