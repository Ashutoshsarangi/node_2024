import { Breakfastv2 } from "./models/Breakfast/breakFastv2.model.js";

const breakFastV2 = new Breakfastv2({
  eggs: 7,
  bacon: 5,
  drinks: "Tea",
});

console.log(
  "Breakfast errors --> ",
  breakFastV2.validateSync() ? breakFastV2.validateSync() : "No Error Found"
);
