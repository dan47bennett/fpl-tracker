export interface PlayerSortProps {
	assists: number;
	bonus: number;
	bps: number;
	clean_sheets: number;
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
	points_per_game: string;
	red_cards: number;
	saves: number;
	second_name: string;
	selected_by_percent: string;
	total_points: number;
	transfers_in: number;
	transfers_in_event: number;
	transfers_out: number;
	transfers_out_event: number;
	value_form: string;
	value_season: string;
	yellow_cards: number;
}

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
	element_type: number;
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
	team: number;
	team_code: number;
	threat: string;
	threat_rank: number;
	threat_rank_type: number;
	web_name: string;
}