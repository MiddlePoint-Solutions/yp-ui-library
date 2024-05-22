import Apple from "./Apple";
import Bars from "./Bars";
import Facebook from "./Facebook";
import Google from "./Google";
import Listen from "./Listen";
import Logout from "./Logout";
import Note from "./Note";
import PlayCircle from "./PlayCircle";
import PlayDotted from "./PlayDotted";
import Play from "./Play";
import Ring from "./Ring";
import Search from "./Search";
import X from "./X";
import { SVGProps } from "react";

export enum EIcon {
  Apple = "Apple",
  Bars = "Bars",
  Facebook = "Facebook",
  Google = "Google",
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

export const iconMap: Record<EIcon, React.FC<SVGProps<SVGSVGElement>>> = {
  [EIcon.Apple]: Apple,
  [EIcon.Bars]: Bars,
  [EIcon.Facebook]: Facebook,
  [EIcon.Google]: Google,
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
