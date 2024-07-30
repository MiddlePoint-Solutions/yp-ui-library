import Apple from './Apple';
import ArrowLine from './ArrowLine';
import Bars from './Bars';
import CheckedStroke from './CheckedStroke';
import Checked from './Checked';
import Close from './Close';
import Facebook from './Facebook';
import Google from './Google';
import Hourglass from './Hourglass';
import Listen from './Listen';
import Logout from './Logout';
import Note from './Note';
import PlayCircle from './PlayCircle';
import PlayDotted from './PlayDotted';
import PlayFilled from './PlayFilled';
import Play from './Play';
import Ring from './Ring';
import Search from './Search';
import Spinner from './Spinner';
import Stack from './Stack';
import X from './X';
import { SVGProps } from "react";

export enum EIcon {
	Apple = 'Apple',
	ArrowLine = 'ArrowLine',
	Bars = 'Bars',
	CheckedStroke = 'CheckedStroke',
	Checked = 'Checked',
	Close = 'Close',
	Facebook = 'Facebook',
	Google = 'Google',
	Hourglass = 'Hourglass',
	Listen = 'Listen',
	Logout = 'Logout',
	Note = 'Note',
	PlayCircle = 'PlayCircle',
	PlayDotted = 'PlayDotted',
	PlayFilled = 'PlayFilled',
	Play = 'Play',
	Ring = 'Ring',
	Search = 'Search',
	Spinner = 'Spinner',
	Stack = 'Stack',
	X = 'X',
}

export const iconMap: Record<EIcon, React.FC<SVGProps<SVGSVGElement>>> = {
	[EIcon.Apple]: Apple,
	[EIcon.ArrowLine]: ArrowLine,
	[EIcon.Bars]: Bars,
	[EIcon.CheckedStroke]: CheckedStroke,
	[EIcon.Checked]: Checked,
	[EIcon.Close]: Close,
	[EIcon.Facebook]: Facebook,
	[EIcon.Google]: Google,
	[EIcon.Hourglass]: Hourglass,
	[EIcon.Listen]: Listen,
	[EIcon.Logout]: Logout,
	[EIcon.Note]: Note,
	[EIcon.PlayCircle]: PlayCircle,
	[EIcon.PlayDotted]: PlayDotted,
	[EIcon.PlayFilled]: PlayFilled,
	[EIcon.Play]: Play,
	[EIcon.Ring]: Ring,
	[EIcon.Search]: Search,
	[EIcon.Spinner]: Spinner,
	[EIcon.Stack]: Stack,
	[EIcon.X]: X,
}