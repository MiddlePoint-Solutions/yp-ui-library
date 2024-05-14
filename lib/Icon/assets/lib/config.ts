import Bars from "./Bars";
import Listen from "./Listen";
import Logout from "./Logout";
import Note from "./Note";
import PlayCircle from "./PlayCircle";
import PlayDotted from "./PlayDotted";
import Play from "./Play";
import Ring from "./Ring";
import Search from "./Search";
import X from "./X";
import { HTMLAttributes } from "react";

export enum EIcon {
  Bars = "Bars",
  Listen = "Listen",
  Logout = "Logout",
  Note = "Note",
  PlayCircle = "PlayCircle",
  PlayDotted = "PlayDotted",
  Play = "Play",
  Ring = "Ring",
  Search = "Search",
  X = "X",
}

export const iconMap: Record<
  EIcon,
  React.FC<HTMLAttributes<HTMLOrSVGElement>>
> = {
  [EIcon.Bars]: Bars,
  [EIcon.Listen]: Listen,
  [EIcon.Logout]: Logout,
  [EIcon.Note]: Note,
  [EIcon.PlayCircle]: PlayCircle,
  [EIcon.PlayDotted]: PlayDotted,
  [EIcon.Play]: Play,
  [EIcon.Ring]: Ring,
  [EIcon.Search]: Search,
  [EIcon.X]: X,
};
