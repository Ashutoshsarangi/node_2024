import { Breakfast } from "./models/Breakfast/breakFast.model.js";

const breakFast = new Breakfast({
  eggs: 7,
  bacon: 5,
  drinks: "Tea",
});

console.log(
  "Breakfast errors --> ",
  breakFast.validateSync() ? breakFast.validateSync() : "No Error Found"
);
