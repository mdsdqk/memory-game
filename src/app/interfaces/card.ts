export interface Card {
	content: number,
	state: State
}

export enum State {
	"DEFAULT" = "Default",
	"VISIBLE" = "Visible",
	"REMOVED" = "Removed"
}