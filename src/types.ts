export interface PlayerSortProps {
	assists: number;
	bonus: number;
	bps: number;
	clean_sheets: number;
	element_type: number;
	event_points: number;
	form: string;
	goals_conceded: number;
	goals_scored: number;
	id: number;
	minutes: number;
	now_cost: number;
	own_goals: number;
	penalties_missed: number;
	penalties_saved: number;
	points_per_game: number;
	position?: string;
	ppg_per_million: string;
	red_cards: number;
	saves: number;
	second_name: string;
	selected_by_percent: string;
	team: number;
	team_abbr?: string;
	team_name?: string;
	total_points: number;
	transfers_in: number;
	transfers_in_event: number;
	transfers_out: number;
	transfers_out_event: number;
	value_form: string;
	value_season: string;
	yellow_cards: number;
	web_name: string;
}

export type playerProp = keyof PlayerSortProps;

export interface Player extends PlayerSortProps {
	chance_of_playing_next_round: number | null;
	chance_of_playing_this_round: number | null;
	code: number;
	corners_and_indirect_freekicks_order: number | null;
	corners_and_indirect_freekicks_text: string;
	cost_change_event: number;
	cost_change_event_fall: number;
	cost_change_start: number;
	cost_change_start_fall: number;
	creativity: string;
	creativity_rank: number;
	creativity_rank_type: number;
	direct_freekicks_order: number | null;
	direct_freekicks_text: string;
	dreamteam_count: number;
	ep_next: string;
	ep_this: string;
	first_name: string;
	ict_index: string;
	ict_index_rank: number;
	ict_index_rank_type: number;
	in_dreamteam: boolean;
	influence: string;
	influence_rank: number;
	influence_rank_type: number;
	news: string;
	news_added: number | null;
	penalties_order: number | null;
	penalties_text: string;
	photo: string;
	special: boolean;
	squad_number: number | null;
	status: string;
	team_code: number;
	threat: string;
	threat_rank: number;
	threat_rank_type: number;
}

// position - FWD - element_type 4, MID - element_type 3, DEF - element_type 2, GK - element_type 1

interface Fixture {
	id: number;
	code: number;
	team_h: number;
	team_h_score: null | number;
	team_a: number;
	team_a_score: null | number;
	event: number;
	finished: boolean;
	minutes: number;
	provisional_start_time: boolean;
	kickoff_time: Date;
	event_name: string;
	is_home: boolean;
	difficulty: number;
}

interface Result {
	element: number;
	fixture: number;
	opponent_team: number;
	total_points: number;
	was_home: boolean;
	kickoff_time: Date;
	team_h_score: number;
	team_a_score: number;
	round: number;
	minutes: number;
	goals_scored: number;
	assists: number;
	clean_sheets: number;
	goals_conceded: number;
	own_goals: number;
	penalties_saved: number;
	penalties_missed: number;
	yellow_cards: number;
	red_cards: number;
	saves: number;
	bonus: number;
	bps: number;
	influence: string;
	creativity: string;
	threat: string;
	ict_index: string;
	value: number;
	transfers_balance: number;
	selected: number;
	transfers_in: number;
	transfers_out: number;
}

interface PastSeason {
	season_name: string;
	element_code: number;
	start_cost: number;
	end_cost: number;
	total_points: number;
	minutes: number;
	goals_scored: number;
	assists: number;
	clean_sheets: number;
	goals_conceded: number;
	own_goals: number;
	penalties_saved: number;
	penalties_missed: number;
	yellow_cards: number;
	red_cards: number;
	saves: number;
	bonus: number;
	bps: number;
	influence: string;
	creativity: string;
	threat: string;
	ict_index: string;
}
export interface FullPlayerProps extends Player {
	fixtures: Fixture[];
	history: Result[];
	history_past: [] | PastSeason[];
}
