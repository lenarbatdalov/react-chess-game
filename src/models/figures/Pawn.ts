import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

const blackLogo = require("../../assets/black-pawn.png");
const whiteLogo = require("../../assets/white-pawn.png");

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    return true;
  }
}